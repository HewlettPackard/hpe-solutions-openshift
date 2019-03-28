# HPE Deployment Guide for Red Hat OpenShift Container Platform on HPE Synergy with HPE 3PAR Storage

HPE Deployment Guide for Red Hat OpenShift Container Platform on HPE Synergy with HPE 3PAR Storage

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found in the root of this folder. Instructions found in the deployment guide will take precedence over instructions in README.md files.

This guide is accompanied by a Reference Configuration. The Reference Configuration highlights business value and provides a bill of material for the tested configuration. It can be download from https://h20195.www2.hpe.com/V2/GetDocument.aspx?docname=a00056102enw.
What's New?

The latest release (v 2.0, March 29, 2019) features a number of updates to the prior release.

    We are now deploying Red Hat OpenShift Container Platform 3.10.

    Ansible playbooks are available for post-deployment configuration of networking and other core configuration parameters across both worker nodes and virtualization hosts.

    Worker nodes now make use of network teaming.

    The solution now utilizes six (6) rather than three (3) worker nodes.

    The latest firmware matrix for HPE Converged System 750 is in use including major updates to HPE OneView, HPE Synergy Image Streamer and to HPE 3PAR StoreServ Storage.

    Existing Ansible plays have been revamped and are now structured within roles.

    There are updates to product versions including the HPE Workload Aware Security for Linux and others.

   The deployment guide features a section introducing data protection with HPE 3PAR StoreServ storage.
   
    The reference configuration (linked above) includes an updated Bill of Materials to reflect the increase in the number of workers within the solution.

About

This repo contains Ansible plays and scripts to automate the installation of Red Hat OpenShift 3.10. The actual OpenShift deployment Ansible play is from the OpenShift-Ansible repo (https://github.com/openshift/openshift-ansible ) and is not included here.
Prerequisites

    Ansible Engine should be installed and configured and capable of communicating with the hosts used in this solution.
    All prerequisites found in the deployment document linked from this page have been met.

How to use

Step1 : Clone this repo to the Ansible Engine host to /etc/ansible using the below command

git clone http://github.com/HewlettPackard/hpe-solutions-openshift

Summary

These plan scripts have been tested for personalizing

Red Hat Enterprise Linux 7.5 or 7.6 updated with the latest patches

Red Hat Virtualization Host 4.2

Red Hat Virtualization Manager 4.2

Red Hat Ansible Engine 2.5

Red Hat OpenShift Container Platform 3.10

Docker 1.13-94 or above
