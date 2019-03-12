# HPE Deployment Guide for Red Hat OpenShift Container Platform on HPE Synergy with HPE Nimble Storage

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found in the root of this folder. Instructions found in the deployment guide will take precedence over instructions in README.md files.

This guide is accompanied by a Reference Configuration. The Reference Configuration highlights business value and provides a bill of material for the tested configuration. It can be download from https://h20195.www2.hpe.com/V2/GetDocument.aspx?docname=a00056101enw.

________________________________________
## About ##
________________________________________

This repo contains Ansible plays and scripts to automate the installation of Red Hat OpenShift 3.10. The actual OpenShift deployment Ansible play is from the OpenShift-Ansible repo (https://github.com/openshift/openshift-ansible ) and is not included here.

________________________________________
## Prerequisites ##
________________________________________
 
 - Ansible Engine should be installed and configured and capable of communicating with the hosts used in this solution.
 - All prerequisites found in the deployment document linked from this page have been met. 
 
________________________________________
## How to use ##
________________________________________

Step1 : Clone this repo to the Ansible Engine host to /etc/ansible using the below command
```
git clone http://github.com/HewlettPackard/hpe-solutions-openshift
```

________________________________________
## Summary ##
________________________________________
These plan scripts have been tested for personalizing

Red Hat Enterprise Linux 7.5 or 7.6 updated with the latest patches

Red Hat Virtualization Host 4.2

Red Hat Virtualization Manager 4.2

Red Hat Ansible Engine 2.5

Red Hat OpenShift Container Platform 3.10

Docker 1.13


