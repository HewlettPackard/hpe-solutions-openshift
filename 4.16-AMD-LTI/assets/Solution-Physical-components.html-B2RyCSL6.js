import{_ as e,c as n,a,o as r}from"./app-D8DH5NMV.js";const l="/hpe-solutions-openshift/4.16-AMD-LTI/assets/Aspose.Words.d1fc7ddd-52aa-4c6c-b4c8-7a1fb8d3e951.006-DXS2UFcn.png",s="/hpe-solutions-openshift/4.16-AMD-LTI/assets/Aspose.Words.d1fc7ddd-52aa-4c6c-b4c8-7a1fb8d3e951.007-DNOqFwLX.png",o="/hpe-solutions-openshift/4.16-AMD-LTI/assets/figure60-C920Vi5T.png",i={};function d(h,t){return r(),n("div",null,t[0]||(t[0]=[a(`<h1 id="solution-components" tabindex="-1"><a class="header-anchor" href="#solution-components"><span><strong>Solution Components</strong></span></a></h1><h2 id="physical-components" tabindex="-1"><a class="header-anchor" href="#physical-components"><span><strong>Physical components</strong></span></a></h2><p>This section includes the hardware, software, and service components for the NGS-optimized solution for RHOCP.</p><h4 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware"><span><strong>Hardware</strong></span></a></h4><p>The following table includes the hardware requirements for this solution:</p><p><strong>TABLE 2.</strong> Hardware components required for NGS-optimized solution for RHOCP</p><table><thead><tr><th style="text-align:left;">Component</th><th style="text-align:center;">Qty</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">HPE ProLiant DL325 Gen11 server</td><td style="text-align:center;">3</td><td style="text-align:left;">Provides capacity for head nodes with openshift master and bootstrap KVM vm’s,haproxy,dns,proxy</td></tr><tr><td style="text-align:left;">HPE ProLiant DL325 Gen11 server</td><td style="text-align:center;">3</td><td style="text-align:left;">Provide OpenShift worker nodes based on KVM VM’s</td></tr><tr><td style="text-align:left;">HPE Alletra MP</td><td style="text-align:center;">1</td><td style="text-align:left;">External iSCSI storage for Persistent Volumes</td></tr><tr><td style="text-align:left;">HPE Aruba 8325 switch</td><td style="text-align:center;">2</td><td style="text-align:left;">A network switch for datacenter network</td></tr><tr><td style="text-align:left;">HPE Aruba 6300M switch</td><td style="text-align:center;">1</td><td style="text-align:left;">A network switch for iLO Management network</td></tr><tr><td style="text-align:left;">HPE ProLiant DL385 Gen11 server</td><td style="text-align:center;">3</td><td style="text-align:left;">Red OpenShift Data Foundation nodes – Internal storage mode (optional)</td></tr><tr><td style="text-align:left;">HPE ProLiant DL385 Gen11 server</td><td style="text-align:center;">3</td><td style="text-align:left;">Red OpenShift Data Foundation nodes – External storage mode (optional)</td></tr></tbody></table><h4 id="software" tabindex="-1"><a class="header-anchor" href="#software"><span><strong>Software</strong></span></a></h4><div class="hint-container tip"><p class="hint-container-title">NOTE</p><p>The installation user must ensure that they have downloaded or have access to these software components. Ensure that the appropriate subscriptions and licensing are in place to use within the planned time frame.</p></div><p><strong>TABLE 3.</strong> Software requirements for NGS-optimized solution for RHOCP</p><table><thead><tr><th style="text-align:left;">Component</th><th style="text-align:left;">Version</th></tr></thead><tbody><tr><td style="text-align:left;">Red Hat Enterprise Linux CoreOS (RHEL COreOS)</td><td style="text-align:left;">4.16</td></tr><tr><td style="text-align:left;">Red Hat OpenShift Container Platform (RHOCP)</td><td style="text-align:left;">4.16</td></tr><tr><td style="text-align:left;">Red Hat Enterprise Linux</td><td style="text-align:left;">9.4</td></tr><tr><td style="text-align:left;">HPE Alletra MP</td><td style="text-align:left;">10.4.0.38</td></tr><tr><td style="text-align:left;">Red Hat OpenShift Data Foundation</td><td style="text-align:left;">4.16</td></tr></tbody></table><p><strong>TABLE 4.</strong> Switches for NGS-optimized solution for RHOCP</p><table><thead><tr><th style="text-align:left;">Component</th><th style="text-align:left;">Version</th></tr></thead><tbody><tr><td style="text-align:left;">Aruba 6300</td><td style="text-align:left;">10.10.1030</td></tr><tr><td style="text-align:left;">Aruba 8325</td><td style="text-align:left;">10.10.1030</td></tr></tbody></table><p>The following software must be available on the installer machine:</p><p><strong>TABLE 5.</strong> Software requirements for the installer machine</p><table><thead><tr><th style="text-align:left;">Component</th><th style="text-align:left;">Version</th></tr></thead><tbody><tr><td style="text-align:left;">Ansible</td><td style="text-align:left;">2.15.12</td></tr><tr><td style="text-align:left;">Python</td><td style="text-align:left;">3.9</td></tr><tr><td style="text-align:left;">Java</td><td style="text-align:left;">1.8</td></tr><tr><td style="text-align:left;">Bind DNS</td><td style="text-align:left;">9.11.36</td></tr><tr><td style="text-align:left;">Squid Proxy</td><td style="text-align:left;">4.16</td></tr><tr><td style="text-align:left;">HAProxy</td><td style="text-align:left;">1.8.27</td></tr><tr><td style="text-align:left;">Chrony</td><td style="text-align:left;">4.2</td></tr><tr><td style="text-align:left;">Matchbox</td><td style="text-align:left;">0.9</td></tr></tbody></table><h4 id="services" tabindex="-1"><a class="header-anchor" href="#services"><span><strong>Services</strong></span></a></h4><p>This document is built with assumptions about services and network ports available within the implementation environment. This section discusses these assumptions.</p><p>The following table includes a list of services required for the NGS-optimized solution for RHOCP and provides a brief description of their function:</p><p><strong>TABLE 6.</strong> Services used for the NGS-optimized solution for RHOCP</p><table><thead><tr><th style="text-align:left;">Service</th><th style="text-align:left;">Description/Notes</th></tr></thead><tbody><tr><td style="text-align:left;">BindDNS</td><td style="text-align:left;"><p>Provides name resolution on management and data center networks.</p><p>Domain Name Services must be in place for the management and data center networks. Ensure that both forward and reverse lookups are working for all hosts.</p></td></tr><tr><td style="text-align:left;">HAPROXY</td><td style="text-align:left;">HAProxy is a free, very fast and reliable reverse-proxy offering high availability, load balancing, and proxying for TCP and HTTP-based applications.</td></tr><tr><td style="text-align:left;">NTP</td><td style="text-align:left;"><p>Ensures consistent time across the solution stack.</p><p>A Network Time Protocol (NTP) server should be available for time synchronization to host within the solution environment.</p></td></tr><tr><td style="text-align:left;">DHCP</td><td style="text-align:left;">DHCP server provides IP addresses lease</td></tr><tr><td style="text-align:left;">iPXE</td><td style="text-align:left;"><p>Enables booting of operating systems.</p><p>Since all the nodes in this solution are booted using iPXE server, it is necessary to have a properly configured iPXE server.</p></td></tr><tr><td style="text-align:left;">KVM</td><td style="text-align:left;">Kernel-based Virtual Machine (KVM) is an open-source virtualization technology. Specifically, KVM a hypervisor that allows a host machine to run multiple, virtual environments called guests or Virtual Machines (VMs).</td></tr><tr><td style="text-align:left;">Squid Proxy</td><td style="text-align:left;">Squid is a web proxy server application that gives organizations proxy and cache services for the Web supporting HTTP, HTTPS, FTP, and more.</td></tr><tr><td style="text-align:left;">Keepalived</td><td style="text-align:left;">Keepalived is used for IP failover between two servers. Its facilities for load balancing and high-availability to Linux-based infrastructures. It worked on Virtual Router Redundancy Protocol (VRRP) protocol.</td></tr></tbody></table><h4 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp"><span>DHCP</span></a></h4><p>DHCP should be present on RHEL8 Installer VM and able to provide IP address leases for iPXE deployment of RHCOS on worker nodes.</p><h4 id="network-port" tabindex="-1"><a class="header-anchor" href="#network-port"><span>Network port</span></a></h4><p>The port information listed in Table 7 allows cluster components to communicate with each other.</p><p>To retrieve this information from bootstrap, master, and worker nodes, run the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> <span class="token function">netstat</span> –tupln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The following table shows a list of network ports used by the services under RHOCP 4.16.</p><p><strong>TABLE 7.</strong> Network ports used by RHOCP 4.16 services</p><table><thead><tr><th style="text-align:left;">Protocol</th><th style="text-align:left;">Port Number/Range</th><th style="text-align:left;">Service Type</th><th style="text-align:left;">Other details</th></tr></thead><tbody><tr><td style="text-align:left;">TCP</td><td style="text-align:left;">80</td><td style="text-align:left;">HTTP Traffic</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">443</td><td style="text-align:left;">HTTPS traffic</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">2379-2380</td><td style="text-align:left;">etcd server, peer and metrics ports</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">6443</td><td style="text-align:left;">Kubernetes API</td><td style="text-align:left;">The Bootstrap machine and masters.</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">9000-9999</td><td style="text-align:left;">Host level services, including the node exporter on ports 9100-9101 and the Cluster Version Operator on port 9099.</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">10249-10259</td><td style="text-align:left;">The default ports that Kubernetes reserves.</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">10256</td><td style="text-align:left;">openshift-sdn</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">22623</td><td style="text-align:left;">Machine Config Server</td><td style="text-align:left;">The Bootstrap machine and masters.</td></tr><tr><td style="text-align:left;">UDP</td><td style="text-align:left;">4789</td><td style="text-align:left;">VXLAN and GENEVE</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">6081</td><td style="text-align:left;">VXLAN and GENEVE</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">9000-9999</td><td style="text-align:left;">Host level services, including the node exporter on ports 9100-9101</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">30000-32767</td><td style="text-align:left;">Kubernetes NodePort</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">TCP</td><td style="text-align:left;">3128</td><td style="text-align:left;">Squid Proxy</td><td style="text-align:left;">Squid is a caching and forwarding web proxy</td></tr><tr><td style="text-align:left;">TCP/UDP</td><td style="text-align:left;">53</td><td style="text-align:left;">Bind DNS</td><td style="text-align:left;">BIND can be used to run a caching DNS server or an authoritative name server, and provides features like load balancing, notify, dynamic update, split DNS, DNSSEC, IPv6, and more.</td></tr></tbody></table><p>For more information on the network port requirements for RHOCP 4.16, see the <a href="https://docs.openshift.com/container-platform/4.16/installing/installing_bare_metal/installing-bare-metal.html#installation-network-user-infra_installing-bare-metal" target="_blank" rel="noopener noreferrer">Networking requirements for user-provisioned infrastructure</a> section in the <em>OpenShift Container Platform 4.16 documentation</em>.</p><h2 id="networking-components" tabindex="-1"><a class="header-anchor" href="#networking-components"><span><strong>Networking components</strong></span></a></h2><p>The following figure illustrates the cabling configuration of the three HPE ProLiant AMD and Intel servers, Aruba 8325 and Aruba 6300 switches, and Intelligent Resilient Fabric (IRF) for the NGS-optimized solution for RHOCP. These cables carry frame management, inter-frame, and interconnect traffic between frames.</p><p><img src="`+l+'" alt=""></p><p><strong>FIGURE 4.</strong> NGS-optimized solution for RHOCP 4.16 – Network configuration</p><p>The NGS-optimized solution for RHOCP network configuration includes the following components:</p><ol><li><strong>Production Network:</strong> It is customer defined and provides networks for RHOCP deployment.</li><li><strong>Migration Network:</strong> A network provisioned for migration of virtual machines.</li><li><strong>ISCSI Network:</strong> It includes dedicated networks optimized for lossless compute to storage communication.</li><li><strong>OOBM Network:</strong> It provides iLO for servers and Block Storage Management and connects to the OOBM management switch.</li></ol><h2 id="storage-components" tabindex="-1"><a class="header-anchor" href="#storage-components"><span><strong>Storage components</strong></span></a></h2><p>This section includes storage components that are required for the NGS-optimized solution for RHOCP.</p><h4 id="hpe-csi-driver-for-hpe-alletra-storage" tabindex="-1"><a class="header-anchor" href="#hpe-csi-driver-for-hpe-alletra-storage"><span><strong>HPE CSI Driver for HPE Alletra Storage</strong></span></a></h4><p>The HPE Container Storage Interface (CSI) Driver for Kubernetes is a multi-vendor and multi-platform driver that adds and configures platforms using a component, known as the Container Storage Provider (CSP). HPE Alletra Storage MP hardware and managed via the HPE GreenLake cloud platform.</p><p>HPE CSI was developed as a standard for exposing block and file storage systems to containerized workloads on Container Orchestrator Systems (COS) like Kubernetes. This standard is an initiative to unify the COS storage interface with the storage vendors. For example, a single HPE CSI implemented for a storage vendor is guaranteed to work with all COS.</p><h4 id="hpe-csi-driver-architecture" tabindex="-1"><a class="header-anchor" href="#hpe-csi-driver-architecture"><span>HPE CSI Driver architecture</span></a></h4><p>Figure 5 is a diagrammatic representation of the HPE CSI Driver architecture:</p><p><img src="'+s+'" alt=""></p><p><strong>FIGURE 5.</strong> HPE CSI Driver architecture</p><h4 id="csi-deployment-workflow" tabindex="-1"><a class="header-anchor" href="#csi-deployment-workflow"><span>CSI Deployment Workflow</span></a></h4><p><img src="'+o+'" alt=""></p><p><strong>FIGURE 6.</strong> High-level flow diagram for HPE CSI Driver deployment on RHOCP 4.16</p><p>The Red Hat OpenShift Container Platform (RHOCP) 4.16 cluster includes physical master and worker nodes running RHEL 9.4 as the operating system. The iSCSI interface configured on the host nodes establishes the connection with the HPE Alletra array to the cluster. After the successful deployment of HPE CSI Driver, CSI controller, 3PAR CSP, and Nimble CSP are deployed to communicate with the HPE Alletra arrays via REST APIs. The associated features on Storage Class such as CSI provisioner, CSI attacher, and so on are configured on the Storage Class.</p>',50)]))}const f=e(i,[["render",d],["__file","Solution-Physical-components.html.vue"]]),g=JSON.parse('{"path":"/Solution-Components/Solution-Physical-components.html","title":"Solution Components","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Physical components","slug":"physical-components","link":"#physical-components","children":[]},{"level":2,"title":"Networking components","slug":"networking-components","link":"#networking-components","children":[]},{"level":2,"title":"Storage components","slug":"storage-components","link":"#storage-components","children":[]}],"git":{},"filePathRelative":"Solution-Components/Solution-Physical-components.md"}');export{f as comp,g as data};
