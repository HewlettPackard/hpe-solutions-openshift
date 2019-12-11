####
## Copyright (2019) Hewlett Packard Enterprise Development LP
##
## Licensed under the Apache License, Version 2.0 (the "License");
## You may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
## http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
####

from ansible.parsing.dataloader import DataLoader
from ansible.inventory.manager import InventoryManager
from proliantutils.ilo import client
import sys
import os
import json
import yaml

curr_dir = os.getcwd()
host_file_path = curr_dir.rsplit("/", 3)
inventory_file_name = host_file_path[0] + "/" + "hosts"
data_loader = DataLoader()
inventory = InventoryManager(loader = data_loader,
                            sources=[inventory_file_name])

# As a pre-requisites, user need to have all physical worker node,
# iLO username and password common
username = sys.argv[1]
password = sys.argv[2]
ilo_ips_list = inventory.get_groups_dict()['phy-workers-iloip']
print(ilo_ips_list)
worker_fqdn = inventory.get_groups_dict()['phy-worker-fqdn']
print(worker_fqdn)
dict = {}
i = 0
label_data = ""
for ilo_ip in ilo_ips_list:
    label_data = ""
    ilo_client = client.IloClient(ilo_ip, username, password)
    dict_object = ilo_client.get_server_capabilities()
    for key in dict_object.keys():
        if key == "cpu_vt" or key == "boot_mode_uefi" or key == "pci_gpu_devices":
            label_data += " " + str(key) + "=" + str(dict_object[key])
    label_data = worker_fqdn[i] + " " + label_data
    dict[worker_fqdn[i]] = label_data
    i = i + 1
try:
    file_path = curr_dir.rsplit("/", 2)[0] + str("/node-labels-physical-worker/files/") + "node_properties" + str(".yaml")
    #file_object = open(file_path, 'w')
    #json.dump(dict, file_object)
    yaml.safe_dump(dict, open(file_path,'w'), encoding='utf-8', allow_unicode=True)
except IOError:
    print(file_path + " not found. ")
