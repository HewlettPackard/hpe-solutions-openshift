
## Template Variables

These variables for creating a template in RHVM need to be filled by the installer.

| Variable                |  Scope     | Description                              |  Reference                                      |
|:----------------------- |:-----------| :----------------------------------------|:------------------------------------------------|
| engine_url              | RHVM       | RHVM REST API web UI link                      | ht<span>tps://rhvm.tennet.com/ovirt-engine/api  |
| engine_cafile           | RHVM       | Location of CA file in RHVM for authentication | /etc/pki/ovirt-engine/ca.pem        |
| datacenter              | RHVM       | Datacenter within RHV-M which will be used for template deployment | Default         |
| Cluster                 | RHVM       | Cluster within RHV-M which will be used for template deployment| Default              |
| vmtemplate              | RHVM       | template in RHV-M to be used for VM deploy | rhel7-template_7.5_2d-50G |
| vms_3nics: <br/> &nbsp;oshift-m1.tennet.local: <br/>   &nbsp; ip: <br/>   &nbsp;   mask  <br/>&nbsp;   gateway: <br/> &nbsp;   nameserver: <br/> &nbsp;   domainsearch: <br/> &nbsp;   cpu:<br/>&nbsp;   mem <br/> &nbsp;  ip2: <br/>&nbsp;   mask2: <br/>&nbsp;   ip3:<br/>&nbsp;   mask3       | RHVM       | VM Configuration Details. <br/> oshift-m1.tennet.local is the name of the VM <br/> ip2 and ip3 are the iSCSI interface IP <br/> mask2 and mask3 are the corresponding subnet masks  | vms_3nics: <br/> &nbsp;oshift-m1.tennet.local: <br/>  &nbsp; ip:10.0.0.120 <br/> &nbsp; mask:255.255.0.0  <br/>&nbsp; gateway:10.0.1.1 <br/> &nbsp; nameserver:10.0.1.254 20.1.1.254 <br/> &nbsp; domainsearch:tennet.local <br/> &nbsp; cpu:4 <br/>&nbsp; mem:16GiB <br/> &nbsp; ip2:30.0.0.120 <br/>&nbsp; mask2:255.255.0.0 <br/>&nbsp; ip3:40.0.0.120 <br/>&nbsp; mask3:255.255.0.0|                             
                                                                                 
                
                                                                        
