# Red Hat OpenShift Container Platform 4.9 on HPE DL Platform with VMware Virtualization

## Overview
This folder consists of ansible playbooks developed to automate the tasks involved in deploying Red Hat OpenShift Container Platform on HPE DL Platform with VMware Virtualization

## Prerequisites
- Ansible 2.9.x
- Python  3.6.x
- **Python SDK for the VMware vSphere**: PyVmomi is the Python SDK for the VMware vSphere API that allows you to manage ESX, ESXi, and vCenter. Execute the command “pip install PyVmomi” in the command line to install PyVmomi
- Installer VM is required for executing ansible playbooks and other commands for installing OCP 4.9
- DNS entries are required
- 3 vSphere6.7 hosts are required with network configuration.
- Global storage should be attached to 3 vSphere6.7 hosts.
 
## Software requirements 
| Software | Version |
|--|--|
| Red Hat Enterprise Linux Server	| 7.6 |
| VMware ESXi	version | 6.7 |
| VMware vCenter Server Appliance |	6.7 |
| Red Hat OpenShift Container Platform | 4.9 |

## Usage
This folder is further divided into 1 sub-folder
- deploy_vm

**deploy_vm**
This folder consists of the playbooks utilized to deploy the management virtual machines for the RedHat OCP deployment. It will create vSphere affinity & anti-affinity rules. All master nodes are part of "anti-affinity" rule where each  master node reside on different host where bootstrap & haproxy nodes are part of "affinity" rule where these two nodes will reside on any single host.
Input variable file for the playbooks is "deploy_vm/vars/main.yml"

These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform 4.9 on HPE DL Platform with VMware Virtualization**
