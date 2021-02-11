###
##### Copyright (2021) Hewlett Packard Enterprise Development LP
#####
##### Licensed under the Apache License, Version 2.0 (the "License");
##### You may not use this file except in compliance with the License.
##### You may obtain a copy of the License at
#####
##### http://www.apache.org/licenses/LICENSE-2.0
#####
##### Unless required by applicable law or agreed to in writing, software
##### distributed under the License is distributed on an "AS IS" BASIS,
##### WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
##### See the License for the specific language governing permissions and
##### limitations under the License.
#######
##


import sys
import json
from ansible.constants import DEFAULT_VAULT_ID_MATCH
from ansible.parsing.vault import VaultLib
from ansible.parsing.vault import VaultSecret
from getpass import getpass


class Config(object):
    """
    This Config class is a configuration file which will convert user input values
    into programmatically variables usage.
    """
    def __init__(self):
        """
        This constructor function provides encrypted as well as normal variables based input files.
        """
        try:
            # Retrieving secret variables from config_secrets.json file
            encrypted_file = open("config_secrets.json")
            key = getpass("Enter key for encrypted variables:")

            # Configuring key and decrypting encrypted variables
            config_vault = VaultLib([(DEFAULT_VAULT_ID_MATCH, VaultSecret(key.encode('utf-8')))])
            config = json.loads(config_vault.decrypt(encrypted_file.read()))

            # Closing opened encrypted file 
            encrypted_file.close()

            # Retrieving all user input files from file into a variable
            with open ("userinput.json", "r") as json_fp:
                input_json_data = json.load(json_fp)

            self.username = config["OPENSHIFT_USERNAME"]
            self.password = config["OPENSHIFT_PASSWORD"]
            self.oc_host = ":".join([input_json_data["OPENSHIFT_DOMAIN"], input_json_data["OPENSHIFT_PORT"]])
            self.oc_path = input_json_data["OPENSHIFT_CLIENT_PATH"]
            self.local_storage_namespace = input_json_data["LOCAL_STORAGE_NAMESPACE"]
            self.ocs_namespace = input_json_data["OPENSHIFT_CONTAINER_STORAGE_NAMESPACE"]
            self.ocs_fs_storage = input_json_data["OPENSHIFT_CONTAINER_STORAGE_FILESYSTEM_STORAGE"]
            self.ocs_block_storage = input_json_data["OPENSHIFT_CONTAINER_STORAGE_BLOCK_STORAGE"]
            self.local_storage_version = input_json_data["LOCAL_STORAGE_VERSION"]
            self.ocs_version = input_json_data["OPENSHIFT_CONTAINER_STORAGE_VERSION"]
            self.ocp_worker_nodes = input_json_data["OPENSHIFT_CONTAINER_PLATFORM_WORKER_NODES"]
            self.ocs_block_volume = input_json_data["OPENSHIFT_CONTAINER_STORAGE_BLOCK_VOLUME"]
        except Exception as run_err:
            print("config.py - Config: Entered WRONG password and exception is: {}".format(run_err))
            sys.exit()
