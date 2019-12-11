# Steps for performing node labelling of physical worker node of the OpenShift Container Platform based on the hardware properties of the node

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found at https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/master/synergy/scalable/nimble. Instructions found in the deployment guide will take precedence over instructions in README.md files.

________________________________________
## About ##
________________________________________

This repo contains Ansible plays and scripts to automate the physical worker node labelling for the Red Hat OpenShift 3.11 nodes.

Contents of the repo are:

**playbooks:** This folder contains the playbook required for getting the physical worker node properties and label the node with those properties in ocp 3.11.

**roles:** This folder contains a role:
  **"get-phy-worker-props" this will get physical worker node hardware properties
  **"node-labels-physical-worker" this will label the physical worker node using the discovered hardware properties.

**hosts:** This is the host file which will be used by Ansible Engine to reference hosts during node labelling process.

**site.yaml:** In this file we import playbook "get-node-properties.yaml" and "node-labels.yaml" that controls the workflow for node labelling.


________________________________________
## Prerequisites ##
________________________________________
 
 - Red Hat OpenShift 3.11 is up and running. 
 
 - All the nodes in in Red Hat OpenShift 3.11 deployment are virtual nodes with RHEL 7.6.
 
 - User need to set common username and password across all the iLOs associated with physical worker nodes
  
 - User should install python module named "ansible" on ansible engine using the following command:
   ```
   pip install ansible   
   ``` 
 - Then check the version of python module named "ansible" using following command:
   ```
   pip freeze | grep ansible
   ```
 - Output of this command should give the python module named "ansible" version as:
   ```
   ansible==2.8.5
   ```
 - User should install python module named "proliantutils" on ansible engine using the following command:
   ```
   pip install proliantutils   
   ``` 
 - Then check the version of python module named "proliantutils" using following command:
   ```
   pip freeze | grep proliantutils
   ```
 - Output of this command should give the python module named "proliantutils" version as:
   ```
   ansible==2.9.1
   ```
________________________________________
## How to use ##
________________________________________

Step1 : Clone this repo to the Ansible Engine host using the below command
```
git clone https://github.hpe.com/Solutions/Openshift-Synergy-RA.git
```

Step2: From the Ansible Engine command prompt, browse this directory
cd /etc/ansible/hpe-solutions-openshift/synergy/scalable/nimble-vsphere/node-labelling

Step3 : Now update the following two files
```
hosts
secret.yml
```

Step3 : Then run the play using following commands
```
ansible-playbook -i hosts site.yml -e@secret.yml
``` 

Step4: Verification of succesful physical worker node labelling. Login to one of the master nodes in OCP 3.11 and type the command listed below to get the label of the physical node.
```
oc get node physicalworker_fully_qualified_domain_name --show-labels
```
Output of above command should show you the label of the physical worker node. 
NAME                                         STATUS    ROLES     AGE       VERSION           LABELS
physicalworker_fully_qualified_domain_name   Ready     compute   1d        v1.11.0+d4cacc0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,boot_mode_uefi=true,cpu_vt=true,kubernetes.io/hostname=offline-worker01.twentynet.local,node-role.kubernetes.io/compute=true,pci_gpu_devices=1
