#!/bin/sh

echo "============================================================"
echo "Setting Python Path"
PATH="/opt/rh/rh-python36/root/usr/bin"
echo "============================================================"

echo "============================================================"
echo "Creating Python3 virtual environment for the OpenShift installation"
cd ..
python -m venv ocp42_venv

echo "============================================================"
echo "Activating Python3 virtual environment"
source ocp42_venv/bin/activate

echo "============================================================"
echo "Installing Ansible"
python3 -m pip install ansible==2.9.0

echo "============================================================"
echo "Upgrading Pip"
pip install --upgrade pip
echo "============================================================"

