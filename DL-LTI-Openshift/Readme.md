**Lite touch Installation of OpenShift Platform using Ansible playbook**

### **Installer Machine Prerequisite:**

RHEL 8.5 Installer machine the following configurations.

1.  At least 500 GB disk space (especially in the \"/\" partition), 4 CPU cores and 16GB RAM.

2.  Rhel 8.5 Installer machine should be subscribed with valid **Redhat credentials**.

3.  Sync time with NTP server.

4.  SSH Key pair should be there on the installer machine, if not kindly generate a new SSH key pair using the below command.

         ssh-keygen

5.  Use the following commands to create and activate a Python3 virtual environment for deploying this solution.

		'python3 -m venv \<virtual_environment_name\>
		 source \<virtual_environment_name\>/bin/activate'

6.  Execute the following commands in the Ansible Engine to download the repositories.

	    'mkdir /opt
		 cd /opt
		 yum install -y git
		 git clone <https://github.com/HewlettPackard/hpe-solutions-openshift.git>'

7.  Setup the installer machine to configure the nginx, development tools and other python packages required for LTI installation. Navigate to the directory,    /opt/hpe-solutions-openshift/DL-LTI-Openshift/ and run the below command.

         'sh setup.sh'

8.  As part of setup.sh script it will create nginx service, so user must download and copy Rhel 8.5 and Rhel 7.9 DVD ISO to **/usr/share/nginx/html/**

9.  **Creating and deleting logical drives**

    Create and delete logical drives on the head nodes following below steps.

	**Input File Update:-**

		1. User has to update the input.yaml file in /opt/hpe-solutions-openshift/DL-LTI-Openshift/create_delete_logicaldrives directory to  execute the logical drive script.
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

					' # ansible-playbook site.yml '

### *Note* If you do not have proxy or VLAN based setup leave these variables empty as shown below
	servers:
	  Host_VlanID:                          
	  corporate_proxy:                        
	  corporate_proxy_port:
	  
	squid_proxy_IP: 
	corporate_proxy: 
	squid_port:

### **Input files**

### *Note* For server type ProLiant DL360 Gen10, Bonding_Interface1 = eno5 Bonding_Interface2 = eno6. For server type ProLiant DL365 Gen10 Plus, Bonding_Interface1 = ens2 Bonding_Interface2 = ens3

We can provide the input variables in any one of the below methods

Method 1.  **Input.py : Automation way of taking input**

Through the input.py, go to the directory /opt/hpe-solutions-openshift/DL-LTI-Openshift/ and run the below command.

            'python input.py'

Here it will prompt for values for the fields enter one by one.
A sample input collection through input.py is as follows.

			'Enter server serial number for the first head node server ( Example: 2M2210020X )
			2M205107TH
			Enter ILO address for the first head node server ( Example: 192.28.201.5 )
			172.28.201.13
			Enter ILO username for the first head node server ( Example: admin )
			admin
			Enter ILO password for the first head node server ( Example: Password )
			Password
			Enter Host FQDN for the first head node server ( Example: kvm1.xyz.local )
			headnode1.isv.local
			etc ...............................'

After execution of the command input.py it will generate input.yaml and hosts file in the same location.


Method 2.  **Input.yaml: Manually editing input file**

Go to the directory /opt/hpe-solutions-openshift/DL-LTI-Openshift/, here we will have input_sample.yaml and hosts_sample files

Rename those two files as input.yaml and hosts and open the files and fill the values as per your setup.

A sample input.yaml file is as follows with a few filled parameters.

				 '- Server_serial_number: 2M20510XXX
					ILO_Address: 172.28.*.*
					ILO_Username: admin
					ILO_Password: *****
					Hostname: headnode1.XX.XX                #ex. headnode1.isv.local
					Host_Username: root
					Host_Password: ******
					Bonding_Interface1: eno5
					Bonding_Interface2: eno6
					Host_OS_disk: sda
					Host_VlanID: ***
					Host_IP: 172.28.*.*
					Host_Netmask: 255.*.*.*
					Host_Prefix: XX                          #ex. 8,24,32
					Host_Gateway: 172.28.*.*
					Host_DNS: 172.28.*.*
					Host_Domain: XX.XX                       #ex. isv.com
					corporate_proxy: 172.28.*.*              #provide corporate proxy, ex. proxy.houston.hpecorp.net
					corporate_proxy_port: XX               #corporate proxy port no, ex. 8080

					config:
					HTTP_server_base_url: http://172.28.*.*/  #Installer IP address
					HTTP_file_path: /usr/share/nginx/html/    
					OS_type: rhel8
					OS_image_name: rhel-8.5-x86_64-dvd.iso
					base_kickstart_filepath: /opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/rhel8_os_deployment/tasks/ks_rhel8.cfg'

A sample **hosts** files is as follows

			   '[kvm_nodes]
				172.28.*.*
				172.28.*.*
				172.28.*.*

				[ansible_host]
				172.28.*.*

				[rhel7_installerVM]
				172.28.*.*

				[binddns_masters]
				172.28.*.*

				[binddns_slaves]
				172.28.*.*
				172.28.*.*

				[masters_info]
				master1 ip=172.28.*.* hostname=headnode1

				[slaves_info]
				slave1 ip=172.28.*.* hostname=headnode2
				slave2 ip=172.28.*.* hostname=headnode3'

### **Playbook execution** 

1.  Openshift Platform can be deployed by running site.yml or by running individual playbooks. Each playbook description can be found further in this document.

2. If you are not using proxy based setup, comment 'import_playbook: playbooks/squid_proxy.yml' in site.yml file.

3.  Run the below command to execute the Lite Touch Installation.

			'ansible-playbook -i hosts site.yml'

In case if user want to deploy through individual playbooks. Sequence of
playbooks to be followed are:

		   '- import_playbook: playbooks/rhel8_os_deployment.yml
			- import_playbook: playbooks/copy_ssh_headnode.yml
			- import_playbook: playbooks/prepare_rhel_hosts.yml
			- import_playbook: playbooks/ntp.yml
			- import_playbook: playbooks/binddns.yml
			- import_playbook: playbooks/haproxy.yml
			- import_playbook: playbooks/squid_proxy.yml
			- import_playbook: playbooks/download_ocp_packages.yml
			- import_playbook: playbooks/generate_manifest.yml
			- import_playbook: playbooks/storage_pool.yml
			- import_playbook: playbooks/rhel7_installerVM.yml
			- import_playbook: playbooks/copy_ssh_installerVM.yml
			- import_playbook: playbooks/prepare_rhel7_installer.yml
			- import_playbook: playbooks/copy_ocp_tool.yml
			- import_playbook: playbooks/deploy_ipxe_ocp.yml
			- import_playbook: playbooks/ocp_vm.yml'

### **Playbook description**

**site.yml**

-   This playbook contains the script to deploy Openshift Container platform starting from the OS_deployment until cluster up.

**rhel8_os_deployment.yml**

-   This playbook contains the scripts to deploy rhel8.5 OS on baremetal servers.

**copy_ssh_headnode.yml**

-   This playbook contains the script to copy the ssh public key from installer machine to the head nodes.

**prepare_rhel_hosts.yml**

-   This playbook contains the script to prepare nodes for the OpenShifthead nodes.

**ntp.yml**

-   This playbook contains the script to create NTP setup on head nodes to make sure time synchronization.

**binddns.yml**

-   This playbook contains the script to deploy bind dns on three head nodes and it will work as a Active Passive

**haproxy.yml**

-   This playbook contains the script to deploy haproxy on the head nodes and it will acts as Active Active

**squid_proxy.yml**

-   This playbook contains the script to deploy the squid proxy on the head nodes in order to get web access. If you are not using proxy based setup skip this playbook.

**download_ocp_packages.yml**

-   This playbook contains the script to download the required Openshift packages.

**generate_manifest.yml**

-   This playbook contains the script to generate the manifests files.

**storage_pool.yml**

-   This playbook contains the script to create the storage pools on the head nodes.

**rhel7_installerVM.yml**

-   This playbook contains the script to create a rhel7 installer machine and this will be used as a installer further.

**copy_ssh_installerVM.yml**

-   This playbook contains the script to copy the ssh public key to the rhel7 installer machine.

**prepare_rhel7_installer.yml**

-   This playbook contains the script to prepare the rhel7 installer.

**copy_ocp_tool.yml**

-   This playbook contains the script to copy the ocp tools from the present installer to head nodes and rhel7 installer.

**deploy_ipxe_ocp.yml**

-   This playbook contains the script to deploy the ipxe code on the head nodes.

**ocp_vm.yml**

-   This playbook contains the script to create bootstrap and master nodes.

### **OpenShift Container Platform Cluster Deployment**

Once the playbooks executed successfully then need to deploy OpenShift cluster as follows.

**Deploying OpenShift Cluster**

Once the Bootstrap and master nodes are deployed with the RHCOS perform the following.

1. Login to the Installer VM (that we created as a part of rhel7_installerVM.yml -- it would have created one KVM VM on one of the head nodes)

2. Add the kubeconfig path in the environment variables as follows

         '$ export KUBECONFIG=/opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeconfig'

3.Now execute the following command.

         '$ openshift-install wait-for bootstrap-complete --dir=/opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions --log-level debug'

4.Execute the below command to complete the RedHat OpenShift Cluster
installation.

         '$ openshift-install wait-for install-complete --dir=/opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions --log-level=debug'

5.  After completion of install-complte check cluster status

         '$ oc get nodes'

### **Adding RHEL8.5 Worker Nodes**

This section covers the steps to add RHEL 8.5 worker nodes to an existing Red Hat OpenShift Container Platform cluster.

1. Login to the Installer VM (that we created as a part of rhel7_installerVM.yml -- it would have created one KVM VM on one of the head nodes)

2. Navigate to the directory /opt/hpe-solutions-openshift/DL-LTI-Openshift/worker_nodes/

3. Here we can find input.yaml and inventory/hosts file , enter the values as per your setup.

4. Copy Rhel8.5 DVD ISO to /usr/share/nginx/html/ 

5. Navigate to the directory,    /opt/hpe-solutions-openshift/DL-LTI-Openshift/worker_nodes and run the below command.

         'sh setup.sh' 

6. Execute the following command to add the worker nodes to the cluster

         'ansible-playbook -i inventory/hosts site.yaml'

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

### ***Note*** To add more worker Nodes, need to update worker details in haproxy and binddns on head nodes. Then go ahead with Adding RHEL8.5 Worker Nodes section.
