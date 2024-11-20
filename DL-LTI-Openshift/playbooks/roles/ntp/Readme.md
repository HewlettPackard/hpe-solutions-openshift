**PROCEDURE FOR NTP CONFIGURATION USING ANSIBLE PLAYBOOK**

**Description:-**

This script installs chrony on remote hosts which helps to ensure clocks are synchronised across the resulting cluster which is a requirement for the cluster to function

**Pre-requisite:-**

1. RHEL 9.4  [Installer machine](https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md "https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md") is essential to initiate the NTP deployment process.
2. Execute the following commands in the Ansible Engine to download the repositories.

                   '  # cd /opt

                      # yum install -y git

                      # git clone  <https://github.com/HewlettPackard/hpe-solutions-openshift.git> '

3. Generate and copy the ssh keys from ansible engine/installer machine to all the remote hosts.

                    ' # ssh-keygen 

                      # ssh-copy-id root@ntp_machine_ip '


**Input File Update:-**

1. User has to update the input.yaml file in /opt/hpe-solutions-openshift/DL-LTI-Openshift/ directory to  execute the NTP script.
2. User needs to update all the NTP deployment related details in the input.yaml file which include:-
                      
                      ' solution_network_ip: 172.28.\*.\* 
                        corporate_ntp: 16.110.\*.\* ' 

3. User needs to update all the NTP deployment related details in the hosts file which include :-
                     
                      ' [kvm_nodes]
                        172.28.*.*
                        172.28.*.*
                        172.28.*.* '

**Playbook Execution:-**

To deploy NTP service on hosts run the playbook with below mentioned command                   

            ' # ansible-playbook -i hosts playbooks/ntp.yml --ask-vault-pass'