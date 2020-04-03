# Welcome to the HPE Reference Configuration for Red Hat OpenShift Container Platform (OCP) on HPE Synergy
This Reference Configuration describes the deployment of a highly available and secure Red Hat OpenShift Container Platform 4 on HPE Synergy Composable Infrastructure. This also includes the details on the configuration of the environment. This document demonstrates how Red Hat OpenShift Container Platform 4 can be configured to take advantage of the HPE Synergy composable architecture and leverage HPE Synergy D3940 Storage. Reference Architecture Page 4

The Red Hat OpenShift Container Platform 4 deployment on HPE Synergy Composable Infrastructure configuration consists of the following: • Three (3) OpenShift Container Platform master nodes • Three (3) OpenShift Container Platform worker nodes

The six (6) HPE Synergy 480 Gen10 Compute Modules above run Red Hat Enterprise Linux® CoreOS (RHCOS) to support the deployment. Local persistent volume leverages HPE Synergy D3940 Storage to provide local persistent storage for containers and registry as well as data management.

The Deployment Guide provides detailed instructions on how to deploy the solution and is available at https://hewlettpackard.github.io/hpe-solutions-openshift/
