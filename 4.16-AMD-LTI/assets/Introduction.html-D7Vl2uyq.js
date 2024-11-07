import{_ as t,c as n,a as o,o as i}from"./app-BJU8uzDB.js";const r="/hpe-solutions-openshift/4.16-AMD-LTI/assets/D_f-NSKgP6Lv.png",a={};function s(l,e){return i(),n("div",null,e[0]||(e[0]=[o('<h1 id="red-hat-openshift-container-platform-4-16-on-hpe-dl325-dl385-gen11-servers" tabindex="-1"><a class="header-anchor" href="#red-hat-openshift-container-platform-4-16-on-hpe-dl325-dl385-gen11-servers"><span><strong>Red Hat OpenShift Container Platform 4.16 on HPE DL325 &amp; DL385 Gen11 Servers</strong></span></a></h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span><strong>INTRODUCTION</strong></span></a></h2><p>The Red Hat® OpenShift® Container Platform (RHOCP) is a dependable hybrid cloud foundation for developing and scaling containerized applications. It provides a unified, consistent Kubernetes platform anywhere the Red Hat® Enterprise Linux® (RHEL)/Red Hat Enterprise Linux CoreOS (RHCOS) operating system is installed. Container platforms built on Kubernetes deliver a cloud-like experience across all the locations where you deploy it, whether it is a private or public cloud, on-premises, or at the edge.</p><p>This document describes the deployment of a highly available and secure Red Hat® OpenShift® Container Platform 4.16 on HPE ProLiant DL325 and DL385 Gen11 servers. It is intended to be used with the Ansible® Playbook and python scripts found at <a href="https://github.com/HewlettPackard/hpe-solutions-openshift.git" target="_blank" rel="noopener noreferrer">https://github.com/HewlettPackard/hpe-solutions-openshift.git</a>. This document provides implementation guidelines for RHOCP 4.16. For more information, see the <a href="https://docs.openshift.com/container-platform/4.16/welcome/index.html" target="_blank" rel="noopener noreferrer">https://docs.openshift.com/container-platform/4.16/welcome/index.html</a>. Hewlett Packard Enterprise strives to make regular updates to this solution with the goal of validating it against the latest available version of RHOCP. As a result, the references in the document will generally refer to RHOCP 4.16 and mention specific sub-versions in strategic locations to note the tested version.</p><p>The RHOCP 4.16 deployment on HPE ProLiant DL325 and DL385 Gen11 servers includes the following:</p><ul><li>RHEL 9.4 is installed on the HPE ProLiant DL325 Gen11 servers.</li><li>Three RHOCP master nodes run as virtual machines on Kernel-based Virtual Machine (KVM) nodes and three HPE ProLiant DL325 Gen11 servers are used for the worker nodes (out of which one node acts as both, the installer and the worker node).</li></ul><p>RHOCP 4.16 deployment supports below storage options</p><p>The RHOCP 4.16 deployment on HPE ProLiant DL385 Gen11 servers includes the following:</p><ul><li><p>RHEL 9.4/RHCOS is installed on the HPE ProLiant DL385 Gen11 servers for Openshift Data Foundation(ODF). After os deployment for odf we will add node to existing cluster and deploy odf on nodes.</p></li><li><p>HPE Container Storage Interface (CSI) Driver with HPE Alletra storage is deployed on the existing RHOCP 4.16 solution offering.</p></li></ul><p>It is recommended this document should be reviewed in its entirety and the installation user should understand all prerequisites and procedure before installation. It is also recommended that the installation user review the OpenShift Container Platform 4.16 installation process as described by Red Hat.</p><h2 id="deployment-guide-flow" tabindex="-1"><a class="header-anchor" href="#deployment-guide-flow"><span><strong>Deployment Guide Flow</strong></span></a></h2><p>Below flow diagram shows the high level flow of the Deployment Guide.</p><p><img src="'+r+'" alt=""></p><div class="hint-container tip"><p class="hint-container-title">NOTE</p><p>Hewlett Packard Enterprise plans to update this document over time with enhancements to deployment methodologies as well as new software versions, features, and functions. Check for the latest document at <a href="https://hewlettpackard.github.io/hpe-solutions-openshift/" target="_blank" rel="noopener noreferrer">https://hewlettpackard.github.io/hpe-solutions-openshift/</a>.</p></div>',14)]))}const h=t(a,[["render",s],["__file","Introduction.html.vue"]]),p=JSON.parse('{"path":"/RED-HAT-OpenShift-Container-Platform-4-on-HPE-DL-Servers/Introduction.html","title":"Red Hat OpenShift Container Platform 4.16 on HPE DL325 & DL385 Gen11 Servers","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"INTRODUCTION","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Deployment Guide Flow","slug":"deployment-guide-flow","link":"#deployment-guide-flow","children":[]}],"git":{},"filePathRelative":"RED-HAT-OpenShift-Container-Platform-4-on-HPE-DL-Servers/Introduction.md"}');export{h as comp,p as data};
