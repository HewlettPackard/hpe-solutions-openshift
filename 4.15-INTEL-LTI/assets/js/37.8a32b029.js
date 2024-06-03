(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{361:function(e,t,a){"use strict";a.r(t);var s=a(14),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adding-baremetal-coreos-worker-nodes-to-rhocp-cluster-using-ansible-playbooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-baremetal-coreos-worker-nodes-to-rhocp-cluster-using-ansible-playbooks"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Adding BareMetal CoreOS worker nodes to RHOCP cluster using Ansible playbooks")])]),e._v(" "),t("p",[e._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to add the bare metal CoreOS worker nodes to the RHOCP cluster. You can use one of the following two methods to add the CoreOS worker nodes:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Run a consolidated playbook:")]),e._v(" This method includes a single playbook, site.yml, that contains a script to perform all the tasks for adding the CoreOS worker nodes to the existing RHOCP cluster. To run LTI using a consolidated playbook:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts site.yml --ask-vault-pass\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("The default password for the Ansible vault file is "),t("strong",[e._v("changeme")])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Run individual playbooks:")]),e._v(" This method includes multiple playbooks with scripts that enable you to deploy specific tasks for adding the CoreOS worker nodes to the existing RHOCP cluster. The playbooks in this method must be executed in a specific sequence to add the worker nodes.")])]),e._v(" "),t("p",[e._v("The following table includes the purpose of each playbook required for the deployment:")]),e._v(" "),t("p",[t("strong",[e._v("TABLE 9.")]),e._v(" Playbook Description")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Playbook")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("binddns.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy bind dns on three worker nodes and it will work as both Active & Passive.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("haproxy.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy haproxy on the worker nodes and it will act as Active.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("deploy_ipxe_ocp.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy the ipxe code on the worker machine.")])])])]),e._v(" "),t("p",[e._v("To run individual playbooks do one of the following:")]),e._v(" "),t("ol",[t("li",[e._v("Edit site.yml file and add a comment for all the playbooks except the ones that you want to execute.")])]),e._v(" "),t("p",[e._v("For example, add the following comments in the site.yml file to bind dns on the worker nodes:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("import_playbook: playbooks/binddns.yml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import_playbook: playbooks/haproxy.yml")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import_playbook: playbooks/deploy_ipxe_ocp.yml")]),e._v("\n")])])]),t("p",[e._v("OR")]),e._v(" "),t("p",[e._v("Run the individual YAML files using the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("yaml_filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".yml --ask-vault-pass\n")])])]),t("p",[e._v("For example, run the following YAML file to bind dns to the worker nodes:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/binddns.yml --ask-vault-pass\n")])])]),t("p",[e._v("For more information on executing individual playbooks, see the consecutive sections.")]),e._v(" "),t("h3",{attrs:{id:"adding-coreos-worker-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-coreos-worker-nodes"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Adding CoreOS worker nodes")])]),e._v(" "),t("p",[e._v("This section covers the steps to add RHCOS worker nodes to an existing Red Hat OpenShift Container Platform cluster.")]),e._v(" "),t("ol",[t("li",[e._v("Login to the Installer VM.")])]),e._v(" "),t("p",[e._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel8_installerVM.yml playbook. For more information, see the "),t("RouterLink",{attrs:{to:"/Solution-Deployment/OCP-Cluster-deployment.html#creating-rhel-8-installer-machine"}},[e._v("Creating RHEL 8 installer machine")]),e._v(" section.")],1),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Navigate to the $BASE_DIR("),t("strong",[e._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/")]),e._v(") directory, then copy "),t("strong",[e._v("input file and hosts")]),e._v(" file to $BASE_DIR/coreos_BareMetalworker_nodes/ and later update ocp worker details in input file.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ansible-vault edit input.yaml\n------------------------------------------------------------------------------------------------------------\nocp_workers:\n - name: worker1\n   ip: 172.28.xx.xxx\n   fqdn: xxx.ocp.isv.local                   #ex. mworker1.ocp.isv.local\n   mac_address: XX:XX:XX:XX:XX:XX\t\t\t #For BareMetal core os worker update mac address of server NIC\n - name: worker2\n   ip: 172.28.xx.xxx\n   fqdn: xxx.ocp.isv.local                 #ex. mworker2.ocp.isv.local\n   mac_address: XX:XX:XX:XX:XX:XX \t\t   #For BareMetal core os worker update mac address of server NIC\n - name: worker3\n   ip: 172.28.xx.xxx\n   fqdn: xxx.ocp.isv.local                   #ex. mworker3.ocp.isv.local\n   mac_address: XX:XX:XX:XX:XX:XX \t\t     #For BareMetal core os worker update mac address of server NIC\n------------------------------------------------------------------------------------------------------------\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("import the hosts file from the $BASE_DIR")]),e._v(" "),t("p",[e._v("ansible vault password is "),t("strong",[e._v("changeme")])])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Navigate to the /opt/hpe-solutions-openshift/DL-LTI-Openshift/coreos_BareMetalworker_nodes/ directory add the worker nodes to the cluster using one of the following methods:")])]),e._v(" "),t("ul",[t("li",[e._v("Run the following sequence of playbooks:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/binddns.yml --ask-vault-pass\n$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/haproxy.yml --ask-vault-pass\n$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/deploy_ipxe_ocp.yml --ask-vault-pass\n")])])]),t("p",[e._v("OR")]),e._v(" "),t("ul",[t("li",[e._v("If you want to deploy the entire solution to add the RH CoreOS worker nodes to the cluster, execute the following playbook:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts site.yml --ask-vault-pass\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("After successful execution of all playbooks, check the node status as below.")])]),e._v(" "),t("p",[t("strong",[e._v("Approving server certificates (CSR) for newly added nodes")])]),e._v(" "),t("p",[e._v("The administrator needs to approve the CSR requests generated by each kubelet.")]),e._v(" "),t("p",[e._v("You can approve all Pending CSR requests using below command")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ oc get csr "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" json "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.items[] | select(.status == {} ) | .metadata.name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("xargs")]),e._v(" oc adm certificate approve\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Later, Verify Node status using below command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ oc get nodes\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Execute the following command to set the parameter mastersSchedulable parameter as false, so that master nodes will not be used to schedule pods.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ oc edit scheduler\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);