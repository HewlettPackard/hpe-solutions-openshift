# ESXI Deployment

This folder consists of scripts to deploy ESXI over bare-metal servers using iLO virtual media.

## Prerequisites 
- RHEL 7.6 Installer machine with the following configurations is essential to initiate the OS deployment process.
   1. At least 200 GB disk space (especially in the "/" partition), 4 CPU cores and 8GB RAM.
   2. Registered to Red Hat Subscription Manager with a valid repository.
   3. 1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.
   4. Python 3.6 or above is present and latest version associated pip is present.
   5. Ansible 2.9 should be installed 
   6. ESXI ISO image is present in the HTTP file path within the installer machine.

- DHCP service exisits on the management and production network to provides IP address leases on the corresponding network.

- HPE Synergy servers with server profiles configurations for operating system is listed as follows: 

     ESXi hosts
     * 1 network interface for the production network 
     * 1 local drive to be used as the boot device
     * Boot mode is set to UEFI
     * Boot order - Hard disk
     * Secure Boot - disabled

## Installation

1. Enable Python3 and Ansible environment as mentioned in "installer machine" section of deployment guide.

2. Execute the following command on the installer VM to point to the esxi deployment directory.
   ```
   # cd BASE_DIR/deploy_esxi
   ```
Note:
 * ```BASE_DIR``` is defined in "installer machine" section in deployment guide. 

3. Installing requirements
   ```
   # sudo sh setup.sh 
   ```

4. Edit input files using following command.
   ```
   # sudo ansible-vault edit input_files/<input_file_name>.yml
   # Enter the password
   ```
Note: The default password for the Ansible vault file is ```changeme```

5. Update the input_files/config.yml file with the details of web server and operating system to be installed.

   Example values for the input configuration is as follows
   ```
   config:
     HTTP_server_base_url: http://10.0.x.x/
     HTTP_file_path: /usr/share/nginx/html/
     OS_type: esxi67
     OS_image_name: <ISO_image_name>.iso
     base_kickstart_filepath: kickstart_files/ks_esxi67.cfg

   ```
Note: Acceptable values for "OS_type" variable is "esxi67" for ESXi 6.7.


6. Update the input_files/server_details.yml file with the details of servers on which esxi is to be installed.

   Example values for the input configuration for deploying ESXi 6.7 is as follows
   ```
   servers:
      -  Server_serial_number: MXxxxxxDP
         ILO_Address: 10.0.x.x
         ILO_Username: username
         ILO_Password: password
         Hostname: vsphere01.twentynet.local
         Host_IP: 20.x.x.x
         Host_Username: root
         Host_Password: Password
         Host_Netmask: 255.x.x.x
         Host_Gateway: 20.x.x.x
         Host_DNS: 20.x.x.x
      - Server_serial_number: MXxxxxxDQ
         ILO_Address: 10.0.x.x
         ILO_Username: username
         ILO_Password: password
         Hostname: vsphere02.twentynet.local
         Host_IP: 20.0.x.x
         Host_Username: root
         Host_Password: Password
         Host_Netmask: 255.x.x.x
         Host_Gateway: 20.x.x.x
         Host_DNS: 20.x.x.x
   ```
Note:
* It is recommended to provide a complex password for the "Host_Password" variable
* Provide administrative priviliged iLO account username and password

7. Running playbook to deploy ESXI.
   ```
   # ansible-playbook deploy.yml --ask-vault-pass
   ```
Note: 
* In the process of esxi deployment, ISO image contents will be forcefully moved to inside ```BASE_DIR/deploy_esxi/files``` folder and it needs to be deleted in case of space issues.
* ```BASE_DIR``` is defined in "installer machine" section in deployment guide

Note
1. Generic settings done as part of kickstart file for ESXi are as follows. It is recommended that the user reviews and modifies the kickstart file (kickstart_files/ks_esxi67.cfg) to suit their requirements.
   * Accept EULA
   * clearpart --alldrives --overwritevmfs
   * install --firstdisk --overwritevmfs
   * %firstboot --interpreter=busybox
   * 1 standard switch vswitch0 is created with uplinks vmnic0 and vmnic1. it is assigned with the Host_IP defined in the input_files/server_details.yml input file.
   * NIC teaming is performed with vmnic0 being the active uplink and vmnic1 being the standby uplink.
   * NIC failover policy is set to --failback yes --failure-detection link --load-balancing mac --notify-switches yes.
