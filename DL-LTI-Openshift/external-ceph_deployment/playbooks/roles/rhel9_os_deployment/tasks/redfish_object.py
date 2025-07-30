###
# (C) Copyright 2021 Hewlett Packard Enterprise Development LP
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
###

import json
from redfish import AuthMethod, redfish_logger, RedfishClient
from logger import *


class RedfishObject(object):
    def __init__(self, host, login_account, login_password):
        self.host = host
        # Creating instace for RedfishClient clasee by providing ilo_url, ilo_username, ilo_password
        # Note:redfish.ris.tpdefs is not supported by python-ilorest-library 3.0
        try:
            self.redfish_client = RedfishClient(base_url=host,
                                                 username=login_account, password=login_password)
        except:
            raise
        self.redfish_client.login(auth=AuthMethod.SESSION)
        self.SYSTEMS_RESOURCES = self.ex1_get_resource_directory()
        self.MESSAGE_REGISTRIES = self.ex2_get_base_registry()

    def delete_obj(self):
        try:
            self.redfish_client.logout()
        except AttributeError as excp:
            pass

    def search_for_type(self, type):
        instances = []

        for item in self.SYSTEMS_RESOURCES["resources"]:
            foundsettings = False

            if "@odata.type" in item and type.lower() in item["@odata.type"].lower():
                for entry in self.SYSTEMS_RESOURCES["resources"]:
                    if (item["@odata.id"] + "/settings/").lower() == (entry["@odata.id"]).lower():
                        foundsettings = True

                if not foundsettings:
                    instances.append(item)

        if not instances:
            log_info("Resource or feature is not supported on this system:" + type)
        return instances

    def error_handler(self, response):
        if not self.MESSAGE_REGISTRIES:
            log_info("ERROR: No message registries found.")

        try:
            message = json.loads(response.text)
            newmessage = message["error"]["@Message.ExtendedInfo"][0]["MessageId"].split(".")
        except:
            log_info("No extended error information returned by iLO.")
            return

        for err_mesg in self.MESSAGE_REGISTRIES:
            if err_mesg != newmessage[0]:
                continue
            else:
                for err_entry in self.MESSAGE_REGISTRIES[err_mesg]:
                    if err_entry == newmessage[3]:
                        log_info("iLO return code " + str(message["error"]["@Message.ExtendedInfo"][0]) +
                                 " : " + str(self.MESSAGE_REGISTRIES[err_mesg][err_entry]["Description"]))

    def redfish_get(self, suburi, args=None, headers=None):
        """REDFISH GET"""
        return self.redfish_client.get(path=suburi)

    def redfish_patch(self, suburi, request_body, args=None, headers=None):
        """REDFISH PATCH"""
        log_debug("PATCH " + str(request_body) + " to " + suburi)
        response = self.redfish_client.patch(path=suburi, body=request_body)
        log_debug("PATCH response: " + str(response.status))

        return response

    def redfish_put(self, suburi, request_body, args=None, headers=None):
        """REDFISH PUT"""
        log_debug("PUT " + str(request_body) + " to " + suburi)
        response = self.redfish_client.put(path=suburi, body=request_body)
        log_info("PUT response: " + str(response.status))

        return response

    def redfish_post(self, suburi, request_body, args=None, headers=None):
        """REDFISH POST"""
        log_info("POST " + str(request_body) + " to " + suburi)
        response = self.redfish_client.post(path=suburi, body=request_body)
        log_info("POST response: " + str(response.status))

        return response

    def redfish_delete(self, suburi, headers=None):
        """REDFISH DELETE"""
        log_info("DELETE " + suburi)
        response = self.redfish_client.delete(path=suburi)
        log_info("DELETE response: " + str(response.status))

        return response

    def ex1_get_resource_directory(self):
        response = self.redfish_get("/redfish/v1/resourcedirectory/")
        resources = {}

        if response.status == 200:
            resources["resources"] = response.dict["Instances"]
            return resources
        else:
            log_info("\tResource directory missing at " \
                                        "/redfish/v1/resourcedirectory" + "\n")

    def ex2_get_base_registry(self):
        response = self.redfish_get("/redfish/v1/Registries/")
        messages = {}
        location = None

        for entry in response.dict["Members"]:
            if not [x for x in ["/Base/", "/iLO/"] if x in entry["@odata.id"]]:
                continue
            else:
                registry = self.redfish_get(entry["@odata.id"])

            for location in registry.dict["Location"]:
                if "extref" in location["Uri"]:
                    location = location["Uri"]["extref"]
                else:
                    location = location["Uri"]
                reg_resp = self.redfish_get(location)

                if reg_resp.status == 200:
                    messages[reg_resp.dict["RegistryPrefix"]] = \
                                                    reg_resp.dict["Messages"]
                else:
                    log_info("\t" + reg_resp.dict["RegistryPrefix"] + \
                                            " not found at " + location + "\n")

        return messages