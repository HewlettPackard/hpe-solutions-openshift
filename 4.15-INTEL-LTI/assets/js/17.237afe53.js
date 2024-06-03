(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{304:function(t,a,r){t.exports=r.p+"assets/img/figure-virt19.3abf13a0.png"},305:function(t,a,r){t.exports=r.p+"assets/img/figure-virt21.5127a356.png"},306:function(t,a,r){t.exports=r.p+"assets/img/figure-virt22.5f5d4ea3.png"},307:function(t,a,r){t.exports=r.p+"assets/img/figure-virt23.05eb78f0.png"},308:function(t,a,r){t.exports=r.p+"assets/img/figure-virt24.246d6419.png"},309:function(t,a,r){t.exports=r.p+"assets/img/figure-virt25.0380f731.png"},369:function(t,a,r){"use strict";r.r(a);var i=r(14),e=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migration-toolkit-for-virtualization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-toolkit-for-virtualization"}},[t._v("#")]),t._v(" Migration Toolkit for Virtualization")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("The Migration Toolkit for Virtualization (MTV) enables you to migrate virtual machines from VMware vSphere, Red Hat Virtualization,\nor OpenStack to OpenShift Virtualization running on Red Hat OpenShift Virtualization platform.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(304),alt:""}}),t._v(" "),a("strong",[t._v("FIGURE 39")]),t._v(" Migration Toolkit for Virtualization supported providers")]),t._v(" "),a("p",[t._v("MTV simplifies the migration process, allowing you to seamlessly move VM workloads to OpenShift Virtualization")]),t._v(" "),a("p",[t._v("MTV supports Cold migration which is the default migration type. The source virtual machines are shutdown while the data is copied.\nCold migration from")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("VMware vSphere")])]),t._v(" "),a("li",[a("p",[t._v("Red Hat Virtualization (RHV)")])]),t._v(" "),a("li",[a("p",[t._v("OpenStack")])]),t._v(" "),a("li",[a("p",[t._v("Remote OpenShift Virtualization clusters")])])]),t._v(" "),a("p",[t._v("MTV supports warm migration from VMware vSphere and from RHV. In warm migration most of the data is copied during the pre-copy stage\nwhile the source virtual machines (VMs) are running. Then the VMs are shut down and the remaining data is copied during the cutover stage")]),t._v(" "),a("h2",{attrs:{id:"installing-mtv-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-mtv-operator"}},[t._v("#")]),t._v(" Installing MTV Operator")]),t._v(" "),a("p",[t._v("You can install MTV operator using web console and CLI")]),t._v(" "),a("h3",{attrs:{id:"installing-mtv-operator-using-web-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-mtv-operator-using-web-console"}},[t._v("#")]),t._v(" Installing MTV Operator using web console")]),t._v(" "),a("ol",[a("li",[t._v("In the web console, navigate to Operators → OperatorHub.")]),t._v(" "),a("li",[t._v("Use the Filter by keyword field to search for mtv-operator.")]),t._v(" "),a("li",[t._v("Click the Migration Toolkit for Virtualization Operator tile and then click Install.")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(305),alt:""}}),t._v(" "),a("strong",[t._v("FIGURE 40")]),t._v(" Migration Toolkit Operator deployment")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("After the Migration Toolkit for Virtualization Operator is installed successfully create ForkliftController Instance.")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(306),alt:""}}),t._v(" "),a("strong",[t._v("FIGURE 41")]),t._v(" ForliftController Instance creation")]),t._v(" "),a("h3",{attrs:{id:"installing-mtv-operator-using-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-mtv-operator-using-cli"}},[t._v("#")]),t._v(" Installing MTV Operator using CLI")]),t._v(" "),a("ol",[a("li",[t._v("Create the openshift-mtv project:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" oc apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" -")]),t._v("\napiVersion: project.openshift.io/v1\nkind: Project\nmetadata:\n  name: openshift-mtv\nEOF")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Create an OperatorGroup CR called migration:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" oc apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" -")]),t._v("\napiVersion: operators.coreos.com/v1\nkind: OperatorGroup\nmetadata:\n  name: migration\n  namespace: openshift-mtv\nspec:\n  targetNamespaces:\n    - openshift-mtv\nEOF")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Create a Subscription CR for the Operator:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" oc apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" -")]),t._v('\napiVersion: operators.coreos.com/v1alpha1\nkind: Subscription\nmetadata:\n  name: mtv-operator\n  namespace: openshift-mtv\nspec:\n  channel: release-v2.6\n  installPlanApproval: Automatic\n  name: mtv-operator\n  source: redhat-operators\n  sourceNamespace: openshift-marketplace\n  startingCSV: "mtv-operator.v2.6.1"\nEOF')]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Create a ForkliftController CR:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" oc apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" -")]),t._v("\napiVersion: forklift.konveyor.io/v1beta1\nkind: ForkliftController\nmetadata:\n  name: forklift-controller\n  namespace: openshift-mtv\nspec:\n  olm_managed: true\nEOF")]),t._v("\n")])])]),a("h2",{attrs:{id:"migration-of-virtual-machines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-of-virtual-machines"}},[t._v("#")]),t._v(" Migration of Virtual Machines")]),t._v(" "),a("p",[t._v("You can migrate virtual machines to OpenShift Virtualization by using the MTV web console from following providers:")]),t._v(" "),a("ul",[a("li",[t._v("VMware vSphere")]),t._v(" "),a("li",[t._v("Red Hat Virtualization")]),t._v(" "),a("li",[t._v("OpenStack")]),t._v(" "),a("li",[t._v("Open Virtual Appliances (OVAs) that were created by VMware vSphere")]),t._v(" "),a("li",[t._v("OpenShift Virtualization")])]),t._v(" "),a("h3",{attrs:{id:"adding-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-providers"}},[t._v("#")]),t._v(" Adding providers")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In web console, navigate to Migration → Providers of Migration → Create Provider")])]),t._v(" "),a("li",[a("p",[t._v("Select the virtual machine provider (in this example we will go with VMWare)")])]),t._v(" "),a("li",[a("p",[t._v("Specify the required provider details")])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(307),alt:""}}),t._v(" "),a("strong",[t._v("FIGURE 42")]),t._v(" Additon of VMWare vSphere")]),t._v(" "),a("p",[t._v("Note: Provider the VDDK init image to accelerate migrations.")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("Choose one of the following options for validating CA certificates")]),t._v(" "),a("ul",[a("li",[t._v("Custom CA certificate")]),t._v(" "),a("li",[t._v("System CA certificate")]),t._v(" "),a("li",[t._v("Skip certificate validation")])])]),t._v(" "),a("li",[a("p",[t._v("Click Create Provider")])])]),t._v(" "),a("h3",{attrs:{id:"selecting-a-migration-network-for-a-vmware-source-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selecting-a-migration-network-for-a-vmware-source-provider"}},[t._v("#")]),t._v(" Selecting a migration network for a VMware source provider")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the web console, navigate to Migration → Providers for virtualization.")])]),t._v(" "),a("li",[a("p",[t._v("Click the host in the Hosts column beside a provider to view a list of hosts.")])]),t._v(" "),a("li",[a("p",[t._v("Select one or more hosts and click Select migration network.")])]),t._v(" "),a("li",[a("p",[t._v("Specify the following fields:")]),t._v(" "),a("ul",[a("li",[t._v("Network: Network name")]),t._v(" "),a("li",[t._v("ESXi host admin username: For example, root")]),t._v(" "),a("li",[t._v("ESXi host admin password: Password")]),t._v(" "),a("li",[t._v("Click Save.")])])]),t._v(" "),a("li",[a("p",[t._v("Verify that the status of each host is Ready.")])])]),t._v(" "),a("h2",{attrs:{id:"migration-plan-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-plan-creation"}},[t._v("#")]),t._v(" Migration plan creation")]),t._v(" "),a("h3",{attrs:{id:"creating-and-running-a-migration-plan-starting-on-providers-for-virtualization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-running-a-migration-plan-starting-on-providers-for-virtualization"}},[t._v("#")]),t._v(" Creating and running a migration plan starting on Providers for virtualization")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the web console, navigate to Migration → Providers for virtualization.")])]),t._v(" "),a("li",[a("p",[t._v("In the row of the appropriate source provider. And navigate to Virtual Machines tab.")])]),t._v(" "),a("li",[a("p",[t._v("Select the VMs you want to migrate and click Create migration plan.")])]),t._v(" "),a("li",[a("p",[t._v("Create migration plan displays the source provider's name and suggestions for a target provider and namespace, a network map, and a storage map.")])]),t._v(" "),a("li",[a("p",[t._v("Provide the required details to the editable fields.")])]),t._v(" "),a("li",[a("p",[t._v("Add mapping to edit a suggested network mapping or a storage mapping, or to add one or more additional mappings.")])])]),t._v(" "),a("p",[t._v("Mapped storage and network mapping can be viewed in Migration → StorageMaps for virtualization / Migration → NetworkMaps for virtualization")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Create migration plan.")])]),t._v(" "),a("p",[t._v("You can create the migration plan for the Source provider as well.")]),t._v(" "),a("h2",{attrs:{id:"running-a-migration-plan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-migration-plan"}},[t._v("#")]),t._v(" Running a migration plan")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the web console, navigate to Migration → Plans for virtualization.")])]),t._v(" "),a("li",[a("p",[t._v("You can see the list of migration plans created for source and target providers, the number of virtual machines (VMs) being migrated,\nthe status, and the description of each plan.")])]),t._v(" "),a("li",[a("p",[t._v("Click Start beside a migration plan to start the migration.")])]),t._v(" "),a("li",[a("p",[t._v("Click Start in the confirmation window that opens.")])])]),t._v(" "),a("p",[t._v("The Migration details by VM screen opens, displaying the migration's progress\nWarm migration only:\nThe pre-copy stage starts.\nClick Cutover to complete the migration.")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("Click a migration's Status to view the details of the migration.")])]),t._v(" "),a("li",[a("p",[t._v("The Migration details by VM screen opens, displaying the start and end times of the migration, the amount of data copied for each VM being migrated.")])])]),t._v(" "),a("h3",{attrs:{id:"warm-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warm-migration"}},[t._v("#")]),t._v(" Warm Migration")]),t._v(" "),a("p",[t._v("Warm migration copies most of the data during the precopy stage. Then the VMs are shut down and the remaining data is copied during the cutover stage.\nResults of a sample ubuntu virtual machine migration with 10GB OS disk and 10GB data disk.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(308),alt:""}}),t._v(" "),a("strong",[t._v("FIGURE 43")]),t._v(" Warm Migration output")]),t._v(" "),a("h4",{attrs:{id:"cold-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cold-migration"}},[t._v("#")]),t._v(" Cold Migration")]),t._v(" "),a("p",[t._v("During Cold migration the Virtual Machines (VMs) are shut down while the data is copied. Results of a sample ubuntu virtual machine migration with 10GB OS disk and 10GB data disk.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(309),alt:""}}),t._v(" "),a("strong",[t._v("FIGURE 44")]),t._v(" Cold Migration output")])])}),[],!1,null,null,null);a.default=e.exports}}]);