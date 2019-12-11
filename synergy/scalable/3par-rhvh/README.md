# HPE Deployment Guide for Red Hat OpenShift Container Platform on HPE Synergy with HPE 3PAR Storage

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found in the root of this folder. Instructions found in the deployment guide will take precedence over instructions in README.md files.

This guide is accompanied by a Reference Configuration. The Reference Configuration highlights business value and provides a bill of material for the tested configuration. It can be download from https://h20195.www2.hpe.com/V2/GetDocument.aspx?docname=a00056101enw.

________________________________________
## About ##
________________________________________

This repo contains Ansible plays and scripts to automate the installation of Red Hat OpenShift 3.10. 

Contents of the repo are:

**playbooks:** This folder contains the playbooks that call the ansible roles used for OpenShift installation.

**rhhi.yml:** This playbook calls the rhhi role used to configure the Red Hat Virtualization Host and prepare the host for the Red Hat Virtualization Manager (Hosted Engine) installation.

**deploy-template.yml:** This playbook calls the role that creates the virtual machine template that is the basis for the virtual machines running OpenShift.

**deploy-vm.yml:** This playbook calls the role that is used to deploy the virtual machines for this solution.

**preparehosts.yml:** This playbook calls the role that prepares the virtual machines and installs the prerequsites for the OpenShift installation.

**hosts:** This is the ansible inventory file which will be used by Ansible Engine to reference variables and hosts during OpenShift deployment.

**roles:** This folder contains various sub-folders with tasks and variable files required for the OpenShift installation.

**vault_pass.yml:** is the Ansible Vault file which stores the credentials ans sensitive variables used in this solution.

**ansible.cfg:** is a sample ansible configuration file used in this solution.

 
________________________________________
## Prerequisites ##
________________________________________
 
 - Ansible Engine should be installed, configured, and capable of communicating with the hosts used in this solution.
 
 - Red Hat Virtualization Hosts 4.2 have been installed.
 
 - DNS entries should exist for all hosts and hosts resolve correctly.
 
 - The htpasswd file should be generated and stored at /etc/oshift-hash-pass.htpasswd.


________________________________________
## Custom Attributes\Variable Files  ##
________________________________________
	
This variable file needs to be edited by the installer according to the installer’s environment.

In the root of the repository, the hosts file is the ansible inventory file and the vault_pass.yml is an encrypted file used to store senstive variables. The variable specified in these files must be modified to reflect the customers environment.
**hosts**
**vault_pass**

Each Ansible play has a variable file in its respective role directory "/<roles/role name>/vars/main.yml. 

The rhhi role's variable file will be used to configure and prepare the RHVH hosts for the Red Hat Hyperconverged Infrastructure installation. 

**roles/rhhi/vars/main.yml**


The deploy-template role's variable file will be used to configure template details and the RedHat download sites URL for Red Hat Enterprise Linux 7.5 KVM Guest Image.

**roles/vars/deploy-template/vars/main.yml**


The deploy-vm role's variable file will be used to provide information and details about the virtual machines required for OpenShift Installation.

**roles/deploy-vm/vars/main.yml**


The host-prepare role's variable file will be used to configure the virtual machines for the OpenShift installation. 

**roles/host-prepare/vars/main.yml**


________________________________________
## How to use ##
________________________________________

Step1 : Clone this repo to the Ansible Engine host to /etc/ansible using the below command
```
git clone http://github.com/HewlettPackard/hpe-solutions-openshift
```

Step2 : Configure the RHVH hosts to prepare for the Red Hat Hyperconverged Infrastructure Installation.
```
ansible-playbook -e@vault_pass.yml playbooks/rhhi.yaml
```

Step3 : Manually configure the RHV-M Hosted Engine per the deployment guide.


Step4 : Create the VM template in RHV-M using the below command. 

This will create a template which will be used to clone and deploy VMs for OpenShift installation.
``` 
ansible-playbook -e@vault_pass.yml playbooks/deployTemplate.yaml
```

Step5 : Deploy VMs from the template.

Run the following command on the Ansible Engine to create VMs for Master, ETCD, Infra and LB nodes for OpenShift
```
ansible-playbook -e@vault_pass.yml playbooks/deployVM.yml
```

Step6 : Install the OpenShift prerequsites on the virtual machines.

Run the following shell script to add host details of the know_hosts file in the Ansible engine. 
```
ansible-playbook -e@vault_pass.yml playbooks/virtual-hostprepare.yml

```
Step7 : Install the OpenShift prerequsites on the physical machines.

Run the following shell script to add host details of the know_hosts file in the Ansible engine. 
```
ansible-playbook -e@vault_pass.yml playbooks/physical-hostprepare.yml

```
Step8 : Manually configure host device passthrough in RHV-M Hosted Engine for OpenShift Container Storage per the deployment guide.

Step9 : Check for required prerequisites on VMs prior to OpenShift installation

Run the following Ansible play on the Ansible Engine host to install and configure prerequisites for OpenShift installation.
```
ansible-playbook -e@vault_pass.yml /usr/share/ansible/openshift-ansible/playbooks/prerequisites.yml
```

Step10 : Deploy OpenShift

Run the following command to install OpenShift to the nodes specified in the host file.
```
ansible-playbook -e@vault_pass.yml /usr/share/ansible/openshift-ansible/playbooks/deploy_cluster.yml
```
________________________________________
## Summary ##
________________________________________
These plan scripts have been tested for personalizing

Red Hat Enterprise Linux 7.5

Red Hat Virtualization Host 4.2

Red Hat Virtualization Manager 4.2

Red Hat Ansible Engine 2.5

Red Hat OpenShift Container Platform 3.11

