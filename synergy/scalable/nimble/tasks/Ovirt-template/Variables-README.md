
## Template Variables

These variables for creating a template in RHVM need to be filled in by the installer.

| Variable                |  Scope          | Description                              |  Reference                                      |
|:----------------------- |:----------------| :----------------------------------------|:------------------------------------------------|
| engine_url              | RHVM           | RHVM REST API web UI link                | ht<span>tps://rhvm.tennet.com/ovirt-engine/api  |
| engine_cafile           | RHVM           | Location of CA file in RHVM for authentication | /etc/pki/ovirt-engine/ca.pem        |
| datacenter              | RHVM           | Datacenter within RHV-M which will be used for template deployment | Default         |
| Cluster                 | RHVM           | Cluster within RHV-M which will be used for template deployment| Default              |
| template_disk_storage   | RHVM           | RHVM Storage domain  | Nimble-iSCSI |
| qcow_url                | RHVM           | Red Hat Enterprise Linux 7.5 KVM Guest Image, download path from Redhat download | ht<span>tps\://access.cdn.redhat.com//content/origin/files/sha256/7f/7ff0d81ebf68119816b2756b7ed591dc9b50d29713e3785cc6bed564429a8b04/rhel-server-7.5-update-1-x86_64-kvm.qcow2?_auth_=1531994907_0819a45adde5729d51cfe519aedfa9ef |
| image_path              | RHVM           | Image download location on RHVM, directory /var/images and file name  rhel-server-7.5-50G | /var/images/rhel-server-7.5-50G |
| template_name           | RHVM           | template name in RHV-M | rhel7-template_7.5_2d-50G |
| vm_name                 | RHVM           | Name of the temporary VM before cloning to template | rhel7_5-template_vm |
| template_memory         | RHVM           | template memory |  2GiB |
| template_cpu            | RHVM           | template vCPU count | 2 |
| template_disk_interface | RHVM           | Network interface type | virtio |
| template_disk_size      | RHVM           | Size of RHEL OS disk | 50GiB |
| template_disk_size_2    | RHVM           | Size of Second disk for Docker local storage | 100GiB |
| image_cache_download    | RHVM           | Create template if the Image is already downloaded at /var/images directory | true |
| template_nics:  <br/>- name: nic1 <br/>  &nbsp;&nbsp;profile_name <br/> &nbsp;&nbsp;interface  <br/>- name: nic2 <br/>  &nbsp;&nbsp;profile_name <br/> &nbsp;&nbsp;interface <br/>- name: nic3 <br/>  &nbsp;&nbsp;profile_name <br/> &nbsp;&nbsp;interface<br/>- name: nic4 <br/>  &nbsp;&nbsp;profile_name <br/> &nbsp;&nbsp;interface| RHVM       | Template Network Interface Details. <br/> Includes 2 iSCSI interface, <br/> One Internal and External network each | template_nics:<br/>- name: nic1 <br/>   &nbsp;&nbsp; profile_name: ovirtmgmt <br/>   &nbsp;&nbsp; interface: virtio <br/>  - name: nic2<br/>   &nbsp;&nbsp; profile_name: iscsi_a<br/>   &nbsp;&nbsp; interface: virtio<br/>  - name: nic3<br/>   &nbsp;&nbsp; profile_name: iscsi_b<br/>   &nbsp;&nbsp; interface: virtio<br/>  - name: nic4<br/>   &nbsp;&nbsp; profile_name: Datacenter<br/>   &nbsp;&nbsp; interface: virtio<br/> |                                                  
                                                                                 
                
                                                                        
