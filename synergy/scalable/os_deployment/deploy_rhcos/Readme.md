######### Unattended Installation of Red Hat Enterprise Linux CoreOS (RHCOS) for non-esxi VM¿s and Bare metal server¿s ##############################################

Introduction 
	This repository contains the playbooks to configure RHEL 7.x server used to perform an unattended installation of Red Hat Enterprise Linux CoreOS (RHCOS) for non-esxi VMs and Bare metal servers.
	The playbooks deploy open source tools such as dnsmasq, Ipxe etc. to achive its objectives.

Prerequisites 
	A RHEL 7.x VM preferably or could be baremetal server with the following minimium configuration:
	- At least 200 GB disk space
	- Two (2) CPU cores 
	- 8 GB RAM. 
	- /var has at least 15GB disk space allocated while partitioning.
	- static ip on same network as the RHCOS server 
	- Internet access 
	- generate
	
	Disable Selinux 
	 sudo sed -i 's/enforcing/disabled/g' /etc/selinux/config /etc/selinux/config
    Reboot the RHEL machine 
	check selinux status using 
	  getenforce
		
	Ansible Engine is configure as mentioned in the deployment guide and Ansible version is 2.9.x

	Browse to following directory on the Ansible Engine 
   		cd BASE_DIR/os_deployment/deploy_rhcos/ 
	
	Note: Refer to Ansible Engine Installation Section in deployment guide to know the "BASE_DIR" path.
	
	Copy Openshift 4.x above install files to folder under preferably under /tmp/ eg. /tmp/image/
	
Update variable file 
	The variable file is located in BASE_DIR/os_deployment/deploy_rhcos/secrets.yml
	
	Note: Refer to Ansible Engine Installation Section in deployment guide to know the "BASE_DIR" path.
          
          Understanding the variables 

          	###Common Networking

		interface_name: eth0 # interface name of the interface with the statis IP address this can be obtained by running "ip a" on the centos server 
		# This is static IP address assigned to the above interface, Example: ansible_engine_ip: 192.168.2.161
		ansible_engine_ip: <ansible_engine_ip> 

		# base DNS domain of your enviroment, Example: base_domain: contoso.local
		base_domain: contoso.local
		
		app_domain: app.contoso.local # Openshift sub domain where all openshift services will be deployed 

		gateway: 192.168.42.254 # This network router IP address of the NAT device to used for internet access 
 
		dns_server: 192.168.42.252 # This network dns/nameserver server where all the DNS record reside for both base_domain and app_domain
		dhcp_range: 192.168.43.10,192.168.43.20,24h # This is dhcp range that  is to be used for the Openshift nodes and 24h duration of dhcp lease 
		net_mask: 255.255.240.0 # This network mask for openshift nodes 

		## openshift node network 
	
		master1_mac: 08:00:27:36:0A:01 # This is tha mac address of master node 1 using this mac this server will botup as a master node
		master1_ip: 192.168.43.11 # mac ip address to assigned to master node 1
		master2_mac: 08:00:27:36:0A:02 # This is tha mac address of master node 2 using this mac this server will botup as a master node
		master2_ip: 192.168.43.12 # mac ip address to assigned to master node 2
		master3_mac: 08:00:27:36:0A:03 # This is tha mac address of master node 3 using this mac this server will botup as a master node
		master3_ip: 192.168.43.13 # mac ip address to assigned to master node 3

		worker1_mac: 08:00:27:36:0A:04 # This is tha mac address of worker node 1 using this mac this server will botup as a worker node
		worker1_ip: 192.168.43.14 # mac ip address to assigned to worker node 1
		worker2_mac: 08:00:27:36:0A:05 # This is tha mac address of worker node 2 using this mac this server will botup as a worker node
		worker2_ip: 192.168.43.15 # mac ip address to assigned to worker node 2
		worker3_mac: 08:00:27:36:0A:06 # This is tha mac address of worker node 3 using this mac this server will botup as a worker node
		worker3_ip: 192.168.43.16 # mac ip address to assigned to worker node 3

		bootstrap_mac: 00:15:5D:8d:1B:18 # This is tha mac address of bootstrap node using this mac this server will botup as a bootstraping node
		bootstrap_ip: 192.168.43.10 # mac ip address to assigned to bootstrap node 

		# install media details
		image_location: /tmp/image/  # location of the relevant Openshift install files on local centos server 
		initramfs_name: rhcos-4.2.0-x86_64-installer-initramfs.img
		kernel_name: rhcos-4.2.0-x86_64-installer-kernel
		bios_uefi_name: rhcos-4.2.0-x86_64-metal-bios.raw.gz

After update the above varible run below ansible playbook
 - ansible-playbook -i hosts master.yml --ask-vault-pass

Test Setup with Mac address
		curl http://localhost:8080/ipxe?mac=08:00:27:36:0A:01
		
		curl http://192.168.42.200:8080/ignition?mac=08:00:27:36:0A:01

