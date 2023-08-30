**PROCEDURE FOR SQUID PROXY CONFIGURATION USING ANSIBLE PLAYBOOK**

**Description:-**

 This role installs and configure squid proxy on remote hosts(head_nodes). This proxy allows to speed up internet connection and save bandwidth

**Pre-requisite:-**

1. RHEL 8.6  [Installer machine](https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md "https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md") is essential to initiate the squid proxy deployment process.
2. Execute the following commands in the Ansible Engine to download the repositories.

                   '  # cd /opt

                      # yum install -y git

                      # git clone  <https://github.com/HewlettPackard/hpe-solutions-openshift.git> '

3. Generate and copy the ssh keys from ansible engine/installer machine to all the remote hosts.

                    ' # ssh-keygen 

                      # ssh-copy-id root@remote_host_ip '

4. Keepalived service should be installed on all remote hosts.

**NOTE: Initially for internet access corporate proxy should be configured on remote hosts to download the packages, after executing the script it will use squid proxy IP for internet access.** 

**Input File Update:-**

1. User has to update the input.yaml file in /opt/hpe-solutions-openshift/DL-LTI-Openshift/ directory to execute the squid proxy  script.
2. User needs to update all the squid proxy deployment related details in the input.yaml file which include:-
                      
                      ' common:
                          interface_name: bridge0.*
                          base_domain: XX.XX
                          app_domain: XX.XX.XX
                          customerforwarderdns_fqdn: resolver.hpecorp.net
                          solution_subnet_ip: 172.28.230.0/24
                          ansible_engine_ip: 172.28.*.* 

                        squid_proxy_IP: 172.28.*.*
                        corporate_proxy: 172.28.*.*
                        corporate_proxy_port: XX
                        squid_port: XX                                 #ex. 3128

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

3. User needs to update all the squid proxy deployment related details in the hosts file which include :-
                     
                      ' [kvm_nodes]
                        172.28.*.*
                        172.28.*.*
                        172.28.*.* '

**Playbook Execution:-**

To deploy squid proxy on remote host run the playbook with the below mentioned command                   

            ' # ansible-playbook -i hosts playbooks/squid_proxy.yml --ask-vault-pass'
