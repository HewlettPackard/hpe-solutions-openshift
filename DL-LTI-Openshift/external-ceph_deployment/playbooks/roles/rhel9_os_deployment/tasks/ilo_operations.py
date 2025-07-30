# (C) Copyright (2018,2021) Hewlett Packard Enterprise Development LP
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

from subprocess import CalledProcessError
import shutil
import subprocess
import threading
from redfish_object import RedfishObject
from time import sleep
import requests
import os
import json
from datetime import datetime
from datetime import timedelta

def wait_for_os_deployment_to_complete(redfish_object, server_serial_number, post_timeout=20, install_timeout=30):
    """This function is to initiate the OS deployment on the server once the virtual media is successfully attached.
    
    Arguments:
        redfish_object {object}       -- iLO Redfish object
        server_serial_number {string} -- Server serial number
    
    Keyword Arguments:
        post_timeout {int}            -- Timeout for POST operation (default: {20})
        install_timeout {int}         -- Timeout for install operation (default: {30})
    
    Returns:
        boolean -- Returns True on successful OS deployment. Returns False on failure of OS deployment
    """
    try:
        if not wait_for_post_to_complete(redfish_object, post_timeout):
            print("Timeout: server {} did not complete POST on time".format(server_serial_number))
            return False
        print("Started OS deployment for server with serial number {}.".format(server_serial_number))

        if not wait_for_reboot(redfish_object, install_timeout):
            print("Timeout: server {} did not complete POST on time".format(server_serial_number))
            return False
        print("OS deployment completed for server with serial number {}.".format(server_serial_number))

        if not wait_for_post_to_complete(redfish_object, post_timeout):
            print("Timeout: server {} did not complete POST on time".format(server_serial_number))
            return False
        print("Started rebooting server with serial number {} after OS installation.".format(server_serial_number))
    except Exception as e:
        print("OS deployment failed with exception: {}".format(e))
        print("Failure: OS deployment failed on server {}".format(server_serial_number))
        return False

    return True
    
def get_post_state(redfish_object):
    """This function is to get server POST state
    
    Arguments:
        redfish_object {object} -- iLO Redfish object
    
    Returns:
        string -- returns the server POST state
    """
    print("Get post state.")
    instances = redfish_object.search_for_type("ComputerSystem.")

    for instance in instances:
        resp = redfish_object.redfish_get(instance["@odata.id"])
        if resp.status == 200:
            return resp.dict['Oem']['Hpe']['PostState']
        else:
            print("Failed to get Post state")
            return 'Unknown'


def wait_for_post_to_complete(redfish_object, timeout=20):
    """This function is to wait for the server POST operation to complete
    
    Arguments:
        redfish_object {object} -- iLO Redfish object
    
    Keyword Arguments:
        timeout {int} -- timeout in minutes (default: {20})
    
    Returns:
        boolean -- returns True on successful server POST operation. returns False on failure of server POST operation
    """
    wait_time = datetime.now() + timedelta(minutes=timeout)
    print("Waiting for system to complete POST")
    while wait_time > datetime.now():
        print("Sleeping for 60 seconds before poll")
        sleep(60)

        post_state = get_post_state(redfish_object)

        if post_state == 'InPostDiscoveryComplete' or post_state == 'FinishedPost':
            sleep(3)
            new_post_state = get_post_state(redfish_object)
            if new_post_state == 'InPostDiscoveryComplete' or new_post_state == 'FinishedPost':
                return True

    print("Timeout: System has not completed POST")
    return False


def wait_for_reboot(redfish_object, timeout=20):
    """This function is to initaite a server reboot and wait for the reboot to complete
    
    Arguments:
        redfish_object {object} -- iLO Redfish object
    
    Keyword Arguments:
        timeout {int} -- timeout in minutes (default: {20})
    
    Returns:
        boolean -- returns True on successful reboot. returns False on reboot failure
    """
    wait_time = datetime.now() + timedelta(minutes=timeout)
    print("Waiting for system to reboot")
    while wait_time > datetime.now():
        print("Sleeping for 60 seconds before poll")
        sleep(60)

        post_state = get_post_state(redfish_object)

        if post_state != 'InPostDiscoveryComplete' and post_state != 'FinishedPost':
            return True

    print("Timeout: System has not completed POST")
    return False

def set_one_time_boot_to_cd(redfish_object):
    """
    Sets one-time boot to CD by searching for the system resource dynamically.

    Arguments:
        redfish_object {object} -- iLO Redfish object
    """
    try:
        ip = getattr(redfish_object, 'host', 'Unknown IP')
        print(f"{ip}: Setting one-time boot to CD...")

        # Find system instances
        system_instances = redfish_object.search_for_type("ComputerSystem.")
        if not system_instances:
            print(f"{ip}: No ComputerSystem instances found.")
            return

        for system in system_instances:
            system_uri = system["@odata.id"]

            body = {
                "Boot": {
                    "BootSourceOverrideTarget": "Cd",
                    "BootSourceOverrideEnabled": "Once"
                }
            }

            response = redfish_object.redfish_patch(system_uri, body)
            redfish_object.error_handler(response)

            print(f"{ip}:  Boot override set on {system_uri}")
            break  # Remove this break if you want to patch all systems

    except Exception as e:
        ip = getattr(redfish_object, 'host', 'Unknown IP')
        print(f"{ip}: ERROR during boot override: {e}")


def get_system_uri(redfish_obj):
    systems_uri = "/redfish/v1/Systems"
    systems_resp = redfish_obj.get(systems_uri)
    system_uri = systems_resp.dict["Members"][0]["@odata.id"]
    return system_uri

def mount_virtual_media_iso(redfish_object, iso_url, boot_on_next_server_reset=True):
    """
    Mounts an ISO image as virtual media on iLO using Redfish.

    Args:
        redfish_object (RedfishObject): Authenticated Redfish client object.
        iso_url (str): HTTPS URL of the ISO to mount.
        boot_on_next_server_reset (bool): Whether to boot from virtual media on next reset.
    """
    print(f"Mounting ISO: {iso_url}")
    try:
        # Find iLO Manager instances
        managers = redfish_object.search_for_type("Manager.")

        for manager in managers:
            manager_id = manager["@odata.id"]
            mgr_data = redfish_object.redfish_get(manager_id)

            # Get VirtualMedia endpoint
            virtual_media_url = mgr_data.dict["VirtualMedia"]["@odata.id"]
            virtual_media_data = redfish_object.redfish_get(virtual_media_url)

            for media_link in virtual_media_data.dict["Members"]:
                vm_url = media_link["@odata.id"]
                vm_response = redfish_object.redfish_get(vm_url)

                if vm_response.status == 200:
                    media_types = vm_response.dict.get("MediaTypes", [])
                    if "DVD" in media_types:
                        payload = {
                            "Image": iso_url,
                            "Oem": {
                                "Hpe": {
                                    "BootOnNextServerReset": boot_on_next_server_reset
                                }
                            }
                        }
                        patch_response = redfish_object.redfish_patch(vm_url, payload)
                        redfish_object.error_handler(patch_response)
                        print(f"Successfully mounted ISO on {vm_url}")
                    else:
                        print(f"Skipping device at {vm_url}, not a DVD device.")
                else:
                    print(f"Failed to get virtual media info from {vm_url}")
                    redfish_object.error_handler(vm_response)

    except Exception as e:
        print(f"[ERROR] Failed to mount ISO {iso_url}. Exception: {e}")



def unmount_virtual_media_iso(redfish_object):
    """This function is to unmount virtual media ISO on the iLO
    
    Arguments:
        redfish_object {object} -- iLO Redfish object
    """
    print("Unmounting virtual media")
    try:
        instances = redfish_object.search_for_type("Manager.")

        for instance in instances:
            rsp = redfish_object.redfish_get(instance["@odata.id"])
            rsp = redfish_object.redfish_get(rsp.dict["VirtualMedia"]["@odata.id"])

            for vmlink in rsp.dict["Members"]:
                response = redfish_object.redfish_get(vmlink["@odata.id"])
                if response.status == 200 and "DVD" in response.dict["MediaTypes"]:
                    body = {"Image": None}
                    response = redfish_object.redfish_patch(vmlink["@odata.id"], body)
                    redfish_object.error_handler(response)
                elif response.status != 200:
                    redfish_object.error_handler(response)
    except Exception as e:
        print("Error occurred while unmounting the cd image and error is {}".format(e))


def create_redfish_object(server):
    """This function is to create iLO Redfish object
    
    Arguments:
        server {dictionary} -- server configuration details provided in the input file
    
    Returns:
        [object] -- iLO Redfish object
    """
    # Create a REDFISH object
    ilo_https_url = "https://" + server['ILO_Address']
    ilo_username = server['ILO_Username']
    ilo_password = server['ILO_Password']
    try:
        redfish_obj = RedfishObject(ilo_https_url, ilo_username, ilo_password)
    except Exception as excp:
        print("Failure: Server with iLO ip {} is not reachable or doesn't support redfish {}".format(ilo_https_url, excp))
        return False
    return redfish_obj

def change_server_power_state(redfish_obj, serial_number, power_state):
    """This function is to change the power state of the server hardware

    Arguments:
        redfish_obj {object}          -- Redfish object
        serial_number                 -- Server Serial Number
        power_state {string}          -- desired power state of the server (On or Off)

    Returns:
        boolean -- returns True on successful change in power state. returns False on failure of change in power state
    """
    resource_instances = redfish_obj.search_for_type("ComputerSystem.")
    for instance in resource_instances:
        #Use Resource directory to find the relevant URI
        if '#ComputerSystem.' in instance['@odata.type']:
           systems_members_uri = instance['@odata.id']
           systems_members_response = redfish_obj.redfish_get(systems_members_uri)

    if systems_members_response:
       system_reboot_uri = systems_members_response.obj['Actions']['#ComputerSystem.Reset']\
                                                                                        ['target']
       body = dict()
       body['Action'] = 'ComputerSystem.Reset'
       body['ResetType'] = power_state
       resp = redfish_obj.redfish_post(system_reboot_uri, body)
       if resp.status == 200:
           print("Success : Changed the power state of server {} to {} ".format(serial_number, power_state))
           return True
       else:
           print("Failure: Failed to change the power state of server {} to {} ".format(serial_number, power_state))
           return False

def get_server_model(restobj):
    """
    Arguments:
        redfish_obj {object}          -- Redfish object
    Returns:
        string (server Model)         -- returns server model
    """
    instances = restobj.search_for_type("ComputerSystem.")
    for instance in instances:
        response = restobj.redfish_get(instance["@odata.id"])
    return (str(response.dict["Model"]))