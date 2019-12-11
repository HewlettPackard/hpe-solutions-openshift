Role Name
=========

This role creates the datacenter, cluster of vsphere hosts used to create management VMs, cluster of vsphere hosts used to create the worker VMs, adding the respective hosts into the clusters

Requirements
------------
- vSphere 6.7 hosts 
- vCenter
- Ansible engine with Python 2.7.9 and above, Ansible 2.7.2, PyVmomi installed in it.

Role Variables
--------------
custom name for datacenter to be created 
- datacenter_name: datacenter

custom name of the compute clusters with the ESXi hosts for Management VMs and worker VMs  
- management_cluster_name: management-cluster
- worker_cluster_name: worker-cluster

hostname or IP address of the vsphere hosts
- vsphere_host_01: 10.0.60.20
- vsphere_host_02: 10.0.60.21
- vsphere_host_03: 10.0.60.22
- vsphere_host_04: 10.0.60.23
- vsphere_host_05: 10.0.60.24
- vsphere_host_06: 10.0.60.25
- vsphere_host_07: 10.0.60.26
- vsphere_host_08: 10.0.60.27
- vsphere_host_09: 10.0.60.28

Dependencies
------------
NA

License
-------

BSD

Author Information
------------------

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
