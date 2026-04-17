###
##### Copyright 2020 Hewlett Packard Enterprise Development LP
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


#!/bin/sh

echo "============================================================"
echo "Activating Python 3 environment"
cd ..
source ocp_venv/bin/activate
echo "============================================================"

echo "Installing VMware Python Module PyVmomi"
pip install pyVmomi
pip install requests
echo "============================================================"

echo "Installing ansible-vault for python"
pip install ansible-vault
echo "============================================================"

echo "Installing Ansible Module for HPE OneView"
mkdir library
cd library
git clone https://github.com/HewlettPackard/oneview-ansible.git
echo "============================================================"

echo "Installing pre-requisites for HPE OneView module"
cd oneview-ansible
pip install -r requirements.txt
echo "============================================================"
