**Expansion/ Adding of nodes into the existing cluster using Ansible playbook**

The expansion playbooks has to executed from the administration server of the ceph cluster.

1.  Execute the following commands in the Ansible Engine to download the repositories.

	    'mkdir /opt
		 cd /opt
		 yum install -y git
		 git clone <https://github.hpe.com/Solutions1/GreenLake-for-OpenShift.git>'

2.  Setup the installer machine to configure the nginx, development tools and other python packages required for LTI installation. Navigate to the directory,  /opt/GreenLake-for-OpenShift/external-ceph_deployment/ and run the below command.

         'sh setup.sh'

3.  As part of setup.sh script it will create nginx service, so user must download and copy Rhel DVD ISO to **/usr/share/nginx/html/**

4.  Minimum Storage requirement for external odf cluster servers

       |      **Servers**       | **Host OS disk** | **Storage Pool disk** |
       |------------------------|------------------|-----------------------|
       | Server 1               | 2 x 1.6 TB       | 8 x 1.6 TB            |
       | Server 2               | 2 x 1.6 TB       | 8 x 1.6 TB            |
       | Server 3               | 2 x 1.6 TB       | 8 x 1.6 TB            |
	
       Host OS disk – raid1 for redundancy


								
   **Playbook Execution:-**

					' # ansible-playbook site.yml --ask-vault-pass'

### *Note* If you do not have proxy or VLAN based setup leave these variables empty as shown below
	servers:
	  Host_VlanID:                          
	  corporate_proxy:                        
	  corporate_proxy_port:
	  
### **Input files**

We can provide the input variables in below method

**Input.yaml: Manually editing input file**

Go to the directory $BASE_DIR(**/opt/GreenLake-for-OpenShift/external-ceph_deployment/ceph-cluster-expansion**), here we will have input.yaml and hosts files.

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
					Hostname: ceph04.XX.XX                #ex. ceph04.isv.local
					Host_Username: root
					Host_Password: ******
					HWADDR1: XX:XX:XX:XX:XX:XX             #mac address for server physical interface1 
					HWADDR2: XX:XX:XX:XX:XX:XX             #mac address for server physical interface2 
					Host_OS_disk: sda
					Host_VlanID: 230                         # VLAN ID ex. 230
					Host_IP: 172.28.*.*
					Host_Netmask: 255.*.*.*
					Host_Prefix: XX                          #ex. 8,24,32
					Host_Gateway: 172.28.*.*
					Host_DNS: 172.28.*.*
					Host_Domain: XX.XX                       #ex. isv.local
					corporate_proxy: 172.28.*.*              #provide corporate proxy, ex. proxy.houston.company.net
					corporate_proxy_port: XX                 #corporate proxy port no, ex. 8080

					config:
					HTTP_server_base_url: http://172.28.*.*/  #Installer IP address
					HTTP_file_path: /usr/share/nginx/html/    
					OS_type: rhel
					OS_image_name: rhel-9.4-x86_64-dvd.iso
					base_kickstart_filepath: /opt/GreenLake-for-OpenShift/external-ceph_deployment/playbooks/roles/rhel9_os_deployment/tasks/ks_rhel9.cfg'


2. The installation user should review hosts file (located on the installer VM at $BASE_DIR/hosts) and ensure that the information within the file accurately reflects the information in their environment.

Use an editor such as vi or nano to edit the inventory file.

```
vi $BASE_DIR/hosts

```
                           [add]
                           ceph04.isv.local
                           ceph05.isv.local
                           ceph06.isv.local

                           [admin]
                           ceph01.isv.local

in the above sample file, ceph01 is the ceph manger nodes and ceph04, ceph05, ceph06 are the machines to be added to cluster.

### **Playbook execution** 

1.  Run the below command to execute the Lite Touch Installation.

			'ansible-playbook -i hosts site.yml --ask-vault-pass'

In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:

		     '- import_playbook: playbooks/rhel9_os_deployment.yaml
                          - import_playbook: playbooks/ssh_add.yaml
                          - import_playbook: playbooks/subscriptions.yaml
                          - import_playbook: playbooks/ntp.yaml
                          - import_playbook: playbooks/user_req.yaml
                          - import_playbook: playbooks/add_hosts.yaml'


### **Playbook description**

**site.yaml**

-   This playbook contains the script to deploy external Openshift Data Foundation(ODF) platform starting from the OS_deployment until cluster up.

**rhel9_os_deployment.yaml**

-   This playbook contains the scripts to deploy rhel9.4 OS on baremetal servers.

**ssh_add.yaml**

-   This playbook contains the script to create and copy the ssh public key from installer machine to other nodes in the cluster.

**subscriptions.yaml**

-   This playbook contains the script to RHEL subscription and enables the required repositories required for the building the ceph cluster.

**ntp.yaml**

-   This playbook contains the script to create NTP setup on head nodes to make sure time synchronization.

**user_req.yaml**

-   This playbook contains the script to create a user on all nodes and copy the required ssh keys to newly added nodes.

**add_hosts.yaml**

-   This playbook contains the script to add the servers to the ODF cluster.

