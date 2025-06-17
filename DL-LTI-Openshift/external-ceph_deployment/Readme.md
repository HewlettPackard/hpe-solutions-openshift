**Lite touch Installation of external ODF(CEPH) cluster using Ansible playbook**

### **Installer Machine Prerequisite:**

RHEL 9.4 Installer machine the following configurations(we can utilise the same installer machine used for RHOCP cluster deployment).


1.  At least 500 GB disk space (especially in the \"/\" partition), 4 CPU cores and 16GB RAM.

2.  Rhel 9.4 Installer machine should be subscribed with valid **Redhat credentials**.

3.  Sync time with NTP server.

4.  SSH Key pair should be there on the installer machine, if not kindly generate a new SSH key pair using the below command.

         ssh-keygen

5.  Use the following commands to create and activate a Python3 virtual environment for deploying this solution.

		'python3 -m venv \<virtual_environment_name\>  Example:virtual_environment_name=ocp
		 source \<virtual_environment_name\>/bin/activate'

6.  Execute the following commands in the Ansible Engine to download the repositories.

	    'mkdir /opt
		 cd /opt
		 yum install -y git
		 git clone <https://github.com/HewlettPackard/hpe-solutions-openshift.git>

7.  Setup the installer machine to configure the nginx, development tools and other python packages required for LTI installation. Navigate to the directory, /opt/hpe-solutions-openshift/DL-LTI-Openshift/ and run the below command.

         'sh setup.sh'

8.  As part of setup.sh script it will create nginx service, so user must download and copy Rhel DVD ISO to **/usr/share/nginx/html/**

9.  Minimum Storage requirement for external odf cluster servers

       |      **Servers**       | **Host OS disk** | **Storage Pool disk** |
       |------------------------|------------------|-----------------------|
       | Server 1               | 2 x 1.6 TB       | 8 x 1.6 TB            |
       | Server 2               | 2 x 1.6 TB       | 8 x 1.6 TB            |
       | Server 3               | 2 x 1.6 TB       | 8 x 1.6 TB            |
	
       Host OS disk – raid1 for redundancy

For Creating and deleting of logical drives refer to the Readme of the Openshift platform installation

								
   **Playbook Execution:-**
   To delete all the existing logical drives in the server in case if any and to create new logical drives named 'RHEL Boot Volume' in respective ILO servers run the site.yml playbook inside create_delete_logicaldrives directory with the below mentioned command                   

					' # ansible-playbook site.yml --ask-vault-pass'

### *Note* If you do not have proxy or VLAN based setup leave these variables empty as shown below
	servers:
	  Host_VlanID:                          
	  SquidProxy_IP:                        
	  SquidProxy_Port:
	  
	squid_proxy_IP: 
	corporate_proxy: 
	squid_port:

### **Input files**

We can provide the input variables in below method

**Input.yaml: Manually editing input file**

Go to the directory $BASE_DIR(**/opt/hpe-solutions-openshift/DL-LTI-Openshift/external-ceph_deployment**), here we will have input.yaml and hosts files.

1. A preconfigured Ansible vault file (input.yaml) is provided as a part of this solution, which consists of sensitive information to support the host and virtual machine deployment.

```
cd $BASE_DIR
```

Run the following commands on the installer VM to edit the vault to match the installation environment.

```
ansible-vault edit input.yaml
```
**NOTE**
The default password for the Ansible vault file is **changeme**

Sample input_sample.yml can be found in the $BASE_DIR along with description of each input variable.

A sample input.yaml file is as follows with a few filled parameters.

				 '- Server_serial_number: 2M20510XXX
					ILO_Address: 172.28.*.*
					ILO_Username: admin
					ILO_Password: *****
					Hostname: ceph01.XX.XX                #ex. ceph01.isv.local
					Host_Username: root
					Host_Password: ******
					HWADDR1: XX:XX:XX:XX:XX:XX             #mac address for server physical interface1 
					HWADDR2: XX:XX:XX:XX:XX:XX             #mac address for server physical interface2 
					Host_OS_disk: sda
					Host_VlanID: 230                         #solution VLAN ID ex. 230
					Host_IP: 172.28.*.*
					Host_Netmask: 255.*.*.*
					Host_Prefix: XX                          #ex. 8,24,32
					Host_Gateway: 172.28.*.*
					Host_DNS: 172.28.*.*
					Host_Domain: XX.XX                       #ex. isv.local
                                        SquidProxy_IP:               #provide Squid proxy, ex. proxy.houston.hpecorp.net
					SquidProxy_Port: 
### *Note* 

The First Machine details provided in the server section of input file will be considered for Manager/admin node in the ceph Cluster.

					config:
					HTTP_server_base_url: https://172.28.*.*/  #Installer IP address
					HTTP_file_path: /usr/share/nginx/html/    
					OS_type: rhel
					OS_image_name: rhel-9.4-x86_64-dvd.iso
					base_kickstart_filepath: '/opt/hpe-solutions-openshift/DL-LTI-Openshift/external-ceph_deployment/playbooks/roles/rhel9_os_deployment/tasks/ks_rhel9.cfg'

                    dashboard_user: xxx                      # provide the ceph user who needs admin access
					dashboard_password: xxxxxxxxxxx          # provide the temporary password that needs to be setup for user

					client_user: xxxx                        # provide the user who needs access with read only permission to dashboard.
					client_pwd: xxxxxxxxxxx                  # provide the password for user who needs access with read only permission to dashboard.

					ceph_adminuser: xxxxxxxxx                # provide the ceph user who will deploy the cluster
					ceph_adminuser_password: xxxxxxx         # provide the password for the user who will deploy the cluster.

					rbd_pool_name: xxxxxx                    # provide the block name which will be created in cluster
					rgw_pool_name: xxxx                      # provde the gateway name which will be created inside the cluster

					ceph_fs:
					  - fs_pool_name: xxxxxx               # provide the ceph file system name which will be created in cluster
						number_of_daemons: x               # provide the number of daemons which has to be created for mds
						hosts:
						  -  xxxx.xxxxxx.xxxx                # provide the fqdn name of the nodes where mds damons has to run. If number of daemons are 3 provide 3 fqdn details of the nodes in cluster.
						  -  xxxx.xxxxxx.xxxx
						  -  xxxx.xxxxxx.xxxx

2. The installation user should review hosts file (located on the installer VM at $BASE_DIR/hosts) and ensure that the information within the file accurately reflects the information in their environment.

Use an editor such as vi or nano to edit the inventory file.

```
vi $BASE_DIR/hosts

```
                           [ceph_nodes]
                           installer.isv.local
                           ceph01.isv.local
                           ceph02.isv.local
                           ceph03.isv.local

                           [OSD]
                           ceph01.isv.local
                           ceph02.isv.local
                           ceph03.isv.local

                           [admin]
                           ceph01.isv.local

in the above sample file: ,Installer is the Asnbile machine, ceph01 is the ceph adminstration machine and ceph01,ceph02,ceph03 are the machines with Object storage daemon disk machines.

### **Playbook execution** 

1.  External OpenShift Data Foundation(CEPH) cluster can be deployed by running site.yml or by running individual playbooks. Each playbook description can be found further in this document.


2.  Run the below command to execute the Lite Touch Installation.

			'ansible-playbook -i hosts site.yml --ask-vault-pass'

In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:

		     '- import_playbook: playbooks/rhel9_os_deployment.yaml
			  - import_playbook: playbooks/ssh.yaml
			  - import_playbook: playbooks/subscriptions.yaml
			  - import_playbook: playbooks/ntp.yaml
			  - import_playbook: playbooks/user_req.yaml
			  - import_playbook: playbooks/deploy_cephadm.yaml
			  - import_playbook: playbooks/registry.yaml
			  - import_playbook: playbooks/preflight.yaml
			  - import_playbook: playbooks/bootstrap.yaml
			  - import_playbook: playbooks/add_hosts.yaml
			  - import_playbook: playbooks/add_osd.yaml
                     - import_playbook: playbooks/client_user.yaml
                     - import_playbook: playbooks/copy_script.yaml
			  - import_playbook: playbooks/rbd.yaml              # execute this playbook for rbd storage
			  - import_playbook: playbooks/fs.yaml               # execute this playbook for cephfs
			  - import_playbook: playbooks/rgw.yaml'             # execute this playbook for rgw

we should excute the last three playbooks as per the customer requirement.

### **Playbook description**

**site.yaml**

-   This playbook contains the script to deploy external Openshift Data Foundation(ODF) platform starting from the OS_deployment until cluster up.

**rhel9_os_deployment.yaml**

-   This playbook contains the scripts to deploy rhel9.4 OS on baremetal servers.

**ssh.yaml**

-   This playbook contains the script to create and copy the ssh public key from installer machine to other nodes in the cluster.

**subscriptions.yaml**

-   This playbook contains the script to RHEL subscription and enables the required repositories required for the building the ceph cluster.

**ntp.yaml**

-   This playbook contains the script to create NTP setup on head nodes to make sure time synchronization.

**user_req.yaml**

-   This playbook contains the script to create a user on all nodes and copy the required ssh keys to the newly created user.

**deploy_cephadm.yaml**

-   This playbook contains the script to deploy the cephadm packages to the administration node.

**registry.yaml**

-   This playbook contains the script to create the registry on the installer node.

**preflight.yaml**

-   This playbook contains the script to call the Redhat provided playbooks to execute the some more prerequites required for the environment.

**bootstrap.yaml**

-   This playbook contains the script to bootstrap the ceph cluster.

**add_hosts.yaml**

-   This playbook contains the script to add the servers to the ODF cluster.

**add_osd.yaml**

-   This playbook contains the script to add the OSD disks.

**client_user.yaml**

-   This playbook contains the script to create a user with read only access to the cluster.

**copy_script.yaml**

-   This playbook contains the script to copy scrpits to administration node

**rbd.yaml**

-   This playbook contains the script to create rados block device in cluster.

**fs.yaml**

-   This playbook contains the script to create ceph fs.

**rgw.yaml**

-   This playbook contains the script to create Ceph Object Gateway.

### **Integration of external ODF with OpenShift Container Platform**

Prerequisites:

-   OpenShift Data Foundation operator is deployed in the Openshift container platform and dashboard is available.

Steps for integration:

-   Click Operators -->  Installed Operators to view all the installed operators.

    Ensure that the Project selected is openshift-storage.

-   Click OpenShift Data Foundation and then click Create StorageSystem.

-   Select Connect an external storage platform from the available options.

-   Select Red Hat Ceph Storage for Storage platform and click Next

-   Click on the Download Script link to download the python script for extracting Ceph cluster details.

    Execute the python script by providing the ceph cluster details. in the below example we are executing the script to extract the details from a ceph cluster for rbd data pool "odf-rbd"

    python3 ceph-external-cluster-details-exporter.py --rbd-data-pool-name odf-rbd

-   Upload the output in the Openshift container platform container dashboard and click Next.

-   After sucessful importing of the ceph details, required storage class are created.
