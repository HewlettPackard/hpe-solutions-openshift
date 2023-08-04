(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{210:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("The Red Hat® OpenShift® Container Platform (RHOCP) is a dependable hybrid cloud foundation for developing and scaling containerized applications. It provides a unified, consistent Kubernetes platform anywhere the Red Hat® Enterprise Linux® (RHEL) operating system is installed. Container platforms built on Kubernetes deliver a cloud-like experience across all the locations where you deploy it, whether it is a private or public cloud, on-premises, or at the edge.")]),e._v(" "),t("p",[e._v("This document describes the deployment of a highly available and secure Red Hat® OpenShift® Container Platform 4.12 on HPE ProLiant DL325 & DL385 Gen11 Plus servers. It is intended to be used with the Ansible® Playbook and python scripts found at\n"),t("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-openshift.git"),t("OutboundLink")],1),e._v(". This document provides implementation guidelines for RHOCP 4.12. For more information, see the "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/welcome/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.12/welcome/index.html"),t("OutboundLink")],1),e._v(". Hewlett Packard Enterprise strives to make regular updates to this solution with the goal of validating it against the latest available version of RHOCP. As a result, the references in the document will generally refer to RHOCP 4.12 and mention specific sub-versions in strategic locations to note the tested version.")]),e._v(" "),t("p",[e._v("The RHOCP 4.12 deployment on HPE ProLiant DL325 Gen11 Plus servers includes the following:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("Hewlett Packard Enterprise plans to update this document over time with enhancements to deployment methodologies as well as new software versions, features, and functions. Check for the latest document at\n"),t("a",{attrs:{href:"https://hewlettpackard.github.io/hpe-solutions-openshift/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hewlettpackard.github.io/hpe-solutions-openshift/"),t("OutboundLink")],1),e._v(".")])])}),[function(){var e=this._self._c;return e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[this._v("#")]),this._v(" "),e("strong",[this._v("INTRODUCTION")])])},function(){var e=this._self._c;return e("ul",[e("li",[this._v("RHEL 8.6 is installed on the HPE ProLiant DL325 Gen11 Plus servers.")]),this._v(" "),e("li",[this._v("Three RHOCP master nodes run as virtual machines on Kernel-based Virtual Machine (KVM) nodes and three HPE ProLiant DL325 Gen11 Plus servers are used for the worker nodes (out of which one node acts as both, the installer and the worker node).")]),this._v(" "),e("li",[this._v("HPE Container Storage Interface (CSI) Driver with HPE Alletra storage is deployed on the existing RHOCP 4.12 solution offering.")])])},function(){var e=this._self._c;return e("p",[e("strong",[this._v("NOTE")])])}],!1,null,null,null);t.default=i.exports}}]);