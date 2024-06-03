(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(t,e,a){t.exports=a.p+"assets/img/Aspose.Words.d1fc7ddd-52aa-4c6c-b4c8-7a1fb8d3e951.010.48c8f1fc.png"},209:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"deploying-rhocp-cluster-using-ansible-playbooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhocp-cluster-using-ansible-playbooks"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Deploying RHOCP cluster using Ansible playbooks")])]),t._v(" "),e("p",[t._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to deploy RHOCP cluster. You can use one of the following two methods to deploy RHOCP cluster:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Run a consolidated playbook:")]),t._v(" This method includes a single playbook for deploying the entire solution. This site.yml playbook contains a script that performs all the tasks starting from the OS deployment until the RHOCP cluster is successfully installed and running. To run LTI using a consolidated playbook:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts site.yml --ask-vault-pass\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The default password for the Ansible vault file is "),e("strong",[t._v("changeme")])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Run individual playbooks:")]),t._v(" This method includes multiple playbooks with scripts that enable you to deploy specific parts of the solution depending on your requirements. The playbooks in this method must be executed in a specific sequence to deploy the solution. The following table includes the purpose of each playbook required for the deployment:")])]),t._v(" "),e("p",[e("strong",[t._v("TABLE 8.")]),t._v(" RHOCP cluster deployment using Ansible playbooks")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Playbook")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rhel8_os_deployment.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to deploy RHEL 8.8 OS on BareMetal servers.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("copy_ssh_headnode.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to copy the SSH public key from the installer machine to the head nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prepare_rhel_hosts.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to prepare nodes for the RHOCP head nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ntp.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to create NTP setup to enable time synchronization on head nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("binddns.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to deploy Bind DNS on three head nodes and acts as active-passive cluster configuration.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("haproxy.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to deploy HAProxy on the head nodes and acts as active-active cluster configuration.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("squid_proxy.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to deploy the Squid proxy on the head nodes to get web access.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("storage_pool.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to create the storage pools on the head nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rhel8_installerVM.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to create a RHEL 8 installer machine, which will also be used as an installer at a later stage.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("copy_ssh_installerVM.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to copy the SSH public key to the RHEL 8 installer machine.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prepare_rhel8_installer.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to prepare the RHEL 8 installer.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("copy_scripts.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbooks contains the script to copy ansible code to rhel8 installer and headnodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("download_ocp_packages.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to download the required RHOCP packages.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("generate_manifest.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to generate the manifest files.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("copy_ocp_tool.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to copy the RHOCP tools from the current installer to the head nodes and RHEL 8 installer.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("deploy_ipxe_ocp.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to deploy the iPXE server on the head nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ocp_vm.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to create bootstrap and master nodes.")])])])]),t._v(" "),e("p",[t._v("To run individual playbooks:")]),t._v(" "),e("ul",[e("li",[t._v("Do one of the following:")])]),t._v(" "),e("ol",[e("li",[t._v("Edit site.yml file and add a comment for all the playbooks you do not want to execute.")])]),t._v(" "),e("p",[t._v("For example, add the following comments in the site.yml file to deploy RHEL 8.8 OS:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("- import_playbook: playbooks/rhel8_os_deployment.yml\n- import_playbook: playbooks/copy_ssh_headnode.yml\n- import_playbook: playbooks/prepare_rhel_hosts.yml\n- import_playbook: playbooks/ntp.yml\n- import_playbook: playbooks/binddns.yml\n- import_playbook: playbooks/haproxy.yml\n- import_playbook: playbooks/squid_proxy.yml\n- import_playbook: playbooks/storage_pool.yml\n- import_playbook: playbooks/rhel8_installerVM.yml\n- import_playbook: playbooks/copy_ssh_installerVM.yml\n- import_playbook: playbooks/prepare_rhel8_installer.yml\n- import_playbook: playbooks/download_ocp_packages.yml\n- import_playbook: playbooks/generate_manifest.yml\n- import_playbook: playbooks/copy_ocp_tool.yml\n- import_playbook: playbooks/deploy_ipxe_ocp.yml\n- import_playbook: playbooks/ocp_vm.yml\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Run the individual YAML files using the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("yaml_filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".yml --ask-vault-pass\n")])])]),e("p",[t._v("For example, run the following YAML file to deploy RHEL 8.8 OS:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/rhel8_os_deployment.yml --ask-vault-pass\n")])])]),e("p",[t._v("For more information on executing individual playbooks, see the consecutive sections.")]),t._v(" "),e("h3",{attrs:{id:"deploying-rhel8-os-on-baremetal-servers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhel8-os-on-baremetal-servers"}},[t._v("#")]),t._v(" Deploying RHEL8 OS on baremetal servers")]),t._v(" "),e("p",[t._v("This section describes how to run the playbook that contains the script for deploying RHEL 8.8 OS on BareMetal servers.\nTo deploy RHEL 8.8 OS on the head nodes:")]),t._v(" "),e("ol",[e("li",[t._v("Navigate to the $BASE_DIR("),e("strong",[t._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/")]),t._v(") directory on the installer.")]),t._v(" "),e("li",[t._v("Run the following playbook:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/rhel8_os_deployment.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"copying-ssh-key-to-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copying-ssh-key-to-head-nodes"}},[t._v("#")]),t._v(" Copying SSH key to head nodes")]),t._v(" "),e("p",[t._v("Once the OS is installed on the head nodes, copy the ssh key from the installer machine to the head nodes. It uses playbook that contains the script to copy the SSH public key from the installer machine to the head nodes.")]),t._v(" "),e("p",[t._v("To copy the SSH key to the head node run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/copy_ssh_headnode.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"setting-up-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-head-nodes"}},[t._v("#")]),t._v(" Setting up head nodes")]),t._v(" "),e("p",[t._v("This section describes how to run the playbook that contains the script to prepare nodes for the RHOCP head nodes.")]),t._v(" "),e("p",[t._v("To register the head nodes to Red Hat subscription and download and install KVM Virtualization packages run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/prepare_rhel_hosts.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"setting-up-ntp-server-on-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-ntp-server-on-head-nodes"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Setting up NTP server on head nodes")])]),t._v(" "),e("p",[t._v("This section describes how to run the playbook that contains the script to set up NTP server and enable time synchronization on all head nodes.")]),t._v(" "),e("p",[t._v("To set up NTP server on head nodes run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/ntp.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"deploying-bind-dns-on-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-bind-dns-on-head-nodes"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Deploying Bind DNS on head nodes")])]),t._v(" "),e("p",[t._v("This section describes how to deploy Bind DNS service on all three head nodes for active-passive cluster configuration.")]),t._v(" "),e("p",[t._v("To deploy Bind DNS service on head nodes run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/binddns.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"deploying-haproxy-on-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-haproxy-on-head-nodes"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Deploying HAProxy on head nodes")])]),t._v(" "),e("p",[t._v("The RHOCP 4.14 uses an external load balancer to communicate from outside the cluster with services running inside the cluster. This section describes how to deploy HAProxy on all three head nodes for active-active cluster configuration.")]),t._v(" "),e("p",[t._v("To deploy HAProxy server configuration on head nodes run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/haproxy.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"deploying-squid-proxy-on-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-squid-proxy-on-head-nodes"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Deploying Squid proxy on head nodes")])]),t._v(" "),e("p",[t._v("Squid is a proxy server that caches content to reduce bandwidth and load web pages more quickly. This section describes how to set up Squid as a proxy for HTTP, HTTPS, and FTP protocol, as well as authentication and restricting access. It uses a playbook that contains the script to deploy the Squid proxy on the head nodes to get web access.")]),t._v(" "),e("p",[t._v("To deploy Squid proxy server on head nodes run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/squid_proxy.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"creating-storage-pools-on-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-storage-pools-on-head-nodes"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Creating storage pools on head nodes")])]),t._v(" "),e("p",[t._v("This section describes how to use the storage_pool.yml playbook that contains the script to create the storage pools on the head nodes.")]),t._v(" "),e("p",[t._v("To create the storage pools run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/storage_pool.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"creating-rhel-8-installer-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-rhel-8-installer-machine"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Creating RHEL 8 installer machine")])]),t._v(" "),e("p",[t._v("This section describes how to create a RHEL 8 installer machine using the rhel8_installerVM.yml playbook. This installer machine is also used as an installer for deploying the RHOCP cluster and adding RHEL 8.8 worker nodes.")]),t._v(" "),e("p",[t._v("To create a RHEL 8 installer machine run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/rhel8_installerVM.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"copying-ssh-key-to-rhel-8-installer-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copying-ssh-key-to-rhel-8-installer-machine"}},[t._v("#")]),t._v(" Copying SSH key to RHEL 8 installer machine")]),t._v(" "),e("p",[t._v("This section describes how to copy the SSH public key to the RHEL 8 installer machine using the copy_ssh_installerVM.yml playbook.")]),t._v(" "),e("p",[t._v("To copy the SSH public key to the RHEL 8 installer machine run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/copy_ssh_installerVM.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"setting-up-rhel-8-installer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-rhel-8-installer"}},[t._v("#")]),t._v(" Setting up RHEL 8 installer")]),t._v(" "),e("p",[t._v("This section describes how to set up the RHEL 8 installer using the prepare_rhel8_installer.yml playbook.")]),t._v(" "),e("p",[t._v("To set up the RHEL 8 installer run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/prepare_rhel8_installer.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"downloading-rhocp-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downloading-rhocp-packages"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Downloading RHOCP packages")])]),t._v(" "),e("p",[t._v("This section provides details about downloading the required RHOCP 4.14 packages using a playbook.")]),t._v(" "),e("p",[t._v("To download RHOCP 4.14 packages:")]),t._v(" "),e("p",[t._v("Download the required packages on the installer VM with the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/download_ocp_packages.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"generating-kubernetes-manifest-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-kubernetes-manifest-files"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Generating Kubernetes manifest files")])]),t._v(" "),e("p",[t._v("The manifests and ignition files define the master node and worker node configuration and are key components of the RHOCP 4.14 installation. This section describes how to use the generate_manifest.yml playbook that contains the script to generate the manifest files.")]),t._v(" "),e("p",[t._v("To generate Kubernetes manifest files run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/generate_manifest.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"copying-rhocp-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copying-rhocp-tools"}},[t._v("#")]),t._v(" Copying RHOCP tools")]),t._v(" "),e("p",[t._v("This section describes how to copy the RHOCP tools from the present installer to head nodes and RHEL 8 installer using the copy_ocp_tool.yml playbook.")]),t._v(" "),e("p",[t._v("To copy the RHOCP tools to the head nodes and RHEL 8 installer run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/copy_ocp_tool.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"deploying-ipxe-server-on-head-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-ipxe-server-on-head-nodes"}},[t._v("#")]),t._v(" Deploying iPXE server on head nodes")]),t._v(" "),e("p",[t._v("This section describes how to deploy the iPXE server on the head nodes using the deploy_ipxe_ocp.yml playbook.")]),t._v(" "),e("p",[t._v("To deploy the iPXE server run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/deploy_ipxe_ocp.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"creating-bootstrap-and-master-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-bootstrap-and-master-nodes"}},[t._v("#")]),t._v(" Creating bootstrap and master nodes")]),t._v(" "),e("p",[t._v("This section describes how to create bootstrap and master nodes using the scripts in the ocp_vm.yml playbook.")]),t._v(" "),e("p",[t._v("To create bootstrap and master VMs on Kernel-based Virtual Machine (KVM):")]),t._v(" "),e("p",[t._v("Run the following playbook:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/ocp_vm.yml --ask-vault-pass\n")])])]),e("h3",{attrs:{id:"creating-network-bonding-for-baremetal-coreos-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-network-bonding-for-baremetal-coreos-worker"}},[t._v("#")]),t._v(" Creating network bonding for baremetal coreOS worker")]),t._v(" "),e("p",[t._v("This section describes how to create bonding on the network interfaces for baremetal CoreOS worker nodes only")]),t._v(" "),e("p",[t._v("Run the following commands:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" core@"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CoreOS workerIP"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" show "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state UP'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("': '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $2}'")]),t._v("                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###To retrive only the names of the network interfaces that are currently UP")]),t._v("\n\nsample output from above command:\n  ens1f0np0\n  ens1f1np1\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" bond con-name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bond0"')]),t._v(" ifname bond0\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection modify bond0 bond.options "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mode=active-backup,downdelay=0,miimon=100,updelay=0"')]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" ethernet slave-type bond con-name bond0-if1 ifname ens1f0np0 master bond0                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###ens1f0np0 interface names from the sample output")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" ethernet slave-type bond con-name bond0-if2 ifname ens1f1np1 master bond0             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###ens1f1np1 interface names from the sample output")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection up bond0\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection modify "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bond0"')]),t._v(" ipv4.addresses "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<<CoreOS IP  with netmask>>'")]),t._v(" ipv4.gateway "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<<gateway IP>>'")]),t._v(" ipv4.dns  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<<dns server IP(all the head node IP)>>'")]),t._v(" ipv4.dns-search "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<<domain name>>'")]),t._v(" ipv4.method manual\n\nexample:\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nmcli connection modify "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bond0"')]),t._v(" ipv4.addresses "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'172.28.*.*/24'")]),t._v(" ipv4.gateway "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'172.28.*.*'")]),t._v(" ipv4.dns  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'172.28.*.*,172.28.*.*,172.28.*.*'")]),t._v(" ipv4.dns-search "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isv.local'")]),t._v(" ipv4.method manual\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("\n")])])]),e("h3",{attrs:{id:"deploying-rhocp-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-rhocp-cluster"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Deploying RHOCP cluster")])]),t._v(" "),e("p",[t._v("Once the playbooks are executed successfully and the Bootstrap and master nodes are deployed with the RHCOS, deploy the RHOCP cluster.")]),t._v(" "),e("p",[t._v("To deploy the RHOCP cluster:")]),t._v(" "),e("ol",[e("li",[t._v("Login to the installer VM.")])]),t._v(" "),e("p",[t._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel8_installerVM.yml playbook. For more information, see the "),e("a",{attrs:{href:"#creating-rhel-8-installer-machine"}},[t._v("Creating RHEL 8 installer machine")]),t._v(" section.")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Add the kubeconfig path in the environment variables using the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KUBECONFIG")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeconfig\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Run the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ openshift-install wait-for bootstrap-complete "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions --log-level debug\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Complete the RHOCP 4.14 cluster installation with the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$openshift")]),t._v("-install wait-for install-complete "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions --log-level"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug\n")])])]),e("p",[t._v("The following output is displayed:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("DEBUG OpenShift Installer v4.14\n\nDEBUG Built from commit 6ed04f65b0f6a1e11f10afe658465ba8195ac459 \n\nINFO Waiting up to 30m0s "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster at https://api.rrocp.pxelocal.local:6443 to initialize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n\nDEBUG Still waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster to initialize: Working towards "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.14")]),t._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("% complete \n\nDEBUG Still waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster to initialize: Working towards "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.14")]),t._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("% complete, waiting on authentication, console,image-registry \n\nDEBUG Still waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster to initialize: Working towards "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.14")]),t._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("% complete \n\nDEBUG Still waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster to initialize: Working towards "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.14")]),t._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% complete, waiting on image-registry \n\nDEBUG Still waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster to initialize: Cluster operator image-registry is still updating \n\nDEBUG Still waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the cluster to initialize: Cluster operator image-registry is still updating \n\nDEBUG Cluster is initialized \n\nINFO Waiting up to 10m0s "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the openshift-console route to be created"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nDEBUG Route found "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" openshift-console namespace: console \n\nDEBUG Route found "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" openshift-console namespace: downloads \n\nDEBUG OpenShift console route is created \n\nINFO Install complete"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" \n\nINFO Access the OpenShift web-console here: https://console-openshift-console.apps.ocp.ngs.local\n\nINFO Login to the console with user: kubeadmin, password: a6hKv-okLUA-Q9p3q-UXLc3\n")])])]),e("p",[t._v("The RHOCP cluster is successfully installed.")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("After the installation is complete, check the status of the created cluster:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ oc get nodes\n")])])]),e("h3",{attrs:{id:"running-red-hat-openshift-container-platform-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-red-hat-openshift-container-platform-console"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Running Red Hat OpenShift Container Platform Console")])]),t._v(" "),e("p",[e("strong",[t._v("Prerequisites:")])]),t._v(" "),e("p",[t._v("The RHOCP cluster installation must be complete.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The installer machine provides the Red Hat OpenShift Container Platform Console link and login details when the RHOCP cluster installation is complete.")])]),t._v(" "),e("p",[t._v("To access the Red Hat OpenShift Container Platform Console:")]),t._v(" "),e("ol",[e("li",[t._v("Open a web browser and enter the following link:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://console-openshift-console.apps."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("customer.defined.domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\nSample one "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" reference:  https://console-openshift-console.apps.ocp.ngs.local\n")])])]),e("p",[t._v("Log in to the Red Hat OpenShift Container Platform Console with the following credentials:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("- Username: kubeadmin\n- Password: "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("If the password is lost or forgotten, search for the kubeadmin-password file located in the /opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeadmin-password directory on the installer machine.")])]),t._v(" "),e("p",[t._v("The following figure shows the Red Hat OpenShift Container Platform Console after successful deployment:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(193),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("FIGURE 8.")]),t._v(" Red Hat OpenShift Container Platform Console login screen")])])}],o=a(0),n=Object(o.a)({},(function(){this._self._c;return this._m(0)}),s,!1,null,null,null);e.default=n.exports}}]);