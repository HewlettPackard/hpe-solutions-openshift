# HPE Deployment Guide for integrating Sysdig (sysdig SaaS model for secure and monitor) agents with Red Hat OpenShift Container Platform

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found at https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/master/synergy/scalable. Instructions found in the deployment guide will take precedence over instructions in README.md files.

________________________________________
## About ##
________________________________________

This repo contains Ansible plays and scripts to automate the installation of sysdig agents over the Red Hat OpenShift 4.x nodes.

Contents of the repo are:

**playbooks:** This folder contains the playbook required for sysdig agent installtion over ocp 4.x.

**roles:** This folder contains a role called "sysdig-agent-deploy-ocp" which is responsible for performing the actions required for sysdig agent integration.

**hosts:** This is the host file which will be used by OpenShift installer machine to reference hosts during sysdig agent deployment. Provide the OCP installer machine IP or fully qualified domain name in this file

**site.yaml:** In this file we import playbook "sysdig-agent-deployment.yaml" that defines our entire workflow for sysdig integration.


________________________________________
## Prerequisites ##
________________________________________
 
 - Red Hat OpenShift 4.x is up and running. 
 
 - All the master nodes in Red Hat OpenShift 4.x deployment are CoreOS based.
 
 - All the worker nodes in in Red Hat OpenShift 4.x deployment are CoreOS based.
  
 - User has SaaS based access to Sysdig Secure and Sysdig Monitor for the purpose of Container Security.
 
 - User has "admin rights and privilege" for Sysdig Secure and Sysdig Monitor.
 
 - User has valid access token that is given by Sysdig and is specific to their credentials on Sysdig SaaS platform.
 
 - User has updated the kernel to make sure on all the RHEL nodes have same kernel version. Information regading this can be found by logging into sysdig monitor account. Then go to setting and under Agent Installation you will find instructions to install the kernel headers.
 
 - Enable passwordless ssh from Openshift installer machine to itself (Openshift installer machine or localhost)
 
________________________________________
## Custom Attributes\Variable Files and plays ##
________________________________________

User need to update the playbook with the paths for "oc" command related environment variable before running the plays.

**playbooks/sysdig-agent-deployment.yaml**

Each playbook has a role associated with it. Each role has a set of tasks under "task" folder and variables under "var" folder.
These variable values need to be defined by the user according to the installer’s environment before running the plays.

**sysdig-agent-deploy-ocp/vars/main.yml**

This file will be used during sysdig agent deployment over OpenShift and contains sysdig related variables. 

**sysdig-agent-deploy-ocp/tasks/main.yml**

This file contains the actual sysdig agent installation steps. Edit the variable "k8s_cluster_name" with your OCP 4.x cluster name.

**sysdig-agent-deploy-ocp/files/sysdig-agent-configmap.yaml**

This file "sysdig-agent-configmap.yaml" is provided by sysdig and handles the sysdig software related configurations.

**sysdig-agent-deploy-ocp/files/sysdig-agent-daemonset-redhat-openshift.yaml**

The file "sysdig-agent-daemonset-redhat-openshift.yaml" is provided by sysdig and handles the sysdig daemon related configurations.

________________________________________
## How to use ##
________________________________________

Step1 : Clone this repo to the OpenShift Installer Machine using the below command
```
git clone https://github.hpe.com/Solutions/Openshift-Synergy-RA.git
```

Step2 : From the OpenShift Installer Machine command prompt, browse this directory and type update the following files
```
hosts file
playbooks/sysdig-agent-deployment.yaml
roles/sysdig-agent-deploy-ocp/vars/main.yml
roles/sysdig-agent-deploy-ocp/files/sysdig-agent-configmap.yaml
```

Step3 : Then run the play using following commands
```
ansible-playbook -i hosts site.yml
``` 

Step4: Verification of successful agent deployment. Login to the Openshift Installer Machine that is mentioned in the hosts file and type the following command
```
oc get pods

Output of above command should show you all sysdig pods in running state. 
sysdig-agent-747qh   1/1       Running   0          20h
sysdig-agent-8jf6g   1/1       Running   0          20h
sysdig-agent-95p69   1/1       Running   0          20h
sysdig-agent-jwb5j   1/1       Running   0          20h

Note: If you see a pod on pending state then there might be a possibility that underlying OCP node is not functional.
```

Step5: Login to Sysdig Secure and under Policy Events --> Hosts and Containers --> user will find all the node that are part of your OCP infra and this shows sysdig agents are successfully installed and monitoring on all those nodes.
```
________________________________________
## Summary ##
________________________________________
These scripts have been tested on OCP 4.3 and after successful installation of sysdig agent, sysdig secure shows the agents in its web console.

OCP Nodes/VM run on CoreOS with kernel version 4.18.0-147.3.1.el8_1.x86_64

Installer Machine Version: Red Hat Enterprise Linux 7.6

Python: 3.6.9 

Ansible Version: 2.9.4
