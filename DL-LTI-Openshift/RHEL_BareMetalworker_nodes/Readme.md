### **Adding RHEL8.8 Worker Nodes**

This section covers the steps to add RHEL 8.8 worker nodes to an existing Red Hat OpenShift Container Platform cluster.

1. **Creating and deleting logical drives**

    Create and delete logical drives on the worker nodes following below steps.

	**Input File Update:-**

		1. User has to update the input.yaml file in $BASE_DIR(**/opt/hpe-solutions-openshift/DL-LTI-Openshift/**) create_delete_logicaldrives directory to  execute the logical drive script.
		2. User needs to update all the details in the input.yaml file which include:-
							
                ' ILOServers:
                    - ILOIP: 172.28.*.*
                        ILOuser: admin
                        ILOPassword: Password
                        controller: 12  
                        RAID: Raid1
                        PhysicalDrives: 1I:1:1,1I:1:2  

                    - ILOIP: 172.28.*.*
                        ILOuser: admin
                        ILOPassword: Password
                        controller: 1
                        RAID: Raid1
                        PhysicalDrives: 1I:3:1,1I:3:2

                    - ILOIP: 172.28.*.*
                        ILOuser: admin
                        ILOPassword: Password
                        controller: 11
                        RAID: Raid1
                        PhysicalDrives: 1I:3:1,1I:3:2   '

	**Note:-**

		1. To find controller id login to the respective ILO -> System Information -> Storage tab where inside Location find the **slot number** as the controller id. 

					' # Example - Slot = 12 '

		2. To find the PhysicalDrives login to the respective ILO -> System Information -> Storage tab inside Unconfigured Drives where under Location you can deduce PhysicalDrives based on these information:
				
				' # Slot: 12:Port=1I:Box=1:Bay=1
				# Example - 1I:1:1 ('Port:Box:Bay')

				# Slot: 12:Port=1I:Box=1:Bay=2
				# Example - 1I:1:2 ('Port:Box:Bay') '
								
	**Playbook Execution:-**

		To delete all the existing logical drives in the server in case if any and to create new logical drives named 'RHEL Boot Volume' in respective ILO servers run the site.yml playbook inside create_delete_logicaldrives directory with the below mentioned command                   

					' # ansible-playbook site.yml --ask-vault-pass'

2. Cleanup and reboot the RHEL 8.8  [Installer machine](https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md "https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md"), so the machine can be added as worker node to the existing OpenShift Container Platform cluster.

3. Login to the Installer VM (that we created as a part of rhel8_installerVM.yml -- it would have created one KVM VM on one of the head nodes)

4. Navigate to the directory $BASE_DIR(**/opt/hpe-solutions-openshift/DL-LTI-Openshift/**) then copy **input file and hosts** file to $BASE_DIR/RHEL_BareMetalworker_nodes/ and later update ocp worker details in input file and kvm_workernodes group as per sample host file.

5. Navigate to the directory $BASE_DIR/RHEL_BareMetalworker_nodes/

```
cd $BASE_DIR/RHEL_BareMetalworker_nodes/
```
**NOTE**
$BASE_DIR refers to **/opt/hpe-solutions-openshift/DL-LTI-Openshift/**

6. Run the following commands on the rhel8 installer VM to edit the vault input file.

```
ansible-vault edit input.yaml
```
**NOTE**
ansible vault password is **changeme**

The installation user should review hosts file (located on the installer VM at $BASE_DIR/inventory/hosts)

```
vi inventory/hosts

```
7. Copy Rhel8.8 DVD ISO to **/usr/share/nginx/html/**

8. Run the below command to download the required packages for adding worker nodes.

         'sh setup.sh' 

9. Execute the following command to add the worker nodes to the cluster

         'ansible-playbook -i inventory/hosts site.yml --ask-vault-pass'

In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:

		 '- import_playbook: playbooks/rhel8_os_deployment.yml
          - import_playbook: playbooks/copy_ssh.yml
          - import_playbook: playbooks/prepare_worker_nodes.yml
          - import_playbook: playbooks/ntp.yml
          - import_playbook: openshift-ansible/playbooks/scaleup.yml'

### **Playbook description**

**openshift-ansible/playbooks/scaleup.yml**

-   This playbook contains the script to add worker nodes to OCP cluster.This playbook queries the master, generates and distributes new certificates for the new hosts, and then runs the configuration playbooks on only the new hosts

Once all playbooks executed successfully check the node status as below.

         '$ oc get nodes'

Execute the following command to set the parameter **mastersSchedulable** parameter as **false**, so that master nodes will not be used to schedule pods.

         '$ oc edit scheduler'

### ***Note*** 
To add more worker Nodes, need to update worker details in haproxy and binddns on head nodes. Then go ahead with Adding RHEL8.8 Worker Nodes section.
