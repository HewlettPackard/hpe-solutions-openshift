### Role Name: upload_firmware_bundle

##### Description: 
This role consists of ansible playbooks developed to automate the task of uploading the firmware bundle or firmware baseline for Compute Module of HPE Synergy to HPE OneView. These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform 4.6 on HPE Synergy**

##### Prerequisites
- Ansible engine with Ansible 2.9.x and Python  3.6.x
- **Python module for HPE OneView**: hpOneView is the Python SDK for the OneView API that allows you to manage OneView functionalities. Download the python repository at https://github.com/HewlettPackard/oneview-python.
- **Ansible module for HPE OneView**: OneView-ansible is the Ansible Module for HPE OneView which utilizes the python SDK to enable infrastructure as a code. Download the repository at https://github.com/HewlettPackard/oneview-ansible/.

##### Software requirements 
| Software | Version |
|--|--|
| HPE OneView	| 5 |

##### Input Files
- It is mandatory to update all the inputs  files (inputs.yml, hosts, secret.yml, fw_version_inputs.yml) with appropriate values before running any of the playbooks available in this repository.
	- Input file name: hosts
		1. This file is an inventory of host details
		2. Variables from "hosts" that are required by playbooks under "infrastructure" directory are listed here:
    ```
    # [server_profile_template]
    # [server_profile]
    ```
	- Input file name: inputs.yml
		1. Variables from "inputs.yml" that are required by playbooks under "infrastructure" directory are listed here:
    ```
    # enclosure_group: <Enclosure group name as per OneView> 
    # deployment_network_name: <Deployment network name as per OneView>
    # server_profile_template_name: <Custom name for SPT>
    # fw_bundle_path: <Firmware Bundle file path>
    # fw_bundle_file_name: <Firmware file name with extension>
    ```
	- Input file name: secret.yml
		1. This is an ansible vault file.
		2. Variables from "secret.yml" that are required by playbooks under "infrastructure" directory are listed here:
    ```
    # oneview_ip: x.x.x.x 
    # oneview_username: username
    # oneview_password: password
    # oneview_api_version: 1200
    ```
   
    - Input file name: fw_version_inputs.yml
		1. This file contains the version information of the firmware that should be updated on the server hardware.
		2. Variables from "fw_version_inputs.yml" that are required by playbooks under "infrastructure" directory are listed here:
    ```
    # innovationengine: < INNOVATION_ENGINE_VERSION >
    # systemrombios: < SYSTEM_ROM_VERSION >
    # serverplatformservices: < SERVER_PLATFORM_SERVICES >
    # powermanagementcontroller: < POWER_MANAGEMENT_CONTROLLER >
    # ilo5: < iLO_5_VERSION >
    ```

##### Note:
```
The firmware version information in this file is derived from "content.html" file that comes as part of firmware baseline package (.iso file) for Compute Module of HPE Synergy to HPE OneView.
The following two variables available in the "inputs.yml" file, inform the playbook from about the location and name of the firmware bundle that should be uploaded to OneView. Details about these variables are available in the "inputs.yml" file.
fw_bundle_path: <Firmware Bundle file path>
fw_bundle_file_name: <Firmware file name with extension>
```

- Execute the following commands on the installer VM to upload the firmware bundle to HPE OneView.
    ```
    # cd BASE_DIR/infrastructure
    # ansible-playbook -i hosts playbooks/upload_firmware_bundle.yml --ask-vault-pass
    ```
	Note: BASE_DIR is defined and set in installer machine section in deployment guide
- Expected output on installer machine after successful upload of firmware bundle to OneView

  ![](./media/2-role-upload_firmware_bundle.JPG)

- Expected output after Firmware Baseline id uploaded to OneView

  ![](./media/1-role-upload_firmware_bundle_OneView.JPG)