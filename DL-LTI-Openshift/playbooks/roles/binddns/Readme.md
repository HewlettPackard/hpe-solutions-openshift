**PROCEDURE FOR BIND DNS CONFIGURATION USING ANSIBLE PLAYBOOK**

**Description:-**

This script lets you deploy the BIND DNS with one master and two slave configuration on the remote host.

**Version:-**

9.11.36 is the current version of bind-dns installed at the time of running ansible playbook

**Pre-requisite:-**

1. RHEL 8.6  [Installer machine](https://github.hpe.com/Solutions/Openshift-Synergy-RA/blob/LTI-OCP-4.12/LTI-OCP/Readme.md "https://github.hpe.com/Solutions/Openshift-Synergy-RA/blob/LTI-OCP-4.12/LTI-OCP/Readme.md") is essential to initiate the binddns deployment process.
2. Execute the following commands in the Ansible Engine to download the repositories.

                   '  # cd /opt

                      # yum install -y git

                      # git clone  <https://github.hpe.com/Solutions/Openshift-Synergy-RA.git> '

3. Generate and copy the ssh keys from ansible engine/installer machine to all the three binddns machines.

                    ' # ssh-keygen 

                      # ssh-copy-id root@binddns_machine_ip '


**Input File Update:-**

1. User has to update the input.yaml file in /opt/Openshift-Synergy-RA/LTI-OCP/ directory to  execute the binddns script.
2. User needs to update all the binddns deployment related details in the input.yaml file which include:-
                      
                      ' common:
                          ifcfg_filename: ifcfg-bridge0.*
                          interface_name: bridge0.*
                          base_domain: XX.XX
                          reverse_zone: 230.28.172.in-addr.arpa
                          app_domain: XX.XX.XX  
                        
                        master_binddns: 172.28.*.*
                        slave1_binddns: 172.28.*.*
                        slave2_binddns: 172.28.*.*

                        ocp_bootstrap:
                         - name: bootstrap
                           ip: 172.28.*.*
                           fqdn: bootstrap.X.X.X
                        
                        ocp_masters:
                         - name: master1
                           ip: 172.28.*.*
                           fqdn: master1.X.X.X
                         - name: master2
                           ip: 172.28.*.*
                           fqdn: master2.X.X.X
                         - name: master3
                           ip: 172.28.*.*
                           fqdn: master3.X.X.X 

                        ocp_workers:
                         - name: worker1
                           ip: 172.28.*.*
                           fqdn: worker1.*.*.*
                         - name: worker2
                           ip: 172.28.*.*
                           fqdn: worker2.*.*.*
                         - name: worker3
                           ip: 172.28.*.*
                           fqdn: worker3.*.* 

                        dns_forwarder:
                         - ip: 
                         - ip:                     ' 

3. User needs to update all the binddns deployment related details in the hosts file which include :-
                     
                      ' [kvm_nodes]
                        172.28.*.*
                        172.28.*.*
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
                        slave2 ip=172.28.*.* hostname=headnode3 '



**Playbook Execution:-**

To deploy binddns service with active-passive configuration consisting one master and two slaves run the binddns playbook with the below mentioned command                   

            ' # ansible-playbook -i hosts playbooks/binddns.yml '



