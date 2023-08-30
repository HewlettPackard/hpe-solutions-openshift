**PROCEDURE FOR CREATING AND DELETING LOGICAL DRIVES USING ANSIBLE PLAYBOOK**

**Description:-**

This script lets you create and delete logical drives on the head nodes/compute nodes.

**Pre-requisite:-**

1. RHEL 8.6  [Installer machine](https://hewlettpackard.github.io/hpe-solutions-openshift/4.12-AMD-LTI/Solution-Deployment/Preparing-execution-environment.html "https://hewlettpackard.github.io/hpe-solutions-openshift/4.12-AMD-LTI/Solution-Deployment/Preparing-execution-environment.html") is essential to initiate the binddns deployment process.
2. Execute the following commands in the Ansible Engine to download the repositories.

                   '  # cd /opt

                      # yum install -y git

                      # git clone  <https://github.com/HewlettPackard/hpe-solutions-openshift.git> '


**Input File Update:-**

1. User has to update the input.yaml file in /opt/hpe-solutions-openshift/DL-LTI-Openshift/create_delete_logicaldrives directory to  execute the logical drive script.
2. User needs to update all the details in the input.yaml with below command and file which include:-

```
ansible-vault edit input.yaml
```
ansible vault password is **changeme**

                      
                      ' ILOServers:
                           - ILOIP: 172.28.*.*
                             ILOuser: admin
                             ILOPassword: Password
                             controller: 12  
                             RAID: Raid1
                             PhysicalDrives: 1I:1:1,1I:1:2  

                           - ILOIP: 172.28.*.*
                             ILOuser: admin
                             ILOPassword: Password
                             controller: 1
                             RAID: Raid1
                             PhysicalDrives: 1I:3:1,1I:3:2

                           - ILOIP: 172.28.*.*
                             ILOuser: admin
                             ILOPassword: Password
                             controller: 11
                             RAID: Raid1
                             PhysicalDrives: 1I:3:1,1I:3:2   '

**Note:-**

1. To find controller id login to the respective ILO -> System Information -> Storage tab where inside Location find the **slot number** as the controller id. 

            ' # Example - Slot = 12 '

2. To find the PhysicalDrives login to the respective ILO -> System Information -> Storage tab inside Unconfigured Drives where under Location you can deduce PhysicalDrives based on these information:
         
         ' # Slot: 12:Port=1I:Box=1:Bay=1
           # Example - 1I:1:1 ('Port:Box:Bay')

           # Slot: 12:Port=1I:Box=1:Bay=2
           # Example - 1I:1:2 ('Port:Box:Bay') '
                        
**Playbook Execution:-**

To delete all the existing logical drives in the server in case if any and to create new logical drives named 'RHEL Boot Volume' in respective ILO servers run the site.yml playbook inside create_delete_logicaldrives directory with the below mentioned command                   

            ' # ansible-playbook site.yml --ask-vault-pass'



