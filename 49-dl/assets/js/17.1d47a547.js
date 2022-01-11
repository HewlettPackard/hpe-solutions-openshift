(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{436:function(e,t,o){e.exports=o.p+"assets/img/figure118.a967e308.png"},437:function(e,t,o){e.exports=o.p+"assets/img/figure119.e3be7b1f.png"},517:function(e,t,o){"use strict";o.r(t);var n=o(54),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"openshift-container-platform-at-the-edge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openshift-container-platform-at-the-edge"}},[e._v("#")]),e._v(" OpenShift Container Platform at the edge")]),e._v(" "),n("p",[e._v("Edge computing enables businesses become more proactive and dynamic by deploying applications and IT processing power closer to the devices and sensors that create or consume data, enabling them to gather, analyze and turn large data flows into actionable insights, faster. To make edge computing successful, consistency of application development and IT resource management is essential, especially when operating potentially hundreds to thousands of locations and/or clusters.")]),e._v(" "),n("ul",[n("li",[e._v("Many edge sites are smaller in physical size when compared to their larger core or regional data center counterparts, and trying to install hardware in a space that was not designed for it needs to be carefully planned out.")]),e._v(" "),n("li",[e._v("Heat, weather, radio-electrical emissions, lack of peripheral security, and the potential of having a limited supply of reliable power and cooling for equipment must also be addressed.")]),e._v(" "),n("li",[e._v("Network connectivity at remote locations that can vary greatly and often be slow or unreliable.")]),e._v(" "),n("li",[e._v("Minimal to no IT staff on-site to managed the IT solution.")])]),e._v(" "),n("p",[e._v("Red Hat OpenShift lets IT function operate consistently and innovate continuously regardless of where the applications reside today or where to place them tomorrow. It extends the capabilities of Kubernetes in smaller footprint options including 3-node cluster, remote worker node topology or a combination of both.")]),e._v(" "),n("h1",{attrs:{id:"remote-worker-nodes-at-the-network-edge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remote-worker-nodes-at-the-network-edge"}},[e._v("#")]),e._v(" Remote worker nodes at the network edge")]),e._v(" "),n("p",[e._v("A typical cluster with remote worker nodes combines on premise master and worker nodes with worker nodes in other locations that connect to the cluster. There are multiple use cases across different industries, such as telecommunications, retail, manufacturing, and government, for using a deployment pattern with remote worker nodes.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(436),alt:""}})]),e._v(" "),n("h1",{attrs:{id:"limitation-remote-worker-nodes-at-the-network-edge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limitation-remote-worker-nodes-at-the-network-edge"}},[e._v("#")]),e._v(" Limitation Remote worker nodes at the network edge")]),e._v(" "),n("p",[e._v("Remote worker nodes can introduce higher latency, intermittent loss of network connectivity, and other issues. Among the challenges in a cluster with remote worker node are:")]),e._v(" "),n("ul",[n("li",[e._v("Network separation: The OpenShift Container Platform control plane and the remote worker nodes must be able communicate with each other. Because of the distance between the control plane and the remote worker nodes, network issues could prevent this communication.")]),e._v(" "),n("li",[e._v("Power outage: Because the control plane and remote worker nodes are in separate locations, a power outage at the remote location or at any point between the two can negatively impact your cluster.")]),e._v(" "),n("li",[e._v("Latency spikes or temporary reduction in throughput: As with any network, any changes in network conditions between your cluster and the remote worker nodes can negatively impact your cluster")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/openshift_container_platform/4.6/html/nodes/remote-worker-nodes-on-the-network-edge",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://access.redhat.com/documentation/en-us/openshift_container_platform/4.6/html/nodes/remote-worker-nodes-on-the-network-edge"),n("OutboundLink")],1)]),e._v(" "),n("h1",{attrs:{id:"three-node-edge-cluster-at-the-network-edge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#three-node-edge-cluster-at-the-network-edge"}},[e._v("#")]),e._v(" Three Node Edge Cluster at the Network Edge")]),e._v(" "),n("p",[e._v("This solution involves building the smallest possible cluster delivering a local control plane, local storage, and compute to meet the requirements of demanding edge workloads while ensuring continuity & deliver true high availability.")]),e._v(" "),n("ul",[n("li",[e._v("Continue to fully operate, regardless of WAN connection state.")]),e._v(" "),n("li",[e._v("Pack this into the smallest footprint possible.")]),e._v(" "),n("li",[e._v("Be cost effective at scale.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(437),alt:""}})]),e._v(" "),n("p",[n("strong",[e._v("Deploying 3 Node OCP Cluster")])]),e._v(" "),n("ol",[n("li",[e._v("Create install-config.yaml file by setting worker nodes to “0” as mentioned below.")])]),e._v(" "),n("p",[e._v("apiVersion: v1")]),e._v(" "),n("p",[e._v("baseDomain: <name of the base domain>")]),e._v(" "),n("p",[e._v("compute:")]),e._v(" "),n("p",[e._v("- hyperthreading: Enabled")]),e._v(" "),n("p",[e._v("name: worker")]),e._v(" "),n("p",[e._v("replicas: 0")]),e._v(" "),n("p",[e._v("controlPlane:")]),e._v(" "),n("p",[e._v("hyperthreading: Enabled")]),e._v(" "),n("p",[e._v("name: master")]),e._v(" "),n("p",[e._v("replicas: 3")]),e._v(" "),n("p",[e._v("metadata:")]),e._v(" "),n("p",[e._v("name: <name of the cluster, same as the new domain under the base domain created>")]),e._v(" "),n("p",[e._v("networking:")]),e._v(" "),n("p",[e._v("clusterNetworks:")]),e._v(" "),n("p",[e._v("- cidr: 12.128.0.0/14")]),e._v(" "),n("p",[e._v("hostPrefix: 23")]),e._v(" "),n("p",[e._v("networkType: OpenShiftSDN")]),e._v(" "),n("p",[e._v("serviceNetwork:")]),e._v(" "),n("p",[e._v("- 172.30.0.0/16")]),e._v(" "),n("p",[e._v("platform:")]),e._v(" "),n("p",[e._v("none: {}")]),e._v(" "),n("p",[e._v("pullSecret: ‘pull secret provided as per the Red Hat account’")]),e._v(" "),n("p",[e._v("sshKey: ‘ ssh key of the installer VM ’")]),e._v(" "),n("p",[e._v("NOTE: Refer to the “"),n("a",{attrs:{href:"#_Installer_machine"}},[e._v("Setting up installer vm")]),e._v("” section to setup a installer vm.")]),e._v(" "),n("ol",[n("li",[e._v("Execute the following command on the installer VM to create the manifest files and the ignition files required to install Red Hat OpenShift")])]),e._v(" "),n("p",[e._v("$ cd $BASE_DIR/installer")]),e._v(" "),n("p",[e._v("$ ansible-playbook playbooks/create_manifest_ignitions.yml")]),e._v(" "),n("p",[e._v("$ sudo chmod +r installer/igninitions/*.ign")]),e._v(" "),n("p",[e._v("The ignition files are generated on the installer VM within the folder /opt/hpe/solutions/ocp/hpe-solutions-openshift/DL/scalable/installer/ignitions.")]),e._v(" "),n("ol",[n("li",[e._v("Follow the ipxe approach to deploy 3 node cluster by setting worker node ip addres and mac address empty in “secret.yaml” file")])]),e._v(" "),n("p",[e._v("NOTE: Please refer to the “"),n("a",{attrs:{href:"#_Red_Hat_CoreOS"}},[e._v("Deploying OCP using ipxe method")]),e._v("” section to deploy ocp cluster. Make sure workers mac addresses and ip addresses are set to empty before proceeding with installation.")]),e._v(" "),n("ol",[n("li",[e._v("Once the cluster is up and running, user can go ahead deploy the sample application as mentioned in section “"),n("a",{attrs:{href:"#_Validating_OpenShift_Container"}},[e._v("deploying wordpress")]),e._v("”.")])]),e._v(" "),n("p",[e._v("NOTE: Additional worker node can be added by setting master schdulable to “false” in scheduler file. Scheduler file can be edited using following command. “oc edit scheduler”")])])}),[],!1,null,null,null);t.default=a.exports}}]);