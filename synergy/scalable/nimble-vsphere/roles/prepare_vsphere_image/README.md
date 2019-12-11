Role Name: prepare_vsphere_image
=========
This role consist of the following tasks:
- upload the Image Stremaer Foundation and vSphere 6.7 specific artifact bundles into image streamer
- extract the artifact bundles 
- create a temporary server profile required to installed the ESXi hypervior in order to create the vsphere golden image
- power on the corresponding server hardware

Requirements
------------
This role is built on the Python and Ansible module for HPE OneView 5.0
Python hpOneView module can be found at https://github.com/HewlettPackard/python-hpOneView#installation
Ansible hpOneView module can be found at https://github.com/HewlettPackard/oneview-ansible

Role Variables
--------------
Name and path of the ESXi 6.7 Image streamer artifact bundle 
- vsphere_artifact_bundle_name: 'HPE_ESXI_67'
- vsphere_artifact_bundle_path: ../roles/prepare_vsphere_image/files/<artifact bundle name with extension>

Name and path of the Foundation artifact bundle for Image streamer 5.0
- foundation_artifact_bundle_name: 'HPE_Foundation_Artifacts_4_20'
- foundation_artifact_bundle_path: ../roles/prepare_vsphere_image/files/<artifact bundle name with extension>

Custom name for the temporary server profile 
- server_profile_name: vsphere_golden_image

Network connection names
- deployment_network_name: Deployment_I3S
- management_network_name: TenNet
- datacenter_network_name: TwentyNet
- iSCSI_A_network_name: iSCSI_SAN_A
- iSCSI_B_network_name: iSCSI_SAN_B

enclosure_group: EG

License
-------

BSD

Author Information
------------------

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
