# HPE Deployment Guide for discovering the physical node properties in an OpenShift Container Platform 4.6 deployment and advertising them through node labels.

##### Description

- This repository contains Python scripts to automate the process of fetching the hardware properties from the hardware worker nodes and labeling the node with those properties.

- Node labels can be targeted for deployments using node selectors which can be set at either a project (can be used to restrict which nodes a project gets access to) or pod level. 

- Nodes can be labelled for the following properties:
  1. Overall Health Status of the node: If current status of all "BIOS, Fans, Temperature Sensors, Battery, Processor, Memory, Network and Storage" is ok, node health status is "Ok" else "Degraded"
  2. Overall Security Status of the node: If the current status of the following BIOS configuration (which are important for the security) is as expected then security status of the node is "Ok" else "degraded": 'secure boot status (enabled), asset tag (locked), UEFI Shell Script Verification (enabled), UEFI Shell Startup (disabled), Processor AES (enabled)"
  3. Custom labeling: User defined labels (key, value) is assigned to desired physical worker node.

##### Prerequisites
 
 - Ansible engine with Ansible 2.9.x and Python  3.6.x

 - Red Hat OpenShift 4.x is up and running. 

 - The RedHat OpenShift Cluster must have physical worker node to use the "Node labeling" functionality.
 
 - The playbook under this repository need to be run from Ansible Installet Machine with the Python Virtual Environment as non-root user.
 
 - Python module "proliantutils" is installed on the OpenShift Installer Machine. 
     - "proliantutils" is a set of utility libraries for interfacing and managing various components (like iLO) for HPE Proliant Servers.
	 
	 - Use the following command to install proliantutils
       ```
       # pip install ansible==2.9.0
       ```
  
     - Verify the version of proliantutils
       ```
       # pip freeze | grep proliantutils
       ```
     
	 - Output:
       ```
	   # proliantutils==2.9.2
	   ```
 
 - Install the "sushy" python library. In case "sushy" module is already installed, please make sure its version is 3.0.0
     - Use the following command to install sushy module. 
	   ```
       pip install sushy
       ```
  
     - Verify the version of proliantutils
       ```
       # pip freeze | grep sushy
       ```
     
	 - Output:
       ```
	   sushy==3.0.0
	   ```

##### Software requirements 
| Software          | Version |
|--|--|
| HPE OneView	    | 5 |

##### Input Files
 - Playbook for RedHat OpenShift Container Platform Physical Worker Node labeling are available under BASE_DIR/platform/physical-workerlabeling/
   Note: BASE_DIR is defined and set in installer machine section of the deployment guide
   
 - It is mandatory to update all the inputs  files (hosts, secrets.yml, sysdig-agent-configmap.yaml) with appropriate values before running the playbook available in this repository.
	
	- Input file name: hosts.json
	    1. This file is an inventory of host details
		2. This file contains sensitive information like iLO IP and credentials, Worker IP and labels, so data inside this file is encrypted.
		3. To edit this vault file use the following command and provide the default "ansible vault" password.
        ```
        # ansible-vault edit hosts.json
        ```
		
		4. For each of the physical worker node that is part of RedHat OpenShift Cluster user need to provide the following information: 
	    ```	
		# "host_fqdn": "replace_with_physical_worker_node1_fqdn",
        # "ilo_ip": "replace_with_ilo_ip_of_physical_worker_node1",
        # "username": "replace_with_ilo_username",
        # "password": "replace_with_ilo_password",
        # "custom_label_required": "replace_with_No_or_Yes",
        # "label_name": "replace_with_desired_label_key",
        # "label_val": "replace_with_desired_label_value"
        ```
		
		Note: Information inside hosts.json is available in a nested JSON format, which means user can add any number of physical worker node by creating the sections as "server1, server2, server3, ...servern" and can also add any number of "custom labels" as "label1, label2, label3 and labeln". Please refer to "hosts.json" to understand this nested JSON structure.
	
	- Input file name: config.json
	    1. Provide the path information about "kubeconfig" and "oc" command
		2. **kubeconfig_path:** In this key user need to specify the path of kubeconfig and this path is used by "oc" command at runtime
		3. **oc_command_path:** In this key user need to specify the oc command path and this path is used to run the "oc" command
        ```
		# "kubeconfig_path": "replace_with_path_of_ocp_kubeconfig",
	    # "oc_command_path": "replace_with_path_of_ocp_installation_dir"
		```
##### How to Use

- Execute the following commands from the ansible installer VM in the python virtual environment as a non root user.
    ```
    # cd BASE_DIR/platform/physical-workerlabeling/
    # python physical_node_labeling.py
    ```
	Note: BASE_DIR is defined and set in installer machine section in deployment guide
	
	Next the user will be prompted to enter the ansible vault password/key. This credential is the default "ansible vault" password.
    ```
	# Enter key for encrypted variables:
	```

- Output of above command will prompt following options
    ```
	# 1: Get the physical worker node details that user wishes to configure.

	# 2: Get current health status of the physical worker node

	# 3: Get security parameters of the physical worker node

	# 4: Label the physical worker with health status

	# 5: Label the physical worker with security status

	# 6: Custom labels

	# 7: Display current labels on the node

	# 8: Quit

    # Enter the choice number:

- If user selects option 1 then they will see all the information available with the hosts.json file

- If user selects option 2, then aggregated health status of the physical worker nodes will be shown to the user as:
  ```
  # {'worker1.newocs.twentynet.local': 'OK', 'worker2.newocs.twentynet.local': 'OK'}
  ```

- If user selects option 3, then this playbook will show the aggregated security status of the physical worker node as:
  ```
  # {'worker1.newocs.twentynet.local': 'OK', 'worker2.newocs.twentynet.local': 'Degraded'}
  ```

- If user selects option 4, then the physical worker node will be labelled with its respective "aggregated health status" as given by option 2:
  ```
  # worker1.newocs.twentynet.local
  # NAME                             STATUS   ROLES    AGE   VERSION   LABELS
  # worker1.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker1.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos
  # Verified - Label  health=OK is added to the node worker1.newocs.twentynet.local

  # worker2.newocs.twentynet.local
  # NAME                             STATUS   ROLES    AGE   VERSION   LABELS
  # worker2.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker2.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos,replace_with_desired_label_key=replace_with_desired_label_value,security=Degraded
  # Verified - Label  health=OK is added to the node worker2.newocs.twentynet.local
  ```

- If user selects option 5, then the physical worker node will be labelled with its respective "aggregated security status" as given by option 3:
  ```
  # NAME                             STATUS   ROLES    AGE   VERSION   LABELS
  # worker1.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker1.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos,security=OK
  # Verified - Label  security=OK is added to the node worker1.newocs.twentynet.local
  
  # NAME                             STATUS   ROLES    AGE   VERSION   LABELS
  # worker2.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker2.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos,replace_with_desired_label_key=replace_with_desired_label_value,security=Degraded
  # Verified - Label  security=Degraded is added to the node worker2.newocs.twentynet.local

- If user selects option 6, then the physical worker node will be labelled with the custome labels defined by user in the hosts.json file
  Note: Custom labels will be applied on if user has selected "yes" or "no" in the json file for "custom_labels"

- If user selects option 7, then all the labels like security, health and custom labels along with default labels for each of the physical worker node will be shown.

- If user selects option 8, Node labeling utility will exit.