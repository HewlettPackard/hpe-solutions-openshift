Role Name: capture_vsphere_image
=========

This role captures the vsphere golden image. It includes the following tasks:
- Power off corresponding server hardware
- Create golden image with the corresponding OS volume
- Create deployment plan with that OS volume
- Delete the temporary server profile

Requirements
------------
This role is built on the Python and Ansible module for HPE OneView 5.0
Python hpOneView module can be found at https://github.com/HewlettPackard/python-hpOneView#installation
Ansible hpOneView module can be found at https://github.com/HewlettPackard/oneview-ansible

Role Variables
--------------
custom name for Golden Image to be created 
- golden_image_name: 'ESXi_GI_role'
  
custom name for Deployment Plan to be created 
- deployment_plan_name: 'ESXI_DP_role'

Name of the OS volume associated with the temporary server profile created 
- os_volume_name: 'OSVolume-4'

############################ OS capture and deploy plans ############################

################# No need to update when using OneView 5.0 and ESXi 6.7 ##################

- os_capture_plan_name: "HPE - Foundation 1.0 - capture OS Volume as is-2017-03-24"
- os_deploy_plan_name: "HPE - ESXi 6.7 - deploy with multiple management NIC HA config - 2019-07-24"

Dependencies
------------
Important! This role is dependent on the variable and task file from the prepare_vsphere_image role present within this repository.

License
-------

BSD

Author Information
------------------

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
