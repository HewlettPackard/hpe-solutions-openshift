# Red Hat OpenShift Container Platform 4.3 on HPE Synergy with VMware Virtualization

## Overview
This folder consists of ansible playbooks developed to automate the tasks involved in deploying Red Hat OpenShift Container Platform on HPE Synergy with VMware Virtualization

## Prerequisites
- Ansible 2.9.x
- Python  3.6.x
- **Python module for HPE OneView**: hpOneView is the Python SDK for the OneView API that allows you to manage OneView functionalities. Download the python repository at https://github.com/HewlettPackard/python-hpOneView and follow the instructions in its readme.md to install the repository
- **Ansible module for HPE OneView**: OneView-ansible is the Ansible Module for HPE OneView which utilizes the python SDK to enable infrastructure as a code. Download the repository at https://github.com/HewlettPackard/oneview-ansible/ and follow the instructions in its readme.md to install the repository.
- **Python SDK for the VMware vSphere**: PyVmomi is the Python SDK for the VMware vSphere API that allows you to manage ESX, ESXi, and vCenter. Execute the command “pip install PyVmomi” in the command line to install PyVmomi
- Installer VM is required for executing ansible playbooks and other commands for installing OCP4.2
- DNS entries are required
- 3 vSphere6.7 hosts are required with network configuration.
- Global storage should be attached to 3 vSphere6.7 hosts.
 
## Software requirements 
| Software | Version |
|--|--|
| Red Hat Enterprise Linux Server	| 7.6 |
| VMware ESXi	version | 6.7 |
| VMware vCenter Server Appliance |	6.7 |
| Red Hat OpenShift Container Platform | 4.3 |

## Usage
This folder is further divided into 1 sub-folder
- deploy_vm

**deploy_vm**
This folder consists of the playbooks utilized to deploy the management virtual machines for the RedHat OCP deployment. It will create vSphere affinity & anti-affinity rules. All master nodes are part of "anti-affinity" rule where each  master node reside on different host where bootstrap & haproxy nodes are part of "affinity" rule where these two nodes will reside on any single host.
Input variable file for the playbooks is "deploy_vm/vars/main.yml"

These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform 4.3 on HPE Synergy with VMware Virtualization**
