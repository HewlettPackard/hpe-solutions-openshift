(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to add the RHEL 8.6 worker nodes to the RHOCP cluster. You can use one of the following two methods to add the RHEL 8.6 worker nodes:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),e("p",[t._v("The following table includes the purpose of each playbook required for the deployment:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("To run individual playbooks do one of the following:")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("For example, add the following comments in the site.yaml file to deploy RHEL 8.6 OS on the worker nodes:")]),t._v(" "),t._m(7),e("p",[t._v("OR")]),t._v(" "),e("p",[t._v("Run the individual YAML files using the following command:")]),t._v(" "),t._m(8),e("p",[t._v("For example, run the following YAML file to deploy RHEL 8.6 OS on the worker nodes:")]),t._v(" "),t._m(9),e("p",[t._v("For more information on executing individual playbooks, see the consecutive sections.")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("This section describes how to add RHEL 8.6 worker nodes to an existing RHOCP cluster.")]),t._v(" "),e("p",[t._v("To add RHEL 8.6 worker nodes to the RHOCP cluster:")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel8_installerVM.yml playbook. For more information, see the "),e("router-link",{attrs:{to:"./../Solution-Deployment/OCP-Cluster-deployment.html#creating-rhel-8-installer-machine"}},[t._v("Creating RHEL 8 installer machine")]),t._v(" section.")],1),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),e("p",[t._v("OR")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),e("p",[t._v("The following output is displayed:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),e("p",[t._v("Configure the mastersSchedulable field.")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),e("p",[t._v("The following output is displayed:")]),t._v(" "),t._m(28),t._m(29)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"adding-rhel-8-6-worker-nodes-to-rhocp-cluster-using-ansible-playbooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-rhel-8-6-worker-nodes-to-rhocp-cluster-using-ansible-playbooks"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Adding RHEL 8.6 worker nodes to RHOCP cluster using Ansible playbooks")])])},function(){var t=this._self._c;return t("ul",[t("li",[t("strong",[this._v("Run a consolidated playbook:")]),this._v(" This method includes a single playbook, site.yml, that contains a script to perform all the tasks for adding the RHEL 8.6 worker nodes to the existing RHOCP cluster. To run LTI using a consolidated playbook:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-i")]),this._v(" inventory/hosts site.yaml\n")])])])},function(){var t=this._self._c;return t("ul",[t("li",[t("strong",[this._v("Run individual playbooks:")]),this._v(" This method includes multiple playbooks with scripts that enable you to deploy specific tasks for adding the RHEL 8.6 worker nodes to the existing RHOCP cluster. The playbooks in this method must be executed in a specific sequence to add the worker nodes.")])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("TABLE 9.")]),this._v(" Add RHEL 8.6 nodes using Ansible playbooks")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Playbook")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rhel8_os_deployment.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the scripts to deploy RHEL 8.6 OS on worker nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("copy_ssh.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to copy the SSH public key to the RHEL 8.6 worker nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prepare_worker_nodes.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to prepare nodes for the RHEL 8.6 worker nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ntp.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to create NTP setup to enable time synchronization on the worker nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("openshift-ansible/playbooks/scaleup.yml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This playbook contains the script to add worker nodes to the RHOCP cluster. This playbook queries the master, generates and distributes new certificates for the new hosts, and then runs the configuration playbooks on the new hosts.")])])])])},function(){var t=this._self._c;return t("ol",[t("li",[this._v("Edit site.yaml file and add a comment for all the playbooks except the ones that you want to execute.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("import_playbook: playbooks/rhel8_os_deployment.yml\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# import_playbook: playbooks/copy_ssh.yml")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# import_playbook: playbooks/prepare_worker_nodes.yml")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# import_playbook: playbooks/ntp.yml")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# import_playbook: openshift-ansible/playbooks/scaleup.yml")]),t._v("\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-i")]),this._v(" hosts playbooks/"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("yaml_filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(".yml\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-i")]),this._v(" hosts playbooks/rhel8_os_deployment.yml\n")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"adding-rhel-8-6-worker-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-rhel-8-6-worker-nodes"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Adding RHEL 8.6 worker nodes")])])},function(){var t=this._self._c;return t("ol",[t("li",[this._v("Login to the Installer VM.")])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Navigate to the /opt/hpe-solutions-openshift/DL-LTI-Openshift/worker_nodes/ directory, edit the input.yaml and inventory/hosts files, and enter the values as per your setup.")]),this._v(" "),t("li",[this._v("Copy RHEL 8.6 DVD ISO to the /usr/share/nginx/html/ directory.")]),this._v(" "),t("li",[this._v("Navigate to the /opt/hpe-solutions-openshift/DL-LTI-Openshift/worker_nodes/ directory and run the following command:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("sh")]),this._v(" setup.sh\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("Add the worker nodes to the cluster using one of the following methods:")])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("Run the following sequence of playbooks:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/rhel8_os_deployment.yml\n\nansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/copy_ssh.yml\n\nansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/prepare_worker_nodes.yml\n\nansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/ntp.yml\n\nansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" hosts playbooks/scaleup.yml\n")])])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("If you want to deploy the entire solution to add the worker nodes to the cluster, execute the following playbook:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-i")]),this._v(" inventory/hosts site.yaml\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("Once all the playbooks are executed successfully, check the status of the node using the following command:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ oc get nodes\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("NAME\t\t\tSTATUS\tROLES\t\tAGE\tVERSION\n\nmaster0.ocp.ngs.local\tReady\tmaster,worker\t13d\tv1.23.3+e419edf\n\nmaster1.ocp.ngs.local\tReady\tmaster,worker\t13d\tv1.23.3+e419edf\n\nmaster2.ocp.ngs.local\tReady\tmaster,worker\t13d\tv1.23.3+e419edf\n\nworker1.ocp.ngs.local\tReady\tworker\t\t23h\tv1.23.5+3afdacb\n\nworker2.ocp.ngs.local\tReady\tworker\t\t23h\tv1.23.5+3afdacb\n\nworker3.ocp.ngs.local\tReady\tworker\t\t23h\tv1.23.5+3afdacb\n\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"7"}},[t("li",[this._v("Once the worker nodes are added to the cluster, set the “mastersSchedulable” parameter as false to ensure that the master nodes are not used to schedule pods.")]),this._v(" "),t("li",[this._v("Edit the schedulers.config.openshift.io resource.")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ oc edit schedulers.config.openshift.io cluster\n")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("apiVersion: config.openshift.io/v1 \n\nkind: Scheduler \n\nmetadata: \n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("creationTimestamp: “2019-09-10T03:04:05Z"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n\n'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("generation: 1\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("name: cluster\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('resourceVersion: “433"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("selfLink: /apis/config.openshift.io/v1/schedulers/cluster\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("uid: a636d30a-d377-11e9-88d4-0a60097bee62\n\nspec:\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("mastersSchedulable: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("policy:\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("\t\t"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('name: “"\n\nstatus: '),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("Set the mastersSchedulable to true to allow Control Plane nodes to be schedulable or false to disallow Control Plane nodes to be schedulable.")])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"9"}},[t("li",[this._v("Save the file to apply the changes.")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ oc get nodes\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("NAME\t\t\tSTATUS\tROLES\tAGE\tVERSION\n\nmaster0.ocp.ngs.local\tReady\tmaster\t13d\tv1.23.3+e419edf\n\nmaster1.ocp.ngs.local\tReady\tmaster\t13d\tv1.23.3+e419edf\n\nmaster2.ocp.ngs.local\tReady\tmaster\t13d\tv1.23.3+e419edf\n\nworker1.ocp.ngs.local\tReady\tworker\t23h\tv1.23.5+3afdacb\n\nworker2.ocp.ngs.local\tReady\tworker\t23h\tv1.23.5+3afdacb\n\nworker3.ocp.ngs.local\tReady\tworker\t23h\tv1.23.5+3afdacb\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("To add more worker nodes, update worker details in HAProxy and binddns on head nodes and then add RHEL 8.6 worker nodes to the RHOCP cluster.")])])}],!1,null,null,null);e.default=n.exports}}]);