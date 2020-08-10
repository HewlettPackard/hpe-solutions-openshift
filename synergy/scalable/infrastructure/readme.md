# Red Hat OpenShift Container Platform 4 on HPE Synergy

## Overview
This folder consists of ansible playbooks developed to automate the tasks such as uploading firmware baseline iso package to OneView, creating server profile templatate & server profiles in HPE OneView and the scripts to create a virtual machine in VMware vCenter server. These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform 4 on HPE Synergy**

## Prerequisites
- Ansible engine with Ansible 2.9.x and Python  3.6.x
- **Python module for HPE OneView**: hpOneView is the Python SDK for the OneView API that allows you to manage OneView functionalities. Download the python repository at https://github.com/HewlettPackard/oneview-python.
- **Ansible module for HPE OneView**: OneView-ansible is the Ansible Module for HPE OneView which utilizes the python SDK to enable infrastructure as a code. Download the repository at https://github.com/HewlettPackard/oneview-ansible/.
- **Python SDK for the VMware vSphere**: PyVmomi is the Python SDK for the VMware vSphere API that allows you to manage ESX, ESXi, and vCenter.

## General Note:
Some pre and post "server profile template and server profile" creation requirements, that need to be executed manually:
a.	Before using the profile automation, user needs to look out if there are any hardware errors/warnings on the compute that will be used for deploying server profile template and server profile. If there are errors/warnings on compute node, user needs to resolve them or clear them before using the automation scripts. 
b.	Before running automation, reset iLO for the corresponding compute, so that any communication issues between OneView and iLO can be resolved.
c.	After applying profile, if there are local storage/Interconnect errors, then the user needs to perform the steps as stated in error resolution.

 
## Software requirements 
| Software | Version |
|--|--|
| HPE OneView	| 5 |
| Red Hat Enterprise Linux Server	| 7.6 |
| VMware ESXi version | 6.7 |
| VMware vCenter Server Appliance |	6.7 |
| RedHat CoreOS |	4.4 |

## Usage
- Update the inventory(hosts), ansible vault(secret.yml), variable file(input.yml) and firmware version variable file (fw_version_inputs.yml) with the appropriate values.
- Execute the following command to switch to infrastructure directory
    ```
    # cd BASE_DIR/infrastructure
    ```
	Note: BASE_DIR is defined and set in installer machine section in deployment guide
- Execute the following command to Upload the firmware bundle to OneView.
    ```
    # ansible-playbook -i hosts playbooks/upload_firmware_bundle.yml --ask-vault-pass
    ```
- Execute the following command to Upload the firmware bundle to create and deploy the Server Profile template along with Firmware bundle.
    ```
    # ansible-playbook -i hosts playbooks/deploy_server_profile_template.yml --ask-vault-pass
    ```
- Execute the following command to Upload the firmware bundle to create and deploy Server Profile, update the firmware on Synergy Compute Module and validate the firmware versions.
    ```
    # ansible-playbook -i hosts playbooks/deploy_server_profile.yml --ask-vault-pass
    ```
- Execute the following commands on the installer VM to create the virtual machine.
    ``` 
    # ansible-playbook -i hosts playbooks/deploy_vm.yml --ask-vault-pass
    ```