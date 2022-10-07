(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(e,a,t){e.exports=t.p+"assets/img/f7.7adf6c1c.png"},315:function(e,a,t){"use strict";t.r(a);var s=t(13),o=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-rhocp-cluster-using-ansible-playbooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhocp-cluster-using-ansible-playbooks"}},[e._v("#")]),e._v(" Deploying RHOCP cluster using Ansible playbooks")]),e._v(" "),a("p",[e._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to deploy RHOCP cluster. You can use one of the following two methods to deploy RHOCP cluster:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Run a consolidated playbook:")]),e._v(" This method includes a single playbook for deploying the entire solution. This site.yml playbook contains a script that performs all the tasks starting from the OS deployment until the RHOCP cluster is successfully installed and running. To run LTI using a consolidated playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts site.yml\n")])])]),a("ul",[a("li",[a("strong",[e._v("Run individual playbooks:")]),e._v(" This method includes multiple playbooks with scripts that enable you to deploy specific parts of the solution depending on your requirements. The playbooks in this method must be executed in a specific sequence to deploy the solution. The following table includes the purpose of each playbook required for the deployment:")])]),e._v(" "),a("p",[a("strong",[e._v("TABLE")]),e._v(" "),a("strong",[e._v("7")]),e._v(" RHOCP cluster deployment using Ansible playbooks")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Playbook")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("rhel8_os_depl.oyment.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to deploy RHEL 8.6 OS on BareMetal servers.")])]),e._v(" "),a("tr",[a("td",[e._v("copy_ssh_headnode.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to copy the SSH public key from the installer machine to the head nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("prepare_rhel_hosts.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to prepare nodes for the RHOCP head nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("ntp.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to create NTP setup to enable time synchronization on head nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("binddns.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to deploy Bind DNS on three head nodes and acts as active-passive cluster configuration.")])]),e._v(" "),a("tr",[a("td",[e._v("haproxy.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to deploy haproxy on the head nodes and acts as active-active cluster configuration.")])]),e._v(" "),a("tr",[a("td",[e._v("squid_proxy.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to deploy the Squid proxy on the head nodes to get web access.")])]),e._v(" "),a("tr",[a("td",[e._v("download_ocp_packages.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to download the required RHOCP packages.")])]),e._v(" "),a("tr",[a("td",[e._v("generate_manifest.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to generate the manifest files.")])]),e._v(" "),a("tr",[a("td",[e._v("storage_pool.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to create the storage pools on the head nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("rhel7_installerVM.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to create a RHEL 7 installer machine, which will also be used as an installer at a later stage.")])]),e._v(" "),a("tr",[a("td",[e._v("copy_ssh_installerVM.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to copy the SSH public key to the RHEL 7 installer machine.")])]),e._v(" "),a("tr",[a("td",[e._v("prepare_rhel7_installer.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to prepare the RHEL 7 installer.")])]),e._v(" "),a("tr",[a("td",[e._v("copy_ocp_tool.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to copy the RHOCP tools from the current installer to the head nodes and RHEL 7 installer.")])]),e._v(" "),a("tr",[a("td",[e._v("deploy_ipxe_ocp.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to deploy the iPXE server on the head nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("ocp_vm.yml")]),e._v(" "),a("td",[e._v("This playbook contains the script to create bootstrap and master nodes.")])])])]),e._v(" "),a("p",[e._v("To run individual playbooks:")]),e._v(" "),a("ul",[a("li",[e._v("Do one of the following:")]),e._v(" "),a("li",[e._v("Edit site.yml file and add a comment for all the playbooks you do not want to execute.")])]),e._v(" "),a("p",[e._v("For example, add the following comments in the site.yml file to deploy RHEL 8.6 OS:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("import_playbook: playbooks/rhel8_os_deployment.yml\n\n$ import_playbook: playbooks/copy_ssh_headnode.yml\n\n$ import_playbook: playbooks/prepare_rhel_hosts.yml\n\n$ import_playbook: playbooks/ntp.yml\n\n$ mport_playbook: playbooks/binddns.yml\n\n$ import_playbook: playbooks/haproxy.yml\n\n$ import_playbook: playbooks/squid_proxy.yml\n\n$ import_playbook: playbooks/download_ocp_packages.yml\n\n$ import_playbook: playbooks/generate_manifest.yml\n\n$ import_playbook: playbooks/storage_pool.yml\n\n$ import_playbook: playbooks/rhel7_installerVM.yml\n\n$ import_playbook: playbooks/copy_ssh_installerVM.yml\n\n$ import_playbook: playbooks/prepare_rhel7_installer.yml\n\n$ import_playbook: playbooks/copy_ocp_tool.yml\n\n$ import_playbook: playbooks/deploy_ipxe_ocp.yml\n\n$ import_playbook: playbooks/ocp_vm.yml\n")])])]),a("ul",[a("li",[e._v("Run the individual YAML files using the following command:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("yaml_filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".yml\n")])])]),a("p",[e._v("For example, run the following YAML file to deploy RHEL 8.6 OS:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/rhel8_os_deployment.yml\n")])])]),a("p",[e._v("For more information on executing individual playbooks, see the consecutive sections.")]),e._v(" "),a("p",[a("strong",[e._v("Deploying RHEL 8.6 OS on baremetal servers")])]),e._v(" "),a("p",[e._v("This section describes how to run the playbook that contains the script for deploying RHEL 8.6 OS on BareMetal servers.")]),e._v(" "),a("p",[e._v("To deploy RHEL 8.6 OS on the head nodes:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Navigate to the /opt/NGS-OpenShift/ directory on the head node.")])]),e._v(" "),a("li",[a("p",[e._v("Run the following playbook:")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/rhel8_os_deployment.yml\n")])])]),a("p",[e._v("Copying SSH key to head nodes")]),e._v(" "),a("p",[e._v("Once the OS is installed on the head nodes, copy the ssh key from the installer machine to the head nodes. It uses playbook that contains the script to copy the SSH public key from the installer machine to the head nodes.")]),e._v(" "),a("p",[e._v("To copy the SSH key to the head node:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/copy_ssh_headnode.yml\n")])])]),a("p",[e._v("Setting up head nodes")]),e._v(" "),a("p",[e._v("This section describes how to run the playbook that contains the script to prepare nodes for the RHOCP head nodes.")]),e._v(" "),a("p",[e._v("To register the head nodes to Red Hat subscription and download and install KVM Virtualization packages:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/prepare_rhel_hosts.yml\n")])])]),a("p",[a("strong",[e._v("Setting up NTP server on head nodes")]),e._v("**  **")]),e._v(" "),a("p",[e._v("This section describes how to run the playbook that contains the script to set up NTP server and enable time synchronization on all head nodes.")]),e._v(" "),a("p",[e._v("To set up NTP server on head nodes:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/ntp.yml\n")])])]),a("p",[a("strong",[e._v("Deploying Bind DNS on head nodes")])]),e._v(" "),a("p",[e._v("This section describes how to deploy Bind DNS service on all three head nodes for active-passive cluster configuration.")]),e._v(" "),a("p",[e._v("To deploy Bind DNS service on head nodes:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/binddns.yml\n")])])]),a("p",[a("strong",[e._v("Deploying HAProxy on head nodes")])]),e._v(" "),a("p",[e._v("The RHOCP 4.10 uses an external load balancer to communicate from outside the cluster with services running inside the cluster. This section describes how to deploy HAProxy on all three head nodes for active-active cluster configuration.")]),e._v(" "),a("p",[e._v("To deploy HAProxy server configuration on head nodes:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/haproxy.yml\n")])])]),a("p",[a("strong",[e._v("Deploying Squid proxy on head nodes")])]),e._v(" "),a("p",[e._v("Squid is a proxy server that caches content to reduce bandwidth and load web pages more quickly. This section describes how to set up Squid as a proxy for HTTP, HTTPS, and FTP protocol, as well as authentication and restricting access. It uses a playbook that contains the script to deploy the Squid proxy on the head nodes to get web access.")]),e._v(" "),a("p",[e._v("To deploy Squid proxy server on head nodes:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/squid_proxy.yml\n")])])]),a("p",[a("strong",[e._v("Downloading RHOCP packages")])]),e._v(" "),a("p",[e._v("This section provides details about downloading the required RHOCP 4.10 packages using a playbook.")]),e._v(" "),a("p",[e._v("To download RHOCP 4.10 packages:")]),e._v(" "),a("ul",[a("li",[e._v("Download the required packages on the installer VM with the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/download_ocp_packages.yml\n")])])]),a("p",[a("strong",[e._v("Generating Kubernetes manifest files")])]),e._v(" "),a("p",[e._v("The manifests and ignition files define the master node and worker node configuration and are key components of the RHOCP 4.10 installation. This section describes how to use the generate_manifest.yml playbook that contains the script to generate the manifest files.")]),e._v(" "),a("p",[e._v("To generate Kubernetes manifest files:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/generate_manifest.yml\n")])])]),a("p",[a("strong",[e._v("Creating storage pools on head nodes")])]),e._v(" "),a("p",[e._v("This section describes how to use the storage_pool.yml playbook that contains the script to create the storage pools on the head nodes.")]),e._v(" "),a("p",[e._v("To create the storage pools:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/storage_pool.yml\n")])])]),a("p",[a("strong",[e._v("Creating RHEL 7 installer machine")])]),e._v(" "),a("p",[e._v("This section describes how to create a RHEL 7 installer machine using the rhel7_installerVM.yml playbook. This installer machine is also used as an installer for deploying the RHOCP cluster and adding RHEL 8.6 worker nodes.")]),e._v(" "),a("p",[e._v("To create a RHEL 7 installer machine:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/rhel7_installerVM.yml\n")])])]),a("p",[e._v("Copying SSH key to RHEL 7 installer machine")]),e._v(" "),a("p",[e._v("This section describes how to copy the SSH public key to the RHEL 7 installer machine using the copy_ssh_installerVM.yml playbook.")]),e._v(" "),a("p",[e._v("To copy the SSH public key to the RHEL 7 installer machine:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/copy_ssh_installerVM.yml\n")])])]),a("p",[e._v("Setting up RHEL 7 installer")]),e._v(" "),a("p",[e._v("This section describes how to set up the RHEL 7 installer using the prepare_rhel7_installer.yml playbook.")]),e._v(" "),a("p",[e._v("To set up the RHEL 7 installer:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/prepare_rhel7_installer.yml\n")])])]),a("p",[e._v("Copying RHOCP tools")]),e._v(" "),a("p",[e._v("This section describes how to copy the RHOCP tools from the present installer to head nodes and RHEL 7 installer using the copy_ocp_tool.yml playbook.")]),e._v(" "),a("p",[e._v("To copy the RHOCP tools to the head nodes and RHEL 7 installer:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/copy_ocp_tool.yml\n")])])]),a("p",[e._v("Deploying iPXE server on head nodes")]),e._v(" "),a("p",[e._v("This section describes how to deploy the iPXE server on the head nodes using the deploy_ipxe_ocp.yml playbook.")]),e._v(" "),a("p",[e._v("To deploy the iPXE server:")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/deploy_ipxe_ocp.yml\n")])])]),a("p",[e._v("Creating bootstrap and master nodes")]),e._v(" "),a("p",[e._v("This section describes how to create bootstrap and master nodes using the scripts in the ocp_vm.yml playbook.")]),e._v(" "),a("p",[e._v("To create bootstrap and master VMs on Kernel-based Virtual Machine (KVM):")]),e._v(" "),a("ul",[a("li",[e._v("Run the following playbook:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/ocp_vm.yml\n")])])]),a("p",[a("strong",[e._v("Deploying RHOCP cluster")])]),e._v(" "),a("p",[e._v("Once the playbooks are executed successfully and the Bootstrap and master nodes are deployed with the RHCOS, deploy the RHOCP cluster.")]),e._v(" "),a("p",[e._v("To deploy the RHOCP cluster:")]),e._v(" "),a("ol",[a("li",[e._v("Login to the installer VM.")])]),e._v(" "),a("p",[e._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel7_installerVM.yml playbook. For more information, see the "),a("a",{attrs:{href:"bookmark://_Creating_RHEL_7"}},[e._v("Creating RHEL 7 installer machine")]),e._v(" section.")]),e._v(" "),a("ol",[a("li",[e._v("Add the kubeconfig path in the environment variables using the following command:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/opt/NGS-OpenShift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeconfig\n")])])]),a("ol",[a("li",[e._v("Run the following command:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ openshift-install wait-for bootstrap-complete "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/opt/NGS-OpenShift /playbooks/roles/generate_ignition_files/ignitions --log-level debug\n")])])]),a("ol",[a("li",[e._v("Complete the RHOCP 4.10 cluster installation with the following command:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$openshift")]),e._v("-install wait-for install-complete "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/opt/NGS-OpenShift /playbooks/roles/generate_ignition_files/ignitions --log-level"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("debug\n")])])]),a("p",[e._v("The following output is displayed:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("DEBUG OpenShift Installer v4.10\n\nDEBUG Built from commit 6ed04f65b0f6a1e11f10afe658465ba8195ac459 \n\nINFO Waiting up to 30m0s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster at https://api.rrocp.pxelocal.local:6443 to initialize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". \n\nDEBUG Still waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster to initialize: Working towards "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.10")]),e._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),e._v("% complete \n\nDEBUG Still waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster to initialize: Working towards "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.10")]),e._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),e._v("% complete, waiting on authentication, console,image-registry \n\nDEBUG Still waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster to initialize: Working towards "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.10")]),e._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("99")]),e._v("% complete \n\nDEBUG Still waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster to initialize: Working towards "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.10")]),e._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% complete, waiting on image-registry \n\nDEBUG Still waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster to initialize: Cluster operator image-registry is still updating \n\nDEBUG Still waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the cluster to initialize: Cluster operator image-registry is still updating \n\nDEBUG Cluster is initialized \n\nINFO Waiting up to 10m0s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the openshift-console route to be created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nDEBUG Route found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" openshift-console namespace: console \n\nDEBUG Route found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" openshift-console namespace: downloads \n\nDEBUG OpenShift console route is created \n\nINFO Install complete"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" \n\nINFO Access the OpenShift web-console here: https://console-openshift-console.apps.ocp.ngs.local\n\nINFO Login to the console with user: kubeadmin, password: a6hKv-okLUA-Q9p3q-UXLc3\n\nThe RHOCP cluster is successfully installed.\n")])])]),a("ol",[a("li",[e._v("After the installation is complete, check the status of the created cluster:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ oc get nodes\n")])])]),a("p",[a("strong",[e._v("Running Red Hat OpenShift Container Platform Console")])]),e._v(" "),a("p",[e._v("Prerequisites:")]),e._v(" "),a("ul",[a("li",[e._v("The RHOCP cluster installation must be complete.")])]),e._v(" "),a("p",[a("strong",[e._v("NOTE")])]),e._v(" "),a("p",[e._v("The installer machine provides the Red Hat OpenShift Container Platform Console link and login details when the RHOCP cluster installation is complete.")]),e._v(" "),a("p",[e._v("To access the Red Hat OpenShift Container Platform Console:")]),e._v(" "),a("ol",[a("li",[e._v("Open a web browser and enter the following link:")])]),e._v(" "),a("p",[e._v("https://console-openshift-console.apps.< customer.defined.domain>")]),e._v(" "),a("p",[e._v("Sample one for reference:  https://console-openshift-console.apps.ocp.ngs.local")]),e._v(" "),a("ol",[a("li",[e._v("Log in to the Red Hat OpenShift Container Platform Console with the following credentials:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Username: kubeadmin\n Password: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[a("strong",[e._v("NOTE")])]),e._v(" "),a("p",[e._v("If the password is lost or forgotten, search for the kubeadmin-password file located in the /opt/NGS-OpenShift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeadmin-password directory on the installer machine.")]),e._v(" "),a("p",[e._v("The following figure shows the Red Hat OpenShift Container Platform Console after successful deployment:")]),e._v(" "),a("p",[a("img",{attrs:{src:t(288),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("FIGURE")]),e._v(" "),a("strong",[e._v("7")]),e._v(" Red Hat OpenShift Container Platform Console login screen")])])}),[],!1,null,null,null);a.default=o.exports}}]);