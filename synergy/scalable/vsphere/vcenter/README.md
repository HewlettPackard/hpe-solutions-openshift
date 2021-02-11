# Red Hat OpenShift Container Platform 4.6 on HPE Synergy with VMware Virtualization

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
| Red Hat OpenShift Container Platform | 4.6 |

## Usage
This folder is further divided into 1 sub-folder
- prepare_vcenter

**prepare_vcenter**
This folder consists of the playbooks utilized to create the datacenter, cluster and add the hosts into cluster in the vCenter Server Appliance
Input variable file for the playbooks is "prepare_vcenter/vars/main.yml"

These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform 4.6 on HPE Synergy with VMware Virtualization**
