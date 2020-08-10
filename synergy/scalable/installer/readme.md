# Red Hat OpenShift Container Platform 4 on HPE Synergy

## Overview
This folder consists of ansible playbooks and shell scripts which aids in setting up the installer machine with pre-requisites to deploy Red Hat OpenShift Container Platform on HPE Synergy. These playbooks are meant to be used in conjunction with the deployent guide for **Red Hat OpenShift Container Platform 4 on HPE Synergy**

## Prerequisites
- A server with RHEL 7.6 OS to be used as an installer.

## Usage
- Change the directory to /etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/playbooks
    ```
    # cd /etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/playbooks
    ```

**NOTE **
- The value for the constant “BASE_DIR” referred to in this deployment guide is /opt/hpe/solutions/ocp/hpe-solutions-openshift/synergy/scalable

- Execute the following command to setup pre-requisite Python environment.
    ```
    # sudo sh python_env.sh
    ```
- Execute the following command to enable the Python3 bash. 
    ```
    # scl enable rh-python36 bash
    ```
- Execute the following command to configure the Ansible environment.
    ```
    # sudo sh ansible_env.sh
    ```
- Execute the following command to download the HPE OneView packages. 
    ```
    # sudo sh download_oneview_packages.sh
    ```
- Enable the virtual environment with the following command.
    ```
    # source ../ocp_venv/bin/activate
    ```
- Execute the following command to set the environment variables.
    ```
    # export ANSIBLE_LIBRARY=/etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/library/oneview-ansible/library
    # export ANSIBLE_MODULE_UTILS=/etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/library/oneview-ansible/library/module_utils
    ```
