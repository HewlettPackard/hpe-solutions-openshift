# OS Deployment

This folder consists of scripts to deploy RHEL operating system over bare-metal servers using virtual media.

## Prerequisites for installer machine
- Centos 7 Installer machine with the following configurations is essential to initiate the RHEL_OS deployment process.
    1. At least 500 GB disk space (in the "/" partition), 4 CPU cores and 8GB RAM.
    2. 1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.
    4. Python 3.6 or above should be  present and latest version associated pip should be present.
    5. Ansible 2.9 should be installed.
    6. Ensure that SELinux status is disabled on the installer machine.
   
NOTE:   
   * Intention of the script is to deploy RHEL on nodes which will be used as OCP worker nodes. IPXE script needs to be executed before to bring up OCP cluster.
   * OS ISO image should be present in the /var/lib/matchbox/assets/ folder on the installer machine. matchbox installation is handled in the IPXE script.
   
   
- Configuration required on HPE DL servers  for operating system installation is listed as follows: 
     RHEL Worker nodes 
     * 2 network interfaces for the production network 
     * 1 local drive to be used as the boot device
     * Boot mode is set to UEFI
     * Boot order - Hard disk
     * Secure Boot - disabled

- For each of the servers, iLO account with administrative privileges is required to ensure successful deployment of the operating system.

## Installation

1. Enable Python3 and Ansible Environment as mentioned in "Installer machine" section of deployment guide.
2. Setup the installer machine to configure the  development tools and other python packages required for RHEL OS installation.Navigate to the directory, $BASE_DIR/os_deployment/rhel_os_deployment and run the below command. 
   ```
   # sh setup.sh

   ```
   Note :
   * The packages which are required as a part of this os_installation are present in requirements.txt file and is getting installed during the execution of setup.sh script.

3. Open input.yaml file with the following command and add the details of web server , operating system, redhat-subscription details , ocp version details.

      Command to edit input.yaml

      ```
      # ansible-vault edit input.yaml
      ```
      NOTE: 
      * The default password for input file is **changeme**
	  	  	  
      Example values for the input configuration is as follows
	  
      ```
		servers:
		 - Server_serial_number  : MXQ01201G8
		   ILO_Address           : 10.0.40.61
		   ILO_Username          : <username_of_the_admin_privilege_account>
		   ILO_Password          : <password_of_the_admin_privilege_account>
		   Hostname              : worker1.*****.local
		   Host_Username         : root
		   Host_Password         : <hashed_value_of_complex_password>
         Bonding_Interface1    : <interface to be bonded>
         Bonding_Interface2    : <interface to be bonded>
		   Host_IP               : 20.0.**.**
		   Host_Netmask          : 255.**.**.**
		   Host_Gateway          : 20.**.**.**
		   Host_DNS              : 20.**.**.**
		     
		   
		config:
		   HTTP_server_base_url: http://20.0.**.**:8080/assets/      #Installer machine ip address
		   HTTP_file_path: /var/lib/matchbox/assets/
		   OS_type: rhel7
		   OS_image_name: rhel-server-7.8-x86_64-dvd.iso
		   base_kickstart_filepath: $BASE_DIR/os_deployment/rhel_os_deployment/ks_rhel7.cfg


		ocp_version: 4.X    ## OCP version 

		rhsub_username: <redhat subscription username>  
		rhsub_password: <redhat subscription password>
		

		
      ```
      Note: 

      * $BASE_DIR = /opt/hpe/hpe-solutions-openshift/DL/scalable
     
      * Acceptable values for "OS_type" variable is "rhel7" .(kindly don't change this value)
         
      * It is essential to provide a hashed password for the “Host_Password” field in the input file in case of RHEL installation. Execute the following command with the choice of password to generate an MD5 hash and provide its output to the “Host_Password” field. Execute the following command to generate MD5 hashed password. 
	  
      ```
      # openssl passwd -1 <Password>

      e.g value.
      # openssl passwd -1 'Password!234'
      # $1$1xwZIyR8$VLPnHbGmhqnvSYN7eYWA/0
      ```
      * User must have the "Red Hat Advanced Cluster Management for Kubernetes and OpenShift Container Platform" subscription to attach the correct pool_id to the RHEL worker nodes.
      
     

4. Executing the playbook to deploy operating system.
   ```
   # ansible-playbook rhel_deploy.yaml --ask-vault-pass
   ```

Note
1. Generic settings done as part of kickstart file for RHEL are as follows. It is recommended that the user reviews and modifies the kickstart files(kickstart_files/ks_rhel7.cfg and ) to suit their requirements.
   * Graphical installation
   * Language - en_US
   * Keyboard & layout - US
   * System service chronyd disabled
   * timezone - Asia/Kolkata
   * Bootloader config
       * bootloader location=mbr
       * clearpart --all --initlabel
       * ignoredisk --only-use=sda
       * part swap --asprimary --fstype="swap" --size=77263
       * part /boot --fstype xfs --size=300
       * part /boot/efi --fstype="vfat" --size=1024
       * part / --size=500 --grow
	   * part /var --fstype ext4 --size=15360
	   * part /usr/local/bin --size=1024
   * NIC teaming is performed with devices provided in 'Bonding_interface1' and 'Bonding_interface2'. It is assigned with the Host_IP defined in the input_files/server_details.json input file.
   
   
   
# Preparing RHEL_Host for addition to OCP cluster

1. Edit the host file with the RHEL hosts ip address or fqdn.
2. copy the ssh-keys to the hosts to be added using the below command.

   ```

   ssh-copy-id <hostname>
   
   ```
3. Execute the playbook using the following command.
  ```
    # ansible-playbook -i hosts prepare_host.yml --ask-vault-pass 

  ```   

