(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{312:function(e,t,i){e.exports=i.p+"assets/img/figure4.9f4244ac.png"},382:function(e,t,i){e.exports=i.p+"assets/img/figure1.6da91a04.png"},383:function(e,t,i){e.exports=i.p+"assets/img/figure2.f4d26280.png"},510:function(e,t,i){"use strict";i.r(t);var o=i(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"solution-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solution-overview"}},[e._v("#")]),e._v(" Solution overview")]),e._v(" "),o("p",[e._v("This section describes the deployment of Red Hat OpenShift Container Platform 4 on both physical and virtual compute resources.")]),e._v(" "),o("h2",{attrs:{id:"physical-bare-metal-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#physical-bare-metal-configuration"}},[e._v("#")]),e._v(" Physical bare metal configuration")]),e._v(" "),o("p",[e._v("In a bare metal configuration, the master nodes are deployed in a highly available configuration running on three (3) HPE Synergy 480 Gen10 Compute Modules. Load balancing can be deployed as a virtual machine or as a physical appliance. Red Hat OpenShift worker nodes are deployed on the bare metal with three (3) HPE Synergy 480 Gen10 Compute Modules running RHCOS version 4. The OpenShift install tool is run to generate ignition files that contain information about the hosts that will be provisioned. The Core OS for the worker nodes is then booted with the help of iPXE and the ignition files are passed with the OS image during installation. HPE Storage systems such as HPE Nimble, HPE 3PAR, and HPE Synergy D3940 Storage Modules provide support for ephemeral and persistent container volume via persistent volume.")]),e._v(" "),o("p",[e._v("Figure 1 provides an overview of the Red Hat OpenShift Container Platform 4 solution layout in a bare metal setup configuration.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(382),alt:""}})]),e._v(" "),o("p",[o("strong",[e._v("Figure 1.")]),e._v(" Solution layout for a bare metal setup")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("ul",[o("li",[e._v("The number of physical nodes represented in the solution layout is subject to change based on customer requirements.")]),e._v(" "),o("li",[e._v("The scripts and reference files provided with this document are included as examples of how to build the solution. They are not supported by Hewlett Packard Enterprise or Red Hat. It is expected that the scripts and reference files will be modified to meet the requirements of the deployment environment by the installation user prior to installation.")])])]),e._v(" "),o("h2",{attrs:{id:"virtualized-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#virtualized-configuration"}},[e._v("#")]),e._v(" Virtualized configuration")]),e._v(" "),o("p",[e._v("In a virtualized configuration, the OpenShift master nodes and worker nodes are deployed as VMware® vSphere virtual machines running on three (3) or more HPE Synergy 480 Gen10 Compute Modules. All virtual machines run RHCOS version 4. The OpenShift install tool is run to generate ignition files that contain information about the hosts that will be provisioned. The CoreOS operating system for the worker nodes is then PXE booted and the ignition files are passed with the OS image during installation. HPE Synergy D3940 Storage Module provides support for both ephemeral and persistent volume.")]),e._v(" "),o("p",[e._v("Figure 2 provides an overview of the Red Hat OpenShift Container Platform 4 solution layout in a virtualized setup configuration.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(383),alt:""}})]),e._v(" "),o("p",[o("strong",[e._v("Figure 2.")]),e._v(" Solution layout for a virtualized setup")]),e._v(" "),o("h2",{attrs:{id:"solution-layout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solution-layout"}},[e._v("#")]),e._v(" Solution layout")]),e._v(" "),o("p",[e._v("Figure 3 highlights the solution at a high level.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(312),alt:""}})]),e._v(" "),o("p",[o("strong",[e._v("Figure 3.")]),e._v(" High-level overview of the solution layout")]),e._v(" "),o("p",[e._v("The solution assumes that the following infrastructure services and components are installed, configured, and function properly:")]),e._v(" "),o("ul",[o("li",[e._v("LDAP or Active Directory")]),e._v(" "),o("li",[e._v("DHCP")]),e._v(" "),o("li",[e._v("DNS")]),e._v(" "),o("li",[e._v("iPXE")]),e._v(" "),o("li",[e._v("NTP")]),e._v(" "),o("li",[e._v("TFTP")])]),e._v(" "),o("h3",{attrs:{id:"standards-used-in-this-document"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#standards-used-in-this-document"}},[e._v("#")]),e._v(" Standards used in this document")]),e._v(" "),o("p",[e._v("This document makes use of the following standard terms:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Installation user or installer: Individual or individuals responsible for carrying out the installation tasks to produce a functional Red Hat OpenShift Container Platform 4 solution on HPE Synergy.")])]),e._v(" "),o("li",[o("p",[e._v("Installer machine or installer VM: The system that is capable of connecting to various components within the solution and is used to run most of the key commands. In this solution, this machine also serves as the Ansible Engine host.")])]),e._v(" "),o("li",[o("p",[e._v("Bootstrap node: The cluster requires the bootstrap machine to deploy the OpenShift Container Platform cluster on the three control plane machines. It can be removed after the cluster installation.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);