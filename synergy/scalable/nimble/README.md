# Red Hat OpenShift Container Platform on HPE Synergy with HPE Nimble Storage

________________________________________
## About ##
________________________________________

This repo contains Ansible plays and scripts to automate the installation of Red Hat OpenShift 3.7. The actual OpenShift deployment Ansible play is from the OpenShift-Ansible repo (https://github.com/openshift/openshift-ansible ) and is not included here.

Contents of the repo are:

**group_vars:** This folder contains the OSEv3 variable files used for OpenShift installation.

**Vault_pass.yml:** is the Ansible Vault file which stores the credentials.

**scripts:** This folder contains the update-known_hosts.sh shell script which will add the OpenShift hosts to the known_hosts file on the Ansible Engine system.

**hosts:** This is the host file which will be used by Ansible Engine to reference hosts during OpenShift deployment.

**tasks:** This folder contains various sub-folders with tasks required to be completed for the OpenShift installation and validation.

**Ovirt-template:** This folder contains the Ansible play and variable file for VM Template creation in RHV-M.

**Ovirt-VM-Deploy:** This folder contains Ansible plays for deploying VMs along with the associated variable file. It also contains delete-vm.yaml which is used to unregister and delete VMs from RHV-M.

**Host-Preparation:** The host-prepare.yaml play installs prerequisites and prepares hosts for OpenShift installation. The associated variable file is vars-hosts.yaml.

**Validate-Deployment:** This folder consists of validate-pod-pv.yaml which creates a sample application with persistent storage. The descriptor files for Persistent Volume (PV) and the application can be found within the folder files.

 
________________________________________
## Prerequisites ##
________________________________________
 
 - Ansible Engine should be installed and configured and capable of communicating with the hosts used in this solution.
 
 - Red Hat Virtualization Host 4.2 is installed and configured.
 
 - RHV-M is installed as either hosted engine or independent within the solution environment.
 
 - The RHV hosts have been added to the correct cluster within RHV-M.
 
 - Create the appropriate Datacenter and cluster within RHV-M.
 
 - Make sure that both storage and networking are configured per the installation doc within RHV-M.
 
 - DNS entries should exist for all hosts and hosts resolve correctly.
 
 - The htpasswd file should be generated and stored at /etc/oshift-hash-pass.htpasswd.


________________________________________
## Custom Attributes\Variable Files  ##
________________________________________
	
Each Ansible play in the tasks folder has a variable file. This variable file needs to be edited by the installer according to the installer’s environment.

**group_vars/OSEv3**

This file will be used during OpenShift installation and contains OpenShift related variables. 

**tasks/Ovirt-template/vars-template.yaml**

This file contains variables for the deploy-template.yaml play which creates the VM template. This file should contain RHV-M related information, template details and the RedHat download sites URL for Red Hat Enterprise Linux 7.5 KVM Guest Image.

**tasks/Ovirt-VM-Deploy/vars-vm.yaml**

This files contains RHV-M related information and details about the virtual machines required for OpenShift Installation. The alignment of the details in the VMS and load balancers sections is important and should be maintained as per the file.

**tasks/Host-Preparation/vars-hosts.yaml**

The file host-prepare.yaml uses this variable file to configure the hosts for OpenShift installation. This file contains the path to the second disk for the physical worker nodes for configuring Docker local storage as well as RedHat subscription repo pool IDs for physical and virtual machines.

________________________________________
## How to use ##
________________________________________

Step1 : Clone this repo to the Ansible Engine host to /etc/ansible using the below command
```
git clone http://github.com/HewlettPackard/hpe-solutions-openshift
```

Step2 : Clone the Openshift-Ansible repo for OpenShift deployment play to the Ansible Engine.
```
cd /etc/ansible/
git clone https://github.com/openshift/openshift-ansible
git checkout release-3.7
```

Step2 : Create the VM template in RHV-M using the below command. 

This will create a template which will be used to clone and deploy VMs for OpenShift installation.
``` 
ansible-playbook -i /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/hosts /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/tasks/Ovirt-template/deploy-template.yaml --ask-vault-pass -e@/etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/group_vars/vault_pass.yml
```

Step3 : Deploy VMs from the template.

Run the following command on the Ansible Engine to create VMs for Master, ETCD, Infra and LB nodes for OpenShift
```
ansible-playbook -i /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/hosts /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/tasks/Ovirt-VM-Deploy/deploy-vm.yaml --ask-vault-pass -e@/etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/group_vars/vault_pass.yml
```

Step4: Add Hosts to the Known Host File

Run the following shell script to add host details of the know_hosts file in the Ansible engine. 
```
/etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/scripts/update-known_hosts.sh
```

Step5: Install prerequisites on VMs and physical hosts prior to OpenShift installation

Run the following Ansible play on the Ansible Engine host to install and configure prerequisites for OpenShift installation.
```
ansible-playbook -i /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/hosts /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/tasks/Host-Preparation/host-prepare.yaml --ask-vault-pass -e@/etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/group_vars/vault_pass.yml
```

Step6: Deploy OpenShift

Run the following command to install OpenShift to the nodes specified in the host file.
```
ansible-playbook -i /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble/hosts /etc/ansible/openshift-ansible/playbooks/byo/config.yml
```
________________________________________
## Summary ##
________________________________________
These plan scripts have been tested for personalizing

Red Hat Enterprise Linux 7.5

Red Hat Virtualization Host 4.2

Red Hat Virtualization Manager 4.2

Red Hat Ansible Engine 2.5

Red Hat OpenShift Container Platform 3.7


