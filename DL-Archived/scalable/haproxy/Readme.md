PROCEDURE FOR HAPROXY CONFIGURATION USING ANSIBLE PLAYBOOK
==========================================================

Description:-
-------------
This script lets you deploy the HAProxy loadbalancer on the remote host

Version:-
-------
1.5.18 is the current version installed at the time of running ansible playbook


License:-
-------
GPLv2 is the license for HAProxy

Notes:-
------
1. User has to update the host file to execute the HAProxy script
2. haproxy.yaml is the playbook for installing HAProxy LB, where ansible modules are written
3. templates/haproxy.cfg.j2 is the jinja2 template which lets you copy the haproxy configuration dynamically

Pre-requisite:-
-------------
1. Installer machine configured with ansible 

Steps:-
------
1. Copy the ssh keys from ansible engine/installer machine to HAProxy machine 
   #ssh-copy-id root@haproxy_machine_ip

2. Naviagte to HAProxy directory
   #cd $BASE_DIR/haproxy

3. Edit host names in the host file according to the environment
   ex:- <fqdn .. of ocpboot>, <fqdn .. of ocpmaster nodes>, <fqdn .. of ocpworker nodes>
           
4. Execute the ansible playbook from the installer machine to deploy HAProxy
   #ansible-playbook -i hosts haproxy.yaml
