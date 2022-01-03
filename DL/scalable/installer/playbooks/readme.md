# Red Hat OpenShift Container Platform 4 on HPE DL Servers

## Overview
This folder consists of ansible playbooks for downloading OCP packages and generting igntion files.

## Prerequisites
- A server with CentOS/RHEL 7.6 OS to be used as an installer.

## Playbook Details

- Run the following command to download OCP packages of specific OCP version.

  ```
    ansible-playbook download_ocp_package.yml --extra-vars ocp_version=4.x.x
  ```

- Downloaded packages avilable in the following path $BASE_DIR/installer/library/openshift_components. 

- Run the following command to generate ignition files.

  ```
    ansible-playbook create_manifest_ignitions.yml
  ```

 - Generated igition files avilable in the following path $BASE_DIR/installer/ignitions/

