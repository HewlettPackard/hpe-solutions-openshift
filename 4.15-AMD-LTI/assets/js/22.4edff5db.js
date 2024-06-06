(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{329:function(e,t,o){e.exports=o.p+"assets/img/solution_overview.7122ef19.png"},330:function(e,t,o){e.exports=o.p+"assets/img/High-level-architecture.a506614c.png"},331:function(e,t,o){e.exports=o.p+"assets/img/Rack-diagram.82f5e38f.png"},372:function(e,t,o){"use strict";o.r(t);var r=o(14),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"solution-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-overview"}},[e._v("#")]),e._v(" "),t("strong",[e._v("SOLUTION OVERVIEW")])]),e._v(" "),t("p",[e._v("This section covers the overview of Red Hat OpenShift Container Platform 4.15 on physical head nodes for KVM-based master VMs and physical worker nodes.\n"),t("img",{attrs:{src:o(329),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 1:")]),e._v(" Solution layout Overview")]),e._v(" "),t("p",[e._v("HPE ProLiant Next Generation Sequencing (NGS) solution for Red Hat OpenShift Container Platform provides container deployment that can scale from three RHOCP nodes to 16 RHOCP nodes based on the size of deployment. It can be configured with different compute and storage building blocks to provide a mix of compute instances and storage volume characteristics. A single HPE ProLiant DL325 server gateway in rack 1 supports multiple racks.")]),e._v(" "),t("p",[e._v("This solution is deployed on a hybrid configuration. The RHOCP Control Plane nodes are deployed as KVM virtual machines running Red Hat CoreOS. These VMs are provisioned on three (3) HPE ProLiant DL325 Gen11 servers running Red Hat Enterprise Linux 8.9 and KVM. RHOCP worker nodes running RHEL 8.9/RHOCP are deployed on the bare metal three (3) HPE ProLiant DL325 Gen11 servers. The temporary bootstrap node is deployed on one of the worker nodes and later configured as a worker node.\nThe solution uses the internal storage on the HPE ProLiant DL325 Gen11 servers for both the Operating System and RHOCP applications. The environment infra support components (Installer machine, iPXE, DNS, DHCP, etc.) and a load balancer in this solution are deployed on virtual machines. The OpenShift-installer tool is run to generate ignition files that contain information about the hosts that will be provisioned. The Red Hat Linux CoreOS (RHCOS) for the nodes is then booted with the help of iPXE and the ignition files are passed with the OS image during installation. HPE ProLiant DL385 Gen11 servers leverage HPE Alletra 6000 via iSCSI to provide persistent container volume for application workload within RHOCP.")]),e._v(" "),t("h2",{attrs:{id:"solution-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-architecture"}},[e._v("#")]),e._v(" "),t("strong",[e._v("SOLUTION ARCHITECTURE")])]),e._v(" "),t("p",[e._v("This chapter includes the high-level architecture and rack architecture for the NGS solution for Red Hat OpenShift Container Platform.")]),e._v(" "),t("h3",{attrs:{id:"component-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-architecture"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Component architecture")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(330),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 2.")]),e._v(" NGS solution for RHOCP 4.15 – High-level architecture")]),e._v(" "),t("p",[e._v("The high-level architecture of the NGS-optimized solution for RHOCP includes the following components:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Head Nodes:")]),e._v(" It includes three (3) Red Hat Control Plane VMs running RHEL 8.9 and one installer machine running RHEL 8.9. These head nodes use HPE ProLiant DL325 server compute instances and KVM to host management services. The services hosted on these nodes include Bind DNS, NTP, Squid proxy, admin CLI, and load balancer. Head node resources are created to host the Installer and RHOCP Control Plane nodes.")]),e._v(" "),t("li",[t("strong",[e._v("Worker Nodes:")]),e._v(" It includes three (3) RHOCP worker nodes running RHEL 8.9 and optimized to run container workloads. These compute modules also deploy HPE CSI Driver for HPE Alletra storage.")]),e._v(" "),t("li",[t("strong",[e._v("Switches:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("HPE Aruba 8325 ToR switch:")]),e._v(" This switch hosts Control Plane management and production network for integrating into the existing customer network.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("HPE Aruba 6300M OOBM switch:")]),e._v(" This switch provides infrastructure for iLO and OneView management across all hosts.")])])])])]),e._v(" "),t("p",[e._v("The following table includes the node configuration used for NGS-optimized solution for RHOCP 4.15:")]),e._v(" "),t("p",[t("strong",[e._v("TABLE 1.")]),e._v(" NGS-optimized solution for RHOCP 4.15 node configuration")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Node Function")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Form Factor Operating System")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Head nodes")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Bare metal running KVM                                                                RHEL 8.9")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Control Plane or Master nodes")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Virtual Machine                                                                               RHCOS")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Worker nodes")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Bare metal                                                                                        RHEL 8.9/RHCOS")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Bootstrap node")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Virtual Machine                                                                               RHCOS")])])])]),e._v(" "),t("h2",{attrs:{id:"rack-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rack-layout"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Rack layout")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(331),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 3.")]),e._v(" Rack layout for NGS-optimized RHOCP servers and network switches")]),e._v(" "),t("p",[e._v("Figure 3 illustrates the rack view of the solution. HPE Alletra 6000 for Storage Block Performance Module can be used for External Persistent Volumes using the "),t("a",{attrs:{href:"https://catalog.redhat.com/software/operators/detail/5e9874643f398525a0ceb004",target:"_blank",rel:"noopener noreferrer"}},[e._v("HPE CSI Operator for Kubernetes"),t("OutboundLink")],1),e._v(". For more information, see the "),t("a",{attrs:{href:"https://catalog.redhat.com/software/operators/detail/5e9874643f398525a0ceb004",target:"_blank",rel:"noopener noreferrer"}},[e._v("HPE CSI Operator for Kubernetes"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);