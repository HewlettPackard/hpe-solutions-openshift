(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{267:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAE2SURBVDhPY/wPBAxEACYoTRCgmPj02XOG3Xv2M/Dy8TB4ubsycHJyQmWQFL55+5ahpb2b4ffvP2AJGWkphsqyIjAbBOBWv3jxCq4IBJ48fcbw798/KA9JoZKiAgMHBweUx8Cgqa7GwMSE8AKKG1+8fMmwfeceBn5+PrAbkTViBM/r128YuLi5GLi5uKAiEABXCHLPoiUrGE6fPQe2Mjw0iMHGygKsCATgjrh56zZYEQiANK1as54B2TK4Qi40q1hZWbErlJeTZbCGWgWyOjI8GLev8QEUhceOn2TYsn0nAx8vL0NURCiDnKwMVAbJ6oePHjMsXbGa4ePHTwyPnzxlmDxtJlQGAuAKv337BmVBwLdv3xn+/P0L5SEpBEWhsJAQlMfAYGpsxMDCzAzlkeAZhP/xAgYGABivf09+EIdPAAAAAElFTkSuQmCC"},281:function(e,a,t){e.exports=t.p+"assets/img/figure-virt14.588e8482.png"},312:function(e,a,t){e.exports=t.p+"assets/img/figure-virt1.79092c5d.png"},313:function(e,a,t){e.exports=t.p+"assets/img/figure-virt2.06ec7e59.png"},314:function(e,a,t){e.exports=t.p+"assets/img/figure-virt3.d86f1383.png"},315:function(e,a,t){e.exports=t.p+"assets/img/figure-virt4.293e8018.png"},316:function(e,a,t){e.exports=t.p+"assets/img/figure-virt5.496d8594.png"},317:function(e,a,t){e.exports=t.p+"assets/img/figure-virt6.a5532073.png"},318:function(e,a,t){e.exports=t.p+"assets/img/figure-virt7.88dd9ebe.png"},319:function(e,a,t){e.exports=t.p+"assets/img/figure-virt8.ab2626b7.png"},320:function(e,a,t){e.exports=t.p+"assets/img/figure-virt9.a4d73d11.png"},321:function(e,a,t){e.exports=t.p+"assets/img/figure-virt10.e6be55db.png"},322:function(e,a,t){e.exports=t.p+"assets/img/figure-virt11.8bc6d796.png"},323:function(e,a,t){e.exports=t.p+"assets/img/figure-virt12.cfa91e6d.png"},324:function(e,a,t){e.exports=t.p+"assets/img/figure-virt13.454141ee.png"},325:function(e,a,t){e.exports=t.p+"assets/img/figure-virt16.df019a9a.png"},326:function(e,a,t){e.exports=t.p+"assets/img/figure-virt17.cc2b5c9f.png"},327:function(e,a,t){e.exports=t.p+"assets/img/figure-virt26.7ce848cf.png"},372:function(e,a,t){"use strict";t.r(a);var n=t(14),i=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"install-and-configure-openshift-virtualization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-openshift-virtualization"}},[e._v("#")]),e._v(" Install and configure OpenShift Virtualization")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v('RedHat OpenShift Virtualization stands as a cornerstone of Red Hat\'s OpenShift\nContainer Platform, seamlessly blending virtual machines and containers to offer\na unified management interface. This integration empowers organizations to efficiently\ndeploy both modern and traditional applications, encompassing virtual machines,\ncontainers, and serverless functions within a single platform. Built upon the\n"container-native virtualization" concept, driven by the KubeVirt project, it\nharnesses the RHEL KVM hypervisor to seamlessly merge virtual machines with\nKubernetes and KubeVirt for streamlined management and orchestration. Through\nthis infrastructure, OpenShift Virtualization enables the coexistence of virtual\nmachines and containers within a Kubernetes environment, providing a cohesive\nsolution for workload management.')]),e._v(" "),a("p",[e._v("OpenShift Virtualization adds new objects into your OpenShift Container Platform\ncluster via Kubernetes custom resources to enable virtualization tasks.\nThese tasks include:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Creating and managing Linux and Windows virtual machines")])]),e._v(" "),a("li",[a("p",[e._v("Connecting to virtual machines through a variety of consoles and CLI tools")])]),e._v(" "),a("li",[a("p",[e._v("Importing and cloning existing virtual machines")])]),e._v(" "),a("li",[a("p",[e._v("Managing network interface controllers and storage disks attached to virtual machines")])]),e._v(" "),a("li",[a("p",[e._v("Live migrating virtual machines between nodes")])]),e._v(" "),a("li",[a("p",[e._v("An enhanced web console provides a graphical portal to manage these virtualized resources\nalongside the OpenShift Container Platform cluster containers and infrastructure.")])]),e._v(" "),a("li",[a("p",[e._v("OpenShift Virtualization is tested with OpenShift Data Foundation (ODF) and Alletra 6070.")])]),e._v(" "),a("li",[a("p",[e._v("OpenShift Virtualization allows the usage with either the [OVN-Kubernetes] (opens new window)or\nthe [OpenShiftSDN] (opens new window)default Container Network Interface (CNI) network provider")])])]),e._v(" "),a("h2",{attrs:{id:"enabling-openshift-virtualization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-openshift-virtualization"}},[e._v("#")]),e._v(" Enabling OpenShift Virtualization")]),e._v(" "),a("p",[a("img",{attrs:{src:t(312),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 23")]),e._v(" Red Hat OpenShift Virtualization deployment flow")]),e._v(" "),a("h2",{attrs:{id:"installing-openshift-virtualization-operator-from-operatorhub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-openshift-virtualization-operator-from-operatorhub"}},[e._v("#")]),e._v(" Installing OpenShift Virtualization Operator from OperatorHub")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into the OpenShift Container Platform web console and navigate to Operators → OperatorHub")])]),e._v(" "),a("li",[a("p",[e._v("Type OpenShift Virtualization and Select OpenShift Virtualization tile")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(313),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 24")]),e._v(" OpenShift Virtualization in OperatorHub")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v('Click and Install the Operator to the "openshift-cnv" namespace')])]),e._v(" "),a("p",[a("img",{attrs:{src:t(314),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 25")]),e._v(" Inputs for the OpenShift Virtualization operator")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Once OpenShift Virtualization is successfully installed , Create HyperConverged Custom resource")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(315),alt:""}})]),e._v(" "),a("p",[a("img",{attrs:{src:t(316),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 26")]),e._v(" Creation of HyperConverged in OpenShift Virtualization operator")]),e._v(" "),a("p",[e._v("After successful deployment of operator and creation of HyderConverged. Virtualization will be enabled in webconsole.")]),e._v(" "),a("h2",{attrs:{id:"network-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration"}},[e._v("#")]),e._v(" Network configuration")]),e._v(" "),a("p",[e._v('You would have internal pod network as default network after successful deployment of OpenShift Virtualization.\nFor additional network, we would deploy the network operator "NMState Operator" and configure Linux bridge network\nfor external VM access and live migration.')]),e._v(" "),a("p",[e._v("Administrators can also install SR-IOV Operator to manage SR-IOV network devices and MetalLB Operator for\nlifecycle management.")]),e._v(" "),a("h3",{attrs:{id:"configuring-a-linux-bridge-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-linux-bridge-network"}},[e._v("#")]),e._v(" Configuring a Linux bridge Network")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("To install NMState Operator, navigate to Operators → OperatorHub in webconsole")])]),e._v(" "),a("li",[a("p",[e._v("Type NMState, Select Kubernetes NMState Operator tile and Install the Operator")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(317),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 27")]),e._v(" Installation of NMState in OperatorHub")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v('Once the NMState operator is installed, Create a instance for "nmstate"')])]),e._v(" "),a("p",[a("img",{attrs:{src:t(318),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 28")]),e._v(" Inputs for NMState in operator")]),e._v(" "),a("h4",{attrs:{id:"creating-a-linux-bridge-nncp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-linux-bridge-nncp"}},[e._v("#")]),e._v(" Creating a Linux bridge NNCP")]),e._v(" "),a("p",[e._v("Create a NodeNetworkConfigurationPolicy (NNCP) manifest for a Linux bridge network for network interface card(enp1s0)\nand apply the created NNCP manifest")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("apiVersion: nmstate.io/v1\nkind: NodeNetworkConfigurationPolicy\nmetadata:\n  name: br1-policy\nspec:\n  desiredState:\n    interfaces:\n      - name: bridge1\n        type: linux-bridge\n        state: up\n        ipv4:\n          dhcp: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n          enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n        bridge:\n          options:\n            stp:\n              enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n          port:\n             - name: enp1s0           "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#NIC/Bond")]),e._v("\n")])])]),a("h4",{attrs:{id:"creating-a-linux-bridge-nad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-linux-bridge-nad"}},[e._v("#")]),e._v(" Creating a Linux bridge NAD")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log in to the OpenShift Container Platform web console and click Networking → NetworkAttachmentDefinitions")])]),e._v(" "),a("li",[a("p",[e._v("Click Create Network Attachment Definition (NAD). And provide the required details")])]),e._v(" "),a("li",[a("p",[e._v("Click the Network Type list and select CNV Linux bridge")])]),e._v(" "),a("li",[a("p",[e._v("Enter the name of the bridge (Previously created NodeNetworkConfigurationPolicy object as interfaces name\nex: bridge1) in the Bridge Name field")])]),e._v(" "),a("li",[a("p",[e._v("Click Create")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(319),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 29")]),e._v(" Creation of NAD")]),e._v(" "),a("h4",{attrs:{id:"creating-a-dedicated-network-for-live-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-dedicated-network-for-live-migration"}},[e._v("#")]),e._v(" Creating a dedicated network for live migration")]),e._v(" "),a("ol",[a("li",[e._v("Administrators have to create additional NAD for creating a dedicated live migration network.\nCreate a NAD manifest as below")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("apiVersion: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"k8s.cni.cncf.io/v1"')]),e._v("\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: migration-network \n  namespace: openshift-cnv \nspec:\n  config: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n    "cniVersion": "0.3.1",\n    "name": "migration-bridge",\n    "type": "macvlan",\n    "master": "enp1s1", \n    "mode": "bridge",\n    "ipam": {\n      "type": "whereabouts", \n      "range": "20.0.0.0/24" \n    }\n  }\'')]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v('Goto the custom resource of Hydercoverged that was created during "OpenShift Virtualization" operator deployment\nand Specify the created network name for "spec.liveMigrationConfig"')])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("apiVersion: hco.kubevirt.io/v1beta1\nkind: HyperConverged\nmetadata:\n  name: kubevirt-hyperconverged\nspec:\n  liveMigrationConfig:\n    completionTimeoutPerGiB: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("800")]),e._v("\n    network: migration-network  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#specify migration network name")]),e._v("\n    parallelMigrationsPerCluster: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n    parallelOutboundMigrationsPerNode: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n    progressTimeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("150")]),e._v("\n")])])]),a("h2",{attrs:{id:"storage-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-configuration"}},[e._v("#")]),e._v(" Storage configuration")]),e._v(" "),a("p",[e._v("Configure storage as stated in [Storage options] (../Additional-Features-and-Functionality/Storage.md#Storage options)")]),e._v(" "),a("h2",{attrs:{id:"create-a-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-virtual-machine"}},[e._v("#")]),e._v(" Create a virtual machine")]),e._v(" "),a("p",[e._v("The web console features an interactive wizard that guides you through General, Networking, Storage, Advanced, and Review steps to\nsimplify the process of creating virtual machines. All required fields are marked by a *. When the required fields are completed,\nyou can review and create your virtual machine.")]),e._v(" "),a("p",[e._v("Network Interface Cards (NICs) and storage disks can be created and attached to virtual machines after they have been created.")]),e._v(" "),a("p",[e._v("Use one of these procedures to create a virtual machine:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Creating virtual machines from templates")])]),e._v(" "),a("li",[a("p",[e._v("Creating virtual machines from instance types")])]),e._v(" "),a("li",[a("p",[e._v("Creating virtual machines from CLI")])])]),e._v(" "),a("h3",{attrs:{id:"creating-virtual-machines-from-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-virtual-machines-from-templates"}},[e._v("#")]),e._v(" Creating virtual machines from templates")]),e._v(" "),a("p",[e._v("You can create virtual machines from templates provided by Red Hat using web console. You can also create customized templates\nas per requirements.")]),e._v(" "),a("ol",[a("li",[e._v("Log into the OpenShift Container Platform web console and navigate to Virtualization → Catalog → Template Catalog")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(320),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 30")]),e._v(" Templates available by default in Virtualization")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v('Apply the filter "Boot source available".')])]),e._v(" "),a("li",[a("p",[e._v("Click the required template to view the details (for example: fedora)")])]),e._v(" "),a("li",[a("p",[e._v('Click "Quick create VirtualMachine" to create a VM from the template. You can customize the CPU/Memory/Storage as required.')])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(321),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 31")]),e._v(" Sample deployment of fedora VM using templates")]),e._v(" "),a("h3",{attrs:{id:"creating-virtual-machines-from-instance-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-virtual-machines-from-instance-types"}},[e._v("#")]),e._v(" Creating virtual machines from instance types")]),e._v(" "),a("ol",[a("li",[e._v("Log into the OpenShift Container Platform web console and navigate to Virtualization → Catalog  → Instance Types")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(322),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 32")]),e._v(" Virtual Machine creation from Catalog")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Select the bootable volumes")]),e._v(" "),a("ul",[a("li",[e._v('Images provided by RedHat, these images are available in "openshift-virtualization-os-images" namespace.')]),e._v(" "),a("li",[e._v("Click Add Volume. You can either use any of the existing volume where you have the boot images or you can upload images and\ncreate a new volume(PVC) and provide the required parameter.")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(323),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 33")]),e._v(" Add volumes to import OS images")])]),e._v(" "),a("li",[a("p",[e._v("Click the required boot volume.")])]),e._v(" "),a("li",[a("p",[e._v("Select the required Instance type")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(324),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 34")]),e._v(" Selection of Instance type and boot image")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v('Click "Create VirtualMachine" to create a VM from the instance types.')])]),e._v(" "),a("p",[e._v("You can Customize and create user Instance type as required by navigating to Virtualization → Instance Types → Create.")]),e._v(" "),a("h3",{attrs:{id:"creating-virtual-machines-from-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-virtual-machines-from-cli"}},[e._v("#")]),e._v(" Creating virtual machines from CLI")]),e._v(" "),a("ol",[a("li",[e._v("Create a VirtualMachine manifest required for creating a VM")])]),e._v(" "),a("p",[e._v("Below is an example manifest for creating fedora VM")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("apiVersion: kubevirt.io/v1\nkind: VirtualMachine\nmetadata:\n  name: my-vm\nspec:\n  running: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n  template:\n    metadata:\n      labels:\n        kubevirt.io/domain: my-vm\n    spec:\n      domain:\n        devices:\n          disks:\n          - disk:\n              bus: virtio\n            name: containerdisk\n          - disk:\n              bus: virtio\n            name: cloudinitdisk\n        resources:\n          requests:\n            memory: 8Gi\n      volumes:\n      - name: containerdisk\n        containerDisk:\n          image: kubevirt/fedora-cloud-registry-disk-demo\n      - name: cloudinitdisk\n        cloudInitNoCloud:\n          userData: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#cloud-config")]),e._v("\n            password: fedora\n            chpasswd: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" expire: False "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Apply the created manifest file for virtual machine creation.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("oc apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" file-name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".yaml\n")])])]),a("h2",{attrs:{id:"reading-viewing-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-viewing-virtual-machine"}},[e._v("#")]),e._v(" Reading/Viewing virtual machine")]),e._v(" "),a("p",[e._v("You can check the virtual machine status, Metrics , resources utilization (CPU, memory, storage) for overall cluster\nby navigate to Virtualization → Overview.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(325),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 35")]),e._v(" Overview Virtual machines in the Cluster")]),e._v(" "),a("p",[e._v("and access configuration details of VM's, networks and  storage volumes.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(326),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 36")]),e._v(" Overview of Sample Virtual machines deployed in the RHOCP platform")]),e._v(" "),a("h2",{attrs:{id:"updating-a-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-virtual-machine"}},[e._v("#")]),e._v(" Updating a virtual machine")]),e._v(" "),a("p",[e._v("You can update virtual machine configuration using CLI or from the web console.")]),e._v(" "),a("h3",{attrs:{id:"virtual-machine-configuration-using-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-configuration-using-cli"}},[e._v("#")]),e._v(" virtual machine configuration using CLI")]),e._v(" "),a("ol",[a("li",[e._v("Virtual machine configuration can be edit/updated")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("oc edit vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" vm-name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" namespace "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Apply the updated configuration")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("oc apply vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" vm_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" namespace "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"virtual-machine-configuration-using-web-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-configuration-using-web-console"}},[e._v("#")]),e._v(" virtual machine configuration using web console")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into the OpenShift Container Platform web console and navigate to Virtualization → VirtualMachines")])]),e._v(" "),a("li",[a("p",[e._v("Select the virtual machine\nFor example: addition of the disk\nnavigate to Configuration → Storage → Add disk\n"),a("img",{attrs:{src:t(281),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE 37")]),e._v(" Storage disk addition")]),e._v(" "),a("p",[e._v("Specify the fields like Source, Size, Storage class as required")]),e._v(" "),a("p",[e._v("Click Add\nwe can add additional networks, secrets, config map to virtual machines.")])])]),e._v(" "),a("p",[e._v("Some of the changes are applied once the virtual machine are restarted only. For restarting of any virtual machines\nnavigate to Virtualization → VirtualMachines\nClick the Options menu "),a("img",{attrs:{src:t(267),alt:""}}),e._v(" beside a virtual machine name and select Restart or select the virtual machine → Actions → Restart")]),e._v(" "),a("h2",{attrs:{id:"deleting-a-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-virtual-machine"}},[e._v("#")]),e._v(" Deleting a virtual machine")]),e._v(" "),a("p",[e._v("You can delete a virtual machine by using CLI or from the web console.")]),e._v(" "),a("h3",{attrs:{id:"delete-a-virtual-machine-using-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-virtual-machine-using-cli"}},[e._v("#")]),e._v(" Delete a virtual machine using CLI")]),e._v(" "),a("ol",[a("li",[e._v("Delete the virtual machine by executing the below command:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("oc delete vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" vm_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" namespace "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"delete-a-virtual-machine-using-web-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-virtual-machine-using-web-console"}},[e._v("#")]),e._v(" Delete a virtual machine using web console")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into the OpenShift Container Platform web console and navigate to Virtualization → VirtualMachines")])]),e._v(" "),a("li",[a("p",[e._v("Click the Options menu "),a("img",{attrs:{src:t(267),alt:""}}),e._v(" beside a virtual machine name and select Delete or Select the virtual machine → Actions → Delete")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(327),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"hot-plugging-a-vm-disks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hot-plugging-a-vm-disks"}},[e._v("#")]),e._v(" Hot-plugging a VM disks")]),e._v(" "),a("p",[e._v("You can add or remove virtual disks without stopping your virtual machine (VM). However, only data volumes and persistent volume claims (PVCs) can be hot-plugged and hot-unplugged; container disks cannot. A hot-plugged disk stays attached to the VM even after a reboot, and you must detach it to remove it from the VM.")]),e._v(" "),a("h4",{attrs:{id:"adding-a-disk-using-web-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-disk-using-web-console"}},[e._v("#")]),e._v(" Adding a disk using web console")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into the OpenShift Container Platform web console and navigate to Virtualization → VirtualMachines")])]),e._v(" "),a("li",[a("p",[e._v("Select any running virtul machine and navigate to Configuration → Storage → Add disk")]),e._v(" "),a("p",[a("img",{attrs:{src:t(281),alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Provide the details for the disk to be added and Save.")])])]),e._v(" "),a("h3",{attrs:{id:"adding-disk-using-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-disk-using-cli"}},[e._v("#")]),e._v(" Adding disk using CLI")]),e._v(" "),a("p",[e._v("You can hot plug and hot unplug a disk while a virtual machine (VM) is running by using the command line.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("virtctl addvolume "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("virtual-machine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("virtual-machine-instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --volume-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("datavolume"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("PVC"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--persist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--serial"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("label-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);