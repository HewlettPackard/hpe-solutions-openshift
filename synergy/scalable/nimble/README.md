# HPE Deployment Guide for Red Hat OpenShift Container Platform on HPE Synergy with Red Hat Hyperconverged Infrastructure

Prior to using the instructions in this README.md file it is recommended that you read and understand the deployment guide found in the root of this folder. Instructions found in the deployment guide will take precedence over instructions in README.md files.

This guide is accompanied by a Reference Configuration. The Reference Configuration highlights business value and provides a bill of material for the tested configuration. It can be download from https://h20195.www2.hpe.com/V2/GetDocument.aspx?docname=a00056101enw.

________________________________________
## About ##
________________________________________

This repo contains Ansible plays and scripts to automate the installation of Red Hat OpenShift 3.11.

________________________________________
## Prerequisites ##
________________________________________

Consult the Deployment Guide linked in this folder for full instructions on utilizing the playbooks and resources included in this repository.

________________________________________
## Summary ##
________________________________________
The plays outlined in this repository have been tested with the following.

Red Hat Enterprise Linux 7.6

Red Hat Virtualization Host 4.2

Red Hat Virtualization Manager 4.2

Red Hat Ansible Engine 2.7

Red Hat OpenShift Container Platform 3.11

________________________________________
## Change Tracker ##
________________________________________

v3.0 - July 3rd, 2019 - Initial release

v3.0.1 - July 15th, 2019 - Updated document, fixed formatting issues, minor grammar fixes, addition of multiple appendices covering Ansible Tower, Prometheus, log aggregation with EFK and Kube-bench.

v3.0.2 - August 6th, 2019 - Revised golden image creation, updates to Table 11 and Figure 20 to enhance clarity and readability, revised the section on importing artifact bundles into HPE Synergy Image Streamer, substantial updates to worker node processes and multiple URL fixes.

v3.0.3 - August 8th, 2019 - Substantial revision of the appendix focused on kube-bench.

v3.0.4 - September 5th, 2019 - Updates to numerous instructions for enhanced clarity.
