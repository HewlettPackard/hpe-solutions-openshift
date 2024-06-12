(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{359:function(e,t,n){"use strict";n.r(t);var o=n(14),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" "),t("strong",[e._v("INTRODUCTION")])]),e._v(" "),t("p",[e._v("The Red Hat® OpenShift® Container Platform (RHOCP) is a dependable hybrid cloud foundation for developing and scaling containerized applications. It provides a unified, consistent Kubernetes platform anywhere the Red Hat® Enterprise Linux® (RHEL) operating system is installed. Container platforms built on Kubernetes deliver a cloud-like experience across all the locations where you deploy it, whether it is a private or public cloud, on-premises, or at the edge.")]),e._v(" "),t("p",[e._v("This document describes the deployment of a highly available and secure Red Hat® OpenShift® Container Platform 4.15 on HPE ProLiant DL325 & DL385 Gen11 servers. It is intended to be used with the Ansible® Playbook and python scripts found at\n"),t("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-openshift.git"),t("OutboundLink")],1),e._v(". This document provides implementation guidelines for RHOCP 4.15. For more information, see the "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.15/welcome/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.15/welcome/index.html"),t("OutboundLink")],1),e._v(". Hewlett Packard Enterprise strives to make regular updates to this solution with the goal of validating it against the latest available version of RHOCP. As a result, the references in the document will generally refer to RHOCP 4.15 and mention specific sub-versions in strategic locations to note the tested version.")]),e._v(" "),t("p",[e._v("The RHOCP 4.15 deployment on HPE ProLiant DL325 Gen11 servers includes the following:")]),e._v(" "),t("ul",[t("li",[e._v("RHEL 8.9 is installed on the HPE ProLiant DL325 Gen11 servers.")]),e._v(" "),t("li",[e._v("Three RHOCP master nodes run as virtual machines on Kernel-based Virtual Machine (KVM) nodes and three HPE ProLiant DL325 Gen11 servers are used for the worker nodes (out of which one node acts as both, the installer and the worker node).")])]),e._v(" "),t("p",[e._v("RHOCP 4.15 deployment supports below storage options:")]),e._v(" "),t("p",[e._v("The RHOCP 4.15 deployment on HPE ProLiant DL385 Gen11 servers includes the following:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("RHEL 8.9/CoreOS is installed on the HPE ProLiant DL385 Gen11 servers for Openshift Data Foundation(ODF). After os deployment for odf we will add node to existing cluster and deploy odf on nodes.")])]),e._v(" "),t("li",[t("p",[e._v("HPE Container Storage Interface (CSI) Driver with HPE Alletra storage is deployed on the existing RHOCP 4.15 solution offering.")])])]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("Hewlett Packard Enterprise plans to update this document over time with enhancements to deployment methodologies as well as new software versions, features, and functions. Check for the latest document at\n"),t("a",{attrs:{href:"https://hewlettpackard.github.io/hpe-solutions-openshift/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hewlettpackard.github.io/hpe-solutions-openshift/"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);