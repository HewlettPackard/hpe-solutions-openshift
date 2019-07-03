# Red Hat OpenShift Container Platform on HPE Synergy and HPE Nimble with VMware Virtualization

## Overview
This folder consists of ansible playbooks developed to automate the tasks involved in deploying Red Hat OpenShift Container Platform on HPE Synergy and HPE Nimble with VMware Virtualization

## Prerequisites
- Ansible 2.7.2
- Python  2.7.9 and above
- **Python module for HPE OneView**: hpOneView is the Python SDK for the OneView API that allows you to manage OneView functionalities. Download the python repository at https://github.com/HewlettPackard/python-hpOneView and follow the instructions in its readme.md to install the repository
- **Ansible module for HPE OneView**: OneView-ansible is the Ansible Module for HPE OneView which utilizes the python SDK to enable infrastructure as a code. Download the repository at https://github.com/HewlettPackard/oneview-ansible/ and follow the instructions in its readme.md to install the repository.
- **Python SDK for the VMware vSphere**: PyVmomi is the Python SDK for the VMware vSphere API that allows you to manage ESX, ESXi, and vCenter. Execute the command “pip install PyVmomi” in the command line to install PyVmomi
 
## Software requirements 
| Software | Version |
|--|--|
| Red Hat Enterprise Linux Server	| 7.6 |
| VMware ESXi	version | 6.7 |
| VMware vCenter Server Appliance |	6.7 |
| Red Hat OpenShift Container Platform | 3.11 |
| VMware Tools | 10.3.5 |

## Usage
This folder is further divided into 3 sub-folders
- DeployESXiHosts
- PrepareVCSA
- DeployVMs

**DeployESXiHosts**
This folder consists of the playbooks utilized to deploy the ESXi hosts on HPE Synergy.
Input variable file for the playbooks is "HostVariables.yml" 
Input config file for the playbooks is OneViewConfig.json which consists of the OneView and ImageStreamer IP address and Credentials.

**PrepareVCSA**
This folder consists of the playbooks utilized to create the datacenter, cluster and add the hosts into cluster in the vCenter Server Appliance
Input variable file for the playbooks is "vCenterVars.yml" 

**DeployESXiHosts**
This folder consists of the playbooks utilized to deploy the management virtual machines for the RedHat OCP deployment.
Input variable file for the playbooks is "VirtualMachineVars.yml" 

These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform on HPE Synergy and HPE Nimble with VMware Virtualization**
