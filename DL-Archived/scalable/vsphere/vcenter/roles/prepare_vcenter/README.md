Role Name
=========

This role creates the datacenter, cluster of vsphere hosts used to create management VMs, adding the respective hosts into the clusters

Requirements
------------
- vSphere 6.7 hosts 
- vCenter
- Installer with Python 3.6.x and above, Ansible 2.9.x, PyVmomi installed in it.

Role Variables
--------------
custom name for datacenter to be created
- datacenter_name: datacenter

custom name of the compute clusters with the ESXi hosts for Management VMs
- management_cluster_name: management-cluster

hostname or IP address of the vsphere hosts
- vsphere_host_01: <vSphere_host_01_IP>
- vsphere_host_02: <vSphere_host_02_IP>
- vsphere_host_03: <vSphere_host_03_IP>

Dependencies
------------
NA

License
-------
BSD

Author Information
------------------
An optional section for the role authors to include contact information, or a website (HTML is not allowed).
