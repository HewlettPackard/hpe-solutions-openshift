**PROCEDURE FOR  INSTALLATION OF RED HAT ENTERPRISE LINUX COREOS (RHCOS) FOR OCP KVM VMs USING ANSIBLE PLAYBOOK**

**Description:-**

  This playbook contains the tasks to configure RHEL 8.6 installer VM used to perform an unattended installation of Red Hat Enterprise Linux CoreOS (RHCOS) for OCP KVM VMs. The playbooks deploy open source tools such as dnsmasq, Ipxe etc. to achive its objectives.

**Pre-requisite:-**

1. RHEL 9.4  [Installer machine](https://github.hpe.com/Solutions/ISV-OpenShift/blob/develop/Readme.md "https://github.hpe.com/Solutions/ISV-OpenShift/blob/develop/Readme.md") is essential to initiate the installation of RHCOS.

2. Execute the following commands in the Ansible Engine to download the repositories.

                   '  # cd /opt

                      # yum install -y git

                      # git clone  <https://github.hpe.com/Solutions/ISV-OpenShift.git> '

3. Generate and copy the ssh keys from ansible engine/installer machine to rhel9 VM.

                    ' # ssh-keygen 

                      # ssh-copy-id root@rhel9_vm_ip '

4. Rhel 8.9 VM with atleast 200 GB disk space - Two (2) CPU cores - 8 GB RAM. - /var has at least 15GB disk space allocated while partitioning, internet connectivity and is subscribed with valid redhat credentials is required to execute this playbook.

**Input File Update:-**

1. User has to update the input.yaml file in /opt/ISV-Openshit directory to execute the IPXe script.
2. User needs to update all the IPXe deployment related details in the input.yaml file which include:-

                      ' servers:
                         - Host_Gateway: 172.28.*.*
                           Host_Netmask: 255.*.*.*

                        common:
                          base_domain: XX.XX
                          app_domain: XX.XX.XX

                        master_binddns: 172.28.*.*
                        slave1_binddns: 172.28.*.*
                        slave2_binddns: 172.28.*.*

                        ocp_masters:
                         - name: master1
                           ip: 172.28.*.*
                           mac_address:
                         - name: master2
                           ip: 172.28.*.*
                           mac_address:
                         - name: master3
                           ip: 172.28.*.*
                           mac_address:

                        ocp_workers:
                         - name: worker1
                           ip: 172.28.*.*
                           mac_address:
                         - name: worker2
                           ip: 172.28.*.*
                           mac_address:
                         - name: worker3
                           ip: 172.28.*.*
                           mac_address: 

                        #####################################################################
                        # Details of Ansible User Credentials required to set-up the iPXE

                        #Path to ISV-OpenShift-develop Directory; Example: /opt/ISV-OpenShift-develop(no trailing forwardslash required)
                        base_path: '/opt/ISV-OpenShift-develop'

                        #Is Environment Airgapped; ('yes' or 'no'):
                        is_environment_airgap: 'no'

                        ###Common Networking
                        # Interface Name of rhel9.4 VM: interface_name: eth0
                        interface_name: eth0

                        # dhcp range that is used for OCP nodes Example: dhcp_range: 192.168.42.204,192.168.42.210,24h
                        dhcp_range: 172.28.230.121,172.28.230.130

                        # install media details Example: image_location: "/tmp/image/"
                        image_location: /tmp/image/

                        # Example: initramfs_name: rhcos-live-initramfs.x86_64.img
                        initramfs_name: rhcos-live-initramfs.x86_64.img

                        # Example: kernel_name: rhcos-live-kernel-x86_64
                        kernel_name: rhcos-live-kernel-x86_64

                        # Example: bios_uefi_name: rhcos-live-rootfs.x86_64.img
                        bios_uefi_name: rhcos-live-rootfs.x86_64.img

                        rhel9_installer_IP: 172.28.*.* '

3. User needs to update all the IPXe deployment related details in the hosts file which include :-
                     
                      ' [rhel9_installerVM]
                        172.28.*.* '

**Playbook Execution:-**

After updating the above varible run below ansible playbook

            ' # ansible-playbook -i hosts playbooks/deploy_ipxe_ocp.yml --ask-vault-pass'

Test Setup with Mac address curl http://localhost:8080/ipxe?mac=08:00:27:36:0A:01

            ' # curl http://<rhel9_vm_ip>:8080/ignition?mac=08:00:27:36:0A:01 '


