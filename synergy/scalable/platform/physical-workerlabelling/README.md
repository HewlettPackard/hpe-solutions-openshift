# HPE Deployment Guide for discovering the physical node properties in an OpenShift Container Platform 4.3 deployment and advertising them through node labels.
Node labels can be targeted for deployments using node selectors which can be set at either a project (can be used to restrict which nodes a project gets access to) or pod level. 

Nodes can be labelled for the following properties:
1. Overall Health Status of the node: If current status of all "BIOS, Fans, Temperature Sensors, Battery, Processor, Memory, Network and Storage" is ok, node health status is "Ok" else "Degraded"
2. Overall Security Status of the node: If the current status of the following BIOS configuration (which are important for the security) is as expected then security status of the node is "Ok" else "degraded": 'secure boot status (enabled), asset tag (locked), UEFI Shell Script Verification (enabled), UEFI Shell Startup (disabled), Processor AES (enabled)"
3. Custom Labelling: User defined labels (key, value) is assigned to desired physical worker node.

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found at https://github.hpe.com/Solutions/Openshift-Synergy-RA/tree/master/synergy/scalable. Instructions found in the deployment guide will take precedence over instructions in README.md files.

________________________________________
## About ##
________________________________________
This repository contains Python scripts to automate the process of fetching the hardware properties from the hardware worker nodes and labelling the node with those properties.

Contents of the repository are:

**config.json:" This file contains variables holding information about the OpenShift specific environment variables.
Understanding keys in config.json:
**kubeconfig_path:** In this key user need to specify the path of kubeconfig and this path is used by "oc" command at runtime
**oc_command_path:** In this key user need to specify the oc command path and this path is used to run the "oc" command

**hosts.json:** This is the host file which will be used by OpenShift installer machine to reference physical worker nodes and userdefined labels.
Understanding the keys in hosts.json:
**"host_fqdn":** Specify the physical worker node fully qualified domain name or IP
**ilo_ip:**      iLO IP of the physical worker node
**username:**    Username to login to iLO of the physical worker node
**password:**    Password to login to iLO of the physical worker node
**custom_label_required:** Value is "yes", if user wish to use custom labels, else value is "no"
"custom_labels:** Specify the custom labels key and value


**json_parser.py:** This file contains the logic to derive value of any standalone key or nested keys from the a json file.

**physical_node_labelling.py:** This file contains the logic to derive the physical hardware properties and label the OpenShift Container Platform physical worker nodes based on properties and user defined label names. To extract hardware properties python module "proliantutils" is used in this script.


________________________________________
## Prerequisites ##
________________________________________
 
 - Red Hat OpenShift 4.3 is up and running. 
 
 - All the master nodes in in Red Hat OpenShift 4.3 deployment are virtual nodes with CoreOS.
 
 - All the worker nodes in in Red Hat OpenShift 4.3 deployment are either virtual nodes or physical nodes with CoreOS.
 
 - This solution should be deployed with Python 3.6.x along with Ansible 2.9.4. 

	The following steps describe the installation of appropriate Python and ansible versions. 
	1)	Install Python 3.6.x using the command,
	```
	# yum -y install rh-python36
	```
	2)	Enable the Python 3.6.x environment using the command,
	```
	# scl enable rh-python36 bash
	```
	3)	Create a new virtual environment for deploying this solution,
	```
	# python3 -m venv <virtual environment name>
	```
	4)	Activate the virtual environment using,
	```
	# source <virtual environment name>/bin/activate
	```
	5)	Install Ansible 2.9.4,
	```
	# python3 -m pip install ansible==2.9.4
	```
	6)	Check the ansible and associated python version
	```
	# ansible --version
	```
	ansible 2.9.4
	  config file = None
	  configured module search path = ['/root/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
	  ansible python module location = /root/ocp/myproject1/lib64/python3.6/site-packages/ansible
	  executable location = /root/ocp/myproject1/bin/ansible
	  python version = 3.6.9 (default, Sep 11 2019, 16:40:19) [GCC 4.8.5 20150623 (Red Hat 4.8.5-16)]

  
 - Python module "proliantutils" is installed on the OpenShift Installer Machine. "proliantutils" is a set of utility libraries for interfacing and managing various components (like iLO) for HPE Proliant Servers.
 
 - Use the following command to install proliantutils
   ```
   pip install proliantutils
   ```
 
 - Verify the version of proliantutils
   ```
   pip freeze | grep proliantutils
   ```
   Output:
   You are using pip version 9.0.1, however version 20.0.2 is available.
   You should consider upgrading via the 'pip install --upgrade pip' command.
   proliantutils==2.9.2
 
 - Use the following command to install sushy module. In case "sushy" module is already installed, please make sure its version is 3.0.0
   ```
   pip install sushy
   ```
 
 - Verify the version of proliantutils
   ```
   pip freeze | grep sushy
   ```
   Output: 3.0.0



________________________________________
## How to use ##
________________________________________

Step1 : Swtich to python3 virtual environment
```
source <virtual environment name>/bin/activate
```

Step2 : Clone this repo to the OpenShift Installer Machine using the below command
```
git clone https://github.hpe.com/Solutions/Openshift-Synergy-RA.git
```

Step3 : From the OpenShift Installer Machine command prompt, browse this directory and type update the following files
```
config.json file
hosts.json file
```

Step4 : Then run the play using following commands
```
python physical_node_labelling.py 
``` 
Output:
1: Get the physical worker node details.

2: Get current health status of the physical worker node

3: Get security parameters of the physical worker node

4: Label the physical worker with health status

5: Label the physical worker with security status

6: Custom labels

7: Display current labels on the node

8: Quit

 Enter the choice number:

Step5: Verification of the successful labelling of nodes
```
Enter the choice number: 7
```

_______________________________________
## Summary ##
________________________________________
These scripts have been tested on Red Hat OpenShift Container Platform 4.3.

OCP Nodes/VM run on CoreOS

Installer Machine Version: Red Hat Enterprise Linux 7.6

Python: 3.6.9 

proliantutils: 2.9.2

sushy: 3.0.0