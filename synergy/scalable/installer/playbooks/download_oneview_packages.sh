#!/bin/sh

echo "============================================================"
echo "Activating Python 3 environment"
cd ..
source ocp42_venv/bin/activate
echo "============================================================"

echo "Installing VMware Python Module PyVmomi"
pip install pyVmomi
pip install requests
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
