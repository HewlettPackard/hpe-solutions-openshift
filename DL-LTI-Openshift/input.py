f = open("input.yaml","w");
print ("Name of the file:",f.name);

f.write("servers:");

print("Enter the Details for OS Deployment in the first head node server\n");

usrtext = input("Enter server serial number for the first head node server ( Example: 2M2210020X ) : " + "\n");
f.write("\n - Server_serial_number: " +usrtext);

usrtext = input("Enter ILO address for the first head node server ( Example: 192.28.201.5 ) : " + "\n");
f.write("\n   ILO_Address: " +usrtext);

usrtext = input("Enter ILO username for the first head node server ( Example: admin ) : " + "\n");
f.write("\n   ILO_Username: " +usrtext);

usrtext = input("Enter ILO password for the first head node server ( Example: Password ) : " + "\n");
f.write("\n   ILO_Password: " +usrtext);

usrtext = input("Enter Host FQDN for the first head node server ( Example: kvm1.xyz.local ): " + "\n");
f.write("\n   Hostname: " +usrtext);

usrtext = input("Enter Host Username for the first head node server ( Example: root ) : " + "\n");
f.write("\n   Host_Username: " +usrtext);

usrtext = input("Enter Host password for the first head node server ( Example: Password ) : " + "\n");
f.write("\n   Host_Password: " +usrtext);

usrtext = input("Enter HWADDR1 for the first head node server ( Example: 88:e9:a4:69:43:44 ) : " + "\n");
f.write("\n   HWADDR1: " +usrtext);

usrtext = input("Enter HWADDR2 for the first head node server ( Example: 88:e9:a4:69:43:45 ) : " + "\n");
f.write("\n   HWADDR2: " +usrtext);

usrtext = input("Enter Host OS Disk for the first head node server ( Example: sda ) : " + "\n");
f.write("\n   Host_OS_disk: " +usrtext);

usrtext = input("Enter Host Solution VLAN-ID for the first head node server ( Example: xxx ) : " + "\n");
f.write("\n   Host_VlanID: " +usrtext);

Host1_IP = input("Enter Host IP for the first head node server ( Example: 192.28.230.11 ) : " + "\n");
f.write("\n   Host_IP: " +Host1_IP);

usrtext = input("Enter Host Netmask for the first head node server ( Example: 255.255.255.0 ): " + "\n");
f.write("\n   Host_Netmask: " +usrtext);

usrtext = input("Enter Host Prefix for the first head node server ( Example: 24 ): " + "\n");
f.write("\n   Host_Prefix: " +usrtext);

usrtext = input("Enter Host Gateway for the first head node server ( Example: 192.28.230.254 ) : " + "\n");
f.write("\n   Host_Gateway: " +usrtext);

usrtext = input("Enter Host DNS for the first head node server ( Example: 192.28.201.200 ) : " + "\n");
f.write("\n   Host_DNS: " +usrtext);

usrtext = input("Enter Host Domain for the first head node server ( Example: xyz.local ) : " + "\n");
f.write("\n   Host_Domain: " +usrtext);

usrtext = input("Enter Corporate Proxy for the first head node server ( Example: proxy.xyz.companycorp.net ) : " + "\n");
f.write("\n   corporate_proxy: " +usrtext);

usrtext = input("Enter Corporate Proxy Port for the first head node server ( Example: 8080 ) : " + "\n");
f.write("\n   corporate_proxy_port: " +usrtext);


print("Enter the Details for OS Deployment in the second head node server\n");

usrtext = input("Enter server serial number for the second head node server ( Example: 2M2210020X ) : " + "\n");
f.write("\n\n - Server_serial_number: " +usrtext);

usrtext = input("Enter ILO address for the second head node server ( Example: 192.28.201.6 ) : " + "\n");
f.write("\n   ILO_Address: " +usrtext);

usrtext = input("Enter ILO username for the second head node server ( Example: admin ) : " + "\n");
f.write("\n   ILO_Username: " +usrtext);

usrtext = input("Enter ILO password for the second head node server ( Example: Password ) : " + "\n");
f.write("\n   ILO_Password: " +usrtext);

usrtext = input("Enter Host FQDN for the second head node server ( Example: kvm2.xyz.local ) : " + "\n");
f.write("\n   Hostname: " +usrtext);

usrtext = input("Enter Host Username for the second head node server ( Example: root ) : " + "\n");
f.write("\n   Host_Username: " +usrtext);

usrtext = input("Enter Host password for the second head node server ( Example: Password ) : " + "\n");
f.write("\n   Host_Password: " +usrtext);

usrtext = input("Enter HWADDR1 for the second head node server ( Example: 88:e9:a4:69:43:44 ) : " + "\n");
f.write("\n   HWADDR1: " +usrtext);

usrtext = input("Enter HWADDR2 for the second head node server ( Example: 88:e9:a4:69:43:45 ) : " + "\n");
f.write("\n   HWADDR2: " +usrtext);

usrtext = input("Enter Host OS Disk for the second head node server ( Example: sda ) : " + "\n");
f.write("\n   Host_OS_disk: " +usrtext);

usrtext = input("Enter Host Solution VLAN-ID for the second head node server ( Example: xyz ) : " + "\n");
f.write("\n   Host_VlanID: " +usrtext);

Host2_IP = input("Enter Host IP for the second head node server ( Example: 192.28.230.12 ) : " + "\n");
f.write("\n   Host_IP: " +Host2_IP);

usrtext = input("Enter Host Netmask for the second head node server ( Example: 255.255.255.0 ) : " + "\n");
f.write("\n   Host_Netmask: " +usrtext);

usrtext = input("Enter Host Prefix for the second head node server ( Example: 24 ) : " + "\n");
f.write("\n   Host_Prefix: " +usrtext);

usrtext = input("Enter Host Gateway for the second head node server ( Example: 192.28.230.254 ) : " + "\n");
f.write("\n   Host_Gateway: " +usrtext);

usrtext = input("Enter Host DNS for the second head node server ( Example: 192.28.201.200 ) : " + "\n");
f.write("\n   Host_DNS: " +usrtext);

usrtext = input("Enter Host Domain for the second head node server ( Example: xyz.local ) : " + "\n");
f.write("\n   Host_Domain: " +usrtext);

usrtext = input("Enter Corporate Proxy for the second head node server ( Example: proxy.xyz.companycorp.net ) : " + "\n");
f.write("\n   corporate_proxy: " +usrtext);

usrtext = input("Enter Corporate Proxy Port for the second head node server ( Example: 8080 ) : " + "\n");
f.write("\n   corporate_proxy_port: " +usrtext);


print("Enter the Details for OS Deployment in the third head node server\n");

usrtext = input("Enter server serial number for the third head node server ( Example: 2M205107TX ) : " + "\n");
f.write("\n\n - Server_serial_number: " +usrtext);

usrtext = input("Enter ILO address for the third head node server ( Example: 192.28.201.9 ) : " + "\n");
f.write("\n   ILO_Address: " +usrtext);

usrtext = input("Enter ILO username for the third head node server ( Example: admin ) : " + "\n");
f.write("\n   ILO_Username: " +usrtext);

usrtext = input("Enter ILO password for the third head node server ( Example: Password ) : " + "\n");
f.write("\n   ILO_Password: " +usrtext);

usrtext = input("Enter Host FQDN for the third head node server ( Example: kvm3.xyz.local ) : " + "\n");
f.write("\n   Hostname: " +usrtext);

usrtext = input("Enter Host Username for the third head node server ( Example: root ) : " + "\n");
f.write("\n   Host_Username: " +usrtext);

usrtext = input("Enter Host password for the third head node server ( Example: Password ) : " + "\n");
f.write("\n   Host_Password: " +usrtext);

usrtext = input("Enter HWADDR1 for the third head node server ( Example: XX:XX:XX:XX:XX ) : " + "\n");
f.write("\n   HWADDR1: " +usrtext);

usrtext = input("Enter HWADDR2 for the third head node server ( Example: XX:XX:XX:XX:XX ) : " + "\n");
f.write("\n   HWADDR2: " +usrtext);

usrtext = input("Enter Host OS Disk for the third head node server ( Example: sda ) : " + "\n");
f.write("\n   Host_OS_disk: " +usrtext);

usrtext = input("Enter Host Solution VLAN-ID for the third head node server ( Example: xxx ) : " + "\n");
f.write("\n   Host_VlanID: " +usrtext);

Host3_IP = input("Enter Host IP for the third head node server ( Example: 192.28.230.15 ) : " + "\n");
f.write("\n   Host_IP: " +Host3_IP);

usrtext = input("Enter Host Netmask for the third head node server ( Example: 255.255.255.0 ) : " + "\n");
f.write("\n   Host_Netmask: " +usrtext);

usrtext = input("Enter Host Prefix for the third head node server ( Example: 24 ) : " + "\n");
f.write("\n   Host_Prefix: " +usrtext);

usrtext = input("Enter Host Gateway for the third head node server ( Example: 192.28.230.254 ) : " + "\n");
f.write("\n   Host_Gateway: " +usrtext);

usrtext = input("Enter Host DNS for the third head node server ( Example: 192.28.201.200 ) : " + "\n");
f.write("\n   Host_DNS: " +usrtext);

usrtext = input("Enter Host Domain for the third head node server ( Example: xyz.local ) : " + "\n");
f.write("\n   Host_Domain: " +usrtext);

usrtext = input("Enter Corporate Proxy for the third head node server ( Example: proxy.xyz.companycorp.net ) : " + "\n");
f.write("\n   corporate_proxy: " +usrtext);

usrtext = input("Enter Corporate Proxy Port for the third head node server ( Example: 8080 ) : " + "\n");
f.write("\n   corporate_proxy_port: " +usrtext);


f.write("\n\nconfig:");

usrtext = input("Enter HTTP_server_base_url with installer IP ( Example: http://InstallerIP/ ): " + "\n");
f.write("\n   HTTP_server_base_url: " +usrtext);

usrtext = input("Enter HTTP_file_path ( Download the Rhel 8.8 OS image and store it in /usr/share/nginx/html/ location of the installer machine ) ( Example: /usr/share/nginx/html/ ): " + "\n");
f.write("\n   HTTP_file_path: " +usrtext);

usrtext = input("Enter Operating System type ( Example: rhel8 ): " + "\n");
f.write("\n   OS_type: " +usrtext);

usrtext = input("Enter Operating System Image name ( Example: rhel-8.8-x86_64-dvd.iso )  : " + "\n");
f.write("\n   OS_image_name: " +usrtext);

usrtext = input("Enter Base Kickstart file path ( Example: /opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/rhel8_os_deployment/tasks/ks_rhel8.cfg  ) : " + "\n");
f.write("\n   base_kickstart_filepath: " +usrtext);


print("Enter RedHat Subscription Details \n");

usrtext = input("Enter Valid Redhat Subscription Username : " + "\n");
f.write("\n\nrhsub_username: " +usrtext);

usrtext = input("Enter Valid  Redhat Subscription Password : " + "\n");
f.write("\nrhsub_password: " +usrtext);

usrtext = input("Enter Pool ID for Redhat OpenShift Container Platform : " + "\n");
f.write("\npool_id: " +usrtext);


print("Enter common details \n");

f.write("\n\ncommon:");

usrtext = input("Enter head node OS network interface filename ( Example: ifcfg-bridge0.xxx ) : " + "\n");
f.write("\n   ifcfg_filename: " +usrtext);

usrtext = input("Enter head node OS network interface name ( Example: bridge0.xxx ) : " + "\n");
f.write("\n   interface_name: " +usrtext);

usrtext = input("Enter DNS base domain ( Example: xyz.local ) : " + "\n");
f.write("\n   base_domain: " +usrtext);

usrtext = input("Enter DNS reverse zone ( Example: 230.28.192.in-addr.arpa ) : " + "\n");
f.write("\n   reverse_zone: " +usrtext);

usrtext = input("Enter app domain ( Example: ocp.xyz.local ) : " + "\n");
f.write("\n   app_domain: " +usrtext);

usrtext = input("Enter the customer forwarder DNS fqdn ( Example: resolver.companycorp.net ) : " + "\n");
f.write("\n   customerforwarderdns_fqdn: " +usrtext);

usrtext = input("Enter the solution subnet ip with subnet mask ( Example: 192.28.230.0/24 ) : " + "\n");
f.write("\n   solution_subnet_ip: " +usrtext);

ansible_engine_ip = input("Enter worker node ip used as installer ( Example: 192.28.230.16 ) : " + "\n");
f.write("\n   ansible_engine_ip: " +ansible_engine_ip);


print("Enter NTP Details \n");

usrtext = input("Enter Jumpstation Solution Network IP ( Example: 192.28.201.200 ): " + "\n");
f.write("\n\nsolution_network_ip: " +usrtext);

usrtext = input("Enter Company Corporate NTP IP : " + "\n");
f.write("\ncorporate_ntp: " +usrtext);


print("Enter BindDNS details \n");

master_binddns = input("Enter Master DNS IP of Bind DNS ( Example: 192.28.230.11 ): " + "\n");
f.write("\n\nmaster_binddns: " +master_binddns);

master_hostname = input("Enter Master DNS hostname of Bind DNS ( Example: kvm1 ): " + "\n");

slave1_binddns = input("Enter Slave1 DNS IP of Bind DNS ( Example: 192.28.230.12 ): " + "\n");
f.write("\nslave1_binddns: " +slave1_binddns);

slave1_hostname = input("Enter Slave1 DNS hostname of Bind DNS ( Example: kvm2 ): " + "\n");

slave2_binddns = input("Enter Slave2 DNS IP of Bind DNS ( Example: 192.28.230.13 ): " + "\n");
f.write("\nslave2_binddns: " +slave2_binddns);

slave2_hostname = input("Enter Slave2 DNS hostname of Bind DNS ( Example: kvm3 ): " + "\n");


print("Enter Haproxy details \n");

usrtext = input("Enter Keepalived Virtual IP ( Example: 192.28.230.25 ): " + "\n");
f.write("\n\nVIP: " +usrtext);

usrtext = input("Enter Netmask/Prefix of the Keepalived Virtual IP ( Example: 24 ): " + "\n");
f.write("\nVIP_Prefix: " +usrtext);

usrtext = input("Enter Haproxy Fqdn ( Example: haproxy.ocp.xyz.local ): " + "\n");
f.write("\nhaproxy_fqdn: " +usrtext);


print("Enter Squid Proxy details \n");

usrtext = input("Enter squid proxy IP ( Example: 192.28.230.19 ): " + "\n");
f.write("\n\nsquid_proxy_IP: " +usrtext);

usrtext = input("Enter corporate proxy ( Example: proxy.xyz.companycorp.net ): " + "\n");
f.write("\n\ncorporate_proxy: " +usrtext);

usrtext = input("Enter corporate proxy port no. ( Example: 8080 ): " + "\n");
f.write("\ncorporate_proxy_port: " +usrtext);

usrtext = input("Enter squid proxy port no. ( Example: 3128 ): " + "\n");
f.write("\nsquid_port: " +usrtext);


print("Enter the OCP Bootstrap node details\n");

f.write("\n\nocp_bootstrap:");

usrtext = input("Enter the hostname of the bootstrap node ( Example: bootstrap ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the bootstrap node ( Example: 192.28.230.21 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the bootstrap node ( Example: boot.ocp.xyz.local ) : " + "\n");
f.write("\n   fqdn: " +usrtext);

usrtext = input("Provide any mac_address to be assigned to bootstrap node as shown in the example ( Example: 00:15:5D:8d:1B:18 ) : " + "\n");
f.write("\n   mac_address: " +usrtext);


print("Enter the OCP Master nodes details\n");

f.write("\n\nocp_masters:");

usrtext = input("Enter the hostname of the first master node ( Example: master1 ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the first master node ( Example: 192.28.230.22 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the first master node ( Example: master1.ocp.xyz.local ): " + "\n");
f.write("\n   fqdn: " +usrtext);

usrtext = input("Provide any mac_address to be assigned to first master node as shown in the example ( Example:08:00:27:36:0A:01 ) : " + "\n");
f.write("\n   mac_address: " +usrtext);

usrtext = input("Enter the hostname of the second master node ( Example: master2 ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the second master node ( Example: 192.28.230.23 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the second master node ( Example: master2.ocp.xyz.local ): " + "\n");
f.write("\n   fqdn: " +usrtext);

usrtext = input("Provide any mac_address to be assigned to second master node as shown in the example ( Example: 08:00:27:36:0A:02 ) : " + "\n");
f.write("\n   mac_address: " +usrtext);

usrtext = input("Enter the hostname of the third master node ( Example: master3 ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the third master node ( Example: 192.28.230.24 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the third master node ( Example: master3.ocp.xyz.local ) : " + "\n");
f.write("\n   fqdn: " +usrtext);

usrtext = input("Provide any mac_address to be assigned to third master node as shown in the example ( Example: 08:00:27:36:0A:03 ) : " + "\n");
f.write("\n   mac_address: " +usrtext);


print("Enter the OCP Rhel Worker nodes details\n");

f.write("\n\nocp_workers:");

usrtext = input("Enter the hostname of the first worker node ( Example: worker1 ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the first worker node ( Example: 192.28.230.26 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the first worker node ( Example: worker1.ocp.xyz.local ) : " + "\n");
f.write("\n   fqdn: " +usrtext);

f.write("\n   mac_address:");

usrtext = input("Enter the hostname of the second worker node ( Example: worker2 ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the second worker node ( Example: 192.28.230.27 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the second worker node ( Example:  worker2.ocp.xyz.local ) : " + "\n");
f.write("\n   fqdn: " +usrtext);

f.write("\n   mac_address:");

usrtext = input("Enter the hostname of the third worker node ( Example: worker3 ) : " + "\n");
f.write("\n - name: " +usrtext);

usrtext = input("Enter IP of the third worker node ( Example: 192.28.230.28 ) : " + "\n");
f.write("\n   ip: " +usrtext);

usrtext = input("Enter FQDN of the third worker node ( Example: worker3.ocp.xyz.local ) : " + "\n");
f.write("\n   fqdn: " +usrtext);

f.write("\n   mac_address:");


print("Enter Upstream DNS Forwarder Details\n");

f.write("\n\ndns_forwarder:");

usrtext = input("Enter the customer's first upstream DNS forwarder ip : " + "\n");
f.write("\n - ip: " +usrtext);

usrtext = input("Enter the customer's second upstream DNS forwarder ip : " + "\n");
f.write("\n - ip: " +usrtext);

usrtext = input("Enter the ocp version (Example: 4.14) : " + "\n");
f.write("\n\nocp_version: " +usrtext);

print("Enter redhat pull secret & Installer machine public key \n");

usrtext = input("Enter Redhat pull secret in single quotes (Login to the RedHat Portal and get the pull secret): " + "\n");
f.write("\n\npull_secret: " +usrtext);

usrtext = input("Enter the Installer machine public key in single quotes (Generate using 'ssh-keygen' and provide the pub key): " + "\n");
f.write("\nid_rsa_pub: " +usrtext);


print("Enter Path to DL-LTI-Openshift Directory \n");

usrtext = input("Enter base path to ISV-OpenShift Directory in single quotes ( Example: '/opt/hpe-solutions-openshift/DL-LTI-Openshift' ): " + "\n");
f.write("\n\nbase_path: " +usrtext);

f.write("\n\nis_environment_airgap: 'no'");

f.write("\n\ndns_server: " +master_binddns+","+slave1_binddns+","+slave2_binddns);

f.write("interface_name: eth0")

print("Enter dhcp range that is used for OCP nodes\n");

usrtext = input("Enter comma separated values of dhcp range that is used for OCP nodes ( Example: 192.28.230.10,192.28.230.24 ) : " + "\n");
f.write("\n\ndhcp_range: " +usrtext);

f.write("\n\nimage_location: /tmp/image/");

f.write("\n\ninitramfs_name: rhcos-live-initramfs.x86_64.img");

f.write("\n\nkernel_name: rhcos-live-kernel-x86_64");

f.write("\n\nbios_uefi_name: rhcos-live-rootfs.x86_64.img");

print("Enter the OCP KVM VM's Master & Bootstrap details\n");

usrtext = input("Enter the no. of CPU's for the OCP KVM VM's ( Example: 8 ) : " + "\n");
f.write("\n\nvm_cpu: " +usrtext);

usrtext = input("Enter the memory in MB for the OCP KVM VM's ( Example: 32000 ): " + "\n");
f.write("\nvm_mem: " +usrtext);

usrtext = input("Enter the disk size in GB for the OCP KVM VM's ( Example: 250 ): " + "\n");
f.write("\nvm_size: " +usrtext);


print("Enter the Rhel 8.x Installer details to add rhel worker to OCP cluster\n");

usrtext = input("Enter the hostname of the rhel8 installer to add rhel worker to OCP cluster ( Example: installer.ocp.xyz.local ) : " + "\n");
f.write("\n\nrhel8_installer_hostname: " +usrtext);

rhel8_installer_IP = input("Enter the IP of the rhel8 installer to add rhel worker to OCP cluster ( Example: 192.28.230.29 ) : " + "\n");
f.write("\nrhel8_installer_IP: " +rhel8_installer_IP);

usrtext = input("Enter the Password of the rhel8 installer to add rhel worker to OCP cluster ( Example: Password ) : " + "\n");
f.write("\nrhel8_installer_password: " +usrtext);



f.close();




f = open("hosts","w");
print ("Name of the file:",f.name);

f.write("[kvm_nodes]");
f.write("\n" +Host1_IP);
f.write("\n" +Host2_IP);
f.write("\n" +Host3_IP);


f.write("\n\n[ansible_host]");
f.write("\n" + ansible_engine_ip);


f.write("\n\n[rhel8_installerVM]");
f.write("\n" +rhel8_installer_IP);


f.write("\n\n[binddns_masters]");
f.write("\n" +master_binddns);


f.write("\n\n[binddns_slaves]");
f.write("\n" +slave1_binddns);
f.write("\n" +slave2_binddns);


f.write("\n\n[masters_info]");
f.write("\nmaster1 ip=" +master_binddns+ " hostname=" +master_hostname);


f.write("\n\n[slaves_info]");
f.write("\nslave1 ip=" +slave1_binddns+ " hostname=" +slave1_hostname);
f.write("\nslave2 ip=" +slave2_binddns+ " hostname=" +slave2_hostname);




f.close();








