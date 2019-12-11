Role Name: deploy_vsphere_template
=========
This role deploys the server profile template utilized to provision the vsphere server profiles.


Requirements
------------

This role is built on the Python and Ansible module for HPE OneView 5.0 
Python hpOneView module can be found at https://github.com/HewlettPackard/python-hpOneView#installation
Ansible hpOneView module can be found at https://github.com/HewlettPackard/oneview-ansible

Role Variables
--------------

DNS server and gateway IP address for the Management network
- dns_ip: 10.0.x.x
- gateway: 10.0.x.x

subnet mask for the management network 
- subnet_mask: 255.255.0.0

Domain name for the management network
- domain_name: tennet.local

Deployment plan created during capture_vsphere_image play execution
- deployment_plan_name: ESXI_DP_role

custom name for server profile template to be created 
- server_profile_template_name: vSphere_template_2

Dependencies
------------

This role is dependent on the prepare_vsphere_image role for the variable and task files.

License
-------

BSD

Author Information
------------------

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
