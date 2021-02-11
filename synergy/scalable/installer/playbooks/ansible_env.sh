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


#!/bin/sh

echo "============================================================"
echo "Setting Python Path"
PATH="/opt/rh/rh-python36/root/usr/bin"
echo "============================================================"

echo "============================================================"
echo "Creating Python3 virtual environment for the OpenShift installation"
cd ..
python -m venv ocp_venv

echo "============================================================"
echo "Activating Python3 virtual environment"
source ocp_venv/bin/activate

echo "============================================================"
echo "Installing Ansible"
python3 -m pip install ansible==2.9.0

echo "============================================================"
echo "Upgrading Pip"
pip install --upgrade pip
echo "============================================================"

