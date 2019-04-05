# HPE Deployment Guide for Red Hat OpenShift Container Platform on HPE Synergy with HPE Nimble Storage

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found in the root of this folder. Instructions found in the deployment guide will take precedence over instructions in README.md files.

This guide is accompanied by a Reference Configuration. The Reference Configuration highlights business value and provides a bill of material for the tested configuration. It can be download from https://h20195.www2.hpe.com/V2/GetDocument.aspx?docname=a00056101enw.

________________________________________
## What's New? ##
________________________________________

The latest release (v 2.0, March 12, 2019) features a number of updates to the prior release.

- We are now deploying Red Hat OpenShift Container Platform 3.10.

- HPE Synergy Image Streamer is now being used to deploy the worker node operating systems.

- Ansible playbooks are available for post-deployment configuration of networking and other core configuration parameters across both worker nodes and virtualization hosts.

- Worker nodes now make use of network teaming.

- The solution now utilizes six (6) rather than three (3) worker nodes.

- The latest firmware matrix for HPE Converged System 750 is in use including major updates to HPE OneView, HPE Synergy Image Streamer and to HPE Nimble Storage. 

- Existing Ansible plays have been revamped and are now structured within roles.

- There are updates to product versions including the Nimble Linux Toolkit, HPE Nimble Kube Storage Controller, HPE Workload Aware Security for Linux and others.

- The deployment guide introduces the use of Ansinimble as a method for deploying and configuring HPE Nimble Storage arrays using Ansible playbooks.

- The deployment guide features a section introducing container data protection as a topic. 

- The reference configuration (linked above) includes an updated Bill of Materials to reflect the increase in the number of workers within the solution. 

v2.0.2, April 3, 2019 Adds
- Altered the section around power configuration on RHVH hosts to make it easier to follow.

v2.0.3, April 5, 2019 Adds
- Revised the power management section for the RHVH hosts to provide clarity around implementation steps.

- Introduced a change tracking table inline to make it easier to locate changes within the document.

- Added Appendix D which introduces the concept of virtual worker nodes to the design.
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


