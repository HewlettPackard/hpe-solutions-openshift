###
# Copyright (2018) Hewlett Packard Enterprise Development LP
#
# Licensed under the Apache License, Version 2.0 (the "License");
# You may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
### 

# This script collects SSH public keys from all hosts defined in the Ansible host file located at /etc/Openshift-Synergy-RA/inventory/byo-openshift/hosts and adds to the Known Host file
#!/bin/bash

host=$null
hosts=$null
ip=$null
hosts="$(cat /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/hosts |sed -n '/#~/,/#~/p'|sed '1d'|sed '$d'|sed '/^$/d'|sed 's/ansible_ssh_host=[0-9.]*//g')"
for host in $hosts
do
  ip="$(nslookup $host  | sed -n '5p' | sed 's/.* //')"
  ssh-keyscan -t ecdsa  "${host}" >> ~/.ssh/known_hosts 
  ssh-keyscan -t ecdsa  "${ip}" >> ~/.ssh/known_hosts 
done


