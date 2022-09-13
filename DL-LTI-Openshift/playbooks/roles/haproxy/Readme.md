**PROCEDURE FOR HAPROXY CONFIGURATION USING ANSIBLE PLAYBOOK**

**Description:-**

This script lets you deploy the HAProxy loadbalancer on three remote hosts along with the active-active configuration of keepalived service by assigning a Virtual IP (VIP) to all the three hosts in order to ensure High Availability.

**Version:-**

1.8.27 is the current version installed at the time of running ansible playbook

**License:-**

GPLv2 is the license for HAProxy

**Pre-requisite:-**

1. RHEL 8.5  [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-Synergy/Solution-Deployment/Host-Configuration.html#installer-machine "https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-synergy/solution-deployment/host-configuration.html#installer-machine") is essential to initiate the haproxy deployment process.
2. Execute the following commands in the Ansible Engine to download the repositories.

                      ' # cd /opt
                        # yum install -y git
                        # git clone  <https://github.hpe.com/Solutions/ISV-OpenShift.git> '

3. Generate and copy the ssh keys from ansible engine/installer machine to all the three HAProxy machines.
                       
                     ' # ssh-keygen   
                       # ssh-copy-id root@haproxy_machine_ip '

**Input File Update:-**

1. User has to update the input.yaml file in /opt/ISV-Openshit directory to  execute the HAProxy script.
2. User needs to update all the haproxy deployment related details in the input.yaml file which include :-

                      ' VIP: 172.28.*.*
                        VIP_Prefix: 24
                        haproxy_fqdn: haproxy.X.X.X
                      
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
                           fqdn: worker3.*.* '

3. User needs to update all the haproxy deployment related details in the hosts file which include :-

                      ' [kvm_nodes]
                        172.28.*.*
                        172.28.*.*
                        172.28.*.* '

**Playbook Execution:-**

To deploy three node haproxy service along with keepalived active-active configuration run the haproxy playbook with the below mentioned command                   

               ' # ansible-playbook -i hosts playbooks/haproxy.yml '

