from subprocess import CalledProcessError
import shutil
import subprocess
import threading
from redfish_object import RedfishObject
from time import sleep
import requests


server = [{
      "Server_serial_number"  : "MXQ920023X",
      "ILO_Address"           : "10.0.x.x",
      "ILO_Username"          : "admin",
      "ILO_Password"          : "password",
      "Hostname"              : "master.tennet.local",
      "Host_IP"               : "x.x.x.x",
      "Host_Username"         : "root",
      "Host_Password"         : "Password",
      "Host_Netmask"          : "255.255.0.0",
      "Host_Gateway"          : "10.0.x.x",
      "Host_DNS"              : "10.0.x.x",
      "OS_image_name"         : "rhel-server-7.6-x86_64-dvd.iso",
      "Web_server_address"    : "10.0.x.x"
},
{
      "Server_serial_number"  : "MXQ93906KB",
      "ILO_Address"           : "10.0.x.x",
      "ILO_Username"          : "admin",
      "ILO_Password"          : "password",
      "Hostname"              : "worker.tennet.local",
      "Host_IP"               : "10.0.x.x",
      "Host_Username"         : "root",
      "Host_Password"         : "Password",
      "Host_Netmask"          : "255.255.0.0",
      "Host_Gateway"          : "10.0.x.x",
      "Host_DNS"              : "10.0.x.x",
      "OS_image_name"         : "rhel-server-7.6-x86_64-dvd.iso",
      "Web_server_address"    : "10.0.x.x"
}]


def os_deployment(servers):  
    print("Starting OS Installation...")
    threads = []
    for server in servers:
        redfish_object = create_redfish_object(server)
        thrd = threading.Thread(target=image_deployment, args=(redfish_object,
            server))
        thrd.start()
        threads.append(thrd)
    for thread in threads:
        thread.join()


def image_deployment(redfish_obj, server):
    print("Starting OS installation for server ", server["Server_serial_number"])
    image_url = "http://" + server['Web_server_address'] + "/" + server['OS_image_name']
    
    # Unmount the previous ISO
    unmount_virtual_media_iso(redfish_obj)
    mount_virtual_media_iso(redfish_obj, image_url, True)


def mount_virtual_media_iso(redfish_object, img_url, boot_on_next_server_reset=True):
    print("Mounting virtual media")
    try:
        instances = redfish_object.search_for_type("Manager.")

        for instance in instances:
            rsp = redfish_object.redfish_get(instance["@odata.id"])
            rsp = redfish_object.redfish_get(rsp.dict["VirtualMedia"]["@odata.id"])

            for vmlink in rsp.dict["Members"]:
                response = redfish_object.redfish_get(vmlink["@odata.id"])
                if response.status == 200 and "DVD" in response.dict["MediaTypes"]:
                    body = {"Image": img_url, "Oem": {"Hpe": {"BootOnNextServerReset": boot_on_next_server_reset}}}
                    response = redfish_object.redfish_patch(vmlink["@odata.id"], body)
                    redfish_object.error_handler(response)
                elif response.status != 200:
                    redfish_object.error_handler(response)
    except Exception as e:
        print("Error occurred while mounting the cd image {} and error is {}".format(img_url, e))


def unmount_virtual_media_iso(redfish_object):
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
    # Create a REDFISH object
    ilo_https_url = "https://" + server['ILO_Address']
    ilo_username = server['ILO_Username']
    ilo_password = server['ILO_Password']
    try:
        redfish_obj = RedfishObject(ilo_https_url, ilo_username, ilo_password)
    except Exception as excp:
        print("Failure: Server with iLO ip {} is not reachable or doesn't support redfish {}".format(ilo_https_url, excp))
    return redfish_obj


if __name__ == '__main__':
    os_deployment(server)
