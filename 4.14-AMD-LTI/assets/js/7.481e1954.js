(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(s,e,a){s.exports=a.p+"assets/img/f24.ae5e2a45.png"},201:function(s,e,a){"use strict";a.r(e);var t=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"securing-red-hat-openshift-container-platform-using-sysdig-secure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#securing-red-hat-openshift-container-platform-using-sysdig-secure"}},[s._v("#")]),s._v(" Securing Red Hat OpenShift Container Platform using Sysdig Secure")]),s._v(" "),e("h2",{attrs:{id:"sysdig-monitor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sysdig-monitor"}},[s._v("#")]),s._v(" Sysdig Monitor")]),s._v(" "),e("p",[e("strong",[s._v("DESCRIPTION")])]),s._v(" "),e("p",[s._v("This section contains Ansible playbooks to automate the installation of sysdig agents over the Red Hat OpenShift 4.14 Cluster. The contents of the repository includes the playbooks and input files as listed.")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("playbooks")]),s._v(": This folder contains the playbook required for Sysdig agent installation over OCP 4.14.")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("roles:")]),s._v(" This folder contains a role called “sysdig-agent-deploy-ocp” which is responsible for performing the actions required for Sysdig agent integration.")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("hosts:")]),s._v(" This is the host file which will be used by Ansible installer machine to reference localhost during Sysdig agent deployment.")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("secrets.yml:")]),s._v(" This file contains sensitive information about the Sysdig SaaS platform access details and Red Hat OpenShift cluster access details.")])])]),s._v(" "),e("p",[e("strong",[s._v("Prerequisites")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Ansible engine with Ansible 2.9.x and Python 3.8.x")])]),s._v(" "),e("li",[e("p",[s._v("Red Hat OpenShift 4.14 is up and running")])]),s._v(" "),e("li",[e("p",[s._v("User has SaaS-based access to Sysdig Secure and Sysdig Monitor for the purpose of container security")])]),s._v(" "),e("li",[e("p",[s._v("User has “admin rights and privilege” for Sysdig Secure and Sysdig Monitor")])]),s._v(" "),e("li",[e("p",[s._v("User has valid access token that is given by Sysdig and is specific to their credentials on Sysdig SaaS platform")])]),s._v(" "),e("li",[e("p",[s._v("User has updated the kernel to ensure that all the nodes have same kernel version. Information regarding this can be found by logging into Sysdig monitor account. Go to setting and under Agent Installation, you will find instructions to install the kernel headers")])]),s._v(" "),e("li",[e("p",[s._v("Enable password-less ssh from OpenShift installer machine to itself(OpenShift installer machine or localhost)")])])]),s._v(" "),e("p",[s._v("Create password-less ssh to installer VM by generating the ssh key")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" $ ssh-keygen \n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),e("p",[s._v("Press enter to overwrite the id_rsa.pub file and also press enter for empty password.")])]),s._v(" "),e("p",[s._v("Copy the ssh key to ~/id_rsa.pub file using following command")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ssh-copy-id "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" ~/.ssh/id_rsa.pub nonrootusername@ansible_engine_machine_ip \n")])])]),e("h2",{attrs:{id:"software-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[s._v("#")]),s._v(" Software requirements")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Software")]),s._v(" "),e("th",[s._v("Version")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("Sysdig SaaS Agent")]),s._v(" "),e("td",[s._v("10.1.1")])])])]),s._v(" "),e("h2",{attrs:{id:"playbook-execution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playbook-execution"}},[s._v("#")]),s._v(" Playbook Execution")]),s._v(" "),e("ul",[e("li",[s._v("Playbook for Sysdig SaaS integration with RedHat OpenShift Container Platform are available under  $BASE_DIR/platform/security-sysdig/")])]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),e("p",[s._v("$BASE_DIR refers to /opt/hpe-solutions-openshift/DL-LTI-Openshift")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("It is mandatory to update all the input files (hosts,secrets.yml, sysdig-agent-configmap.yaml) with appropriate values before running the playbook available in this repository")])]),s._v(" "),e("li",[e("p",[s._v("Input file name - hosts")])]),s._v(" "),e("li",[e("p",[s._v("This file is an inventory of host details")])]),s._v(" "),e("li",[e("p",[s._v("This file is available under $BASE_DIR/platform/security-sysdig/")])]),s._v(" "),e("li",[e("p",[s._v("Specify the Ansible engine machine IP as the value of the variable "),e("strong",[s._v("[ocp_installer_machine_ip]")])])])]),s._v(" "),e("p",[e("strong",[s._v("Input file name")]),s._v(" - sysdig-agent-configmap.yaml")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("This file is available under $BASE_DIR/platform/security-sysdig/roles/sysdig-agent-deploy-ocp/files/.")])]),s._v(" "),e("li",[e("p",[s._v("Provide the Sysdig SaaS Platform Address and Port Number along with Red Hat OpenShift cluster name to the variables as listed :")])])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("collector: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sysdig_saas_collector_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\ncollector_port: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("collector_port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\nk8s_cluster_name: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("replace_with_ocp_cluster_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("p",[e("strong",[s._v("Input file name")]),s._v(" - secrets.yml")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("This file is available under $BASE_DIR/platform/security-sysdig/")])]),s._v(" "),e("li",[e("p",[s._v("Provide value of project name for Sysdig integration with OpenShift Container Platform. This project will be created in OpenShift")])]),s._v(" "),e("li",[e("p",[s._v("Provide the access key or token value. You must get this value from user setting by logging into either Sysdig Secure or Sysdig Monitor GUI")])]),s._v(" "),e("li",[e("p",[s._v("Provide Red Hat OpenShift username and password to login")])])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("projectname: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sysdig_project_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\naccesskeyval: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sysdig_saas_access_key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\nocpuser: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("RedHat_OpenShift_User_Name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\nocppassword: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("RedHat_OpenShift_User_Password"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])])]),e("p",[e("strong",[s._v("Input file name")]),s._v(" - sysdig-agent-deployment.yaml")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("This file is available under $BASE_DIR/platform/security-sysdig/playbooks/")])]),s._v(" "),e("li",[e("p",[s._v("Update the KUBECONFIG and oc command path")])])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("KUBECONFIG: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("replace_with_kubeconfig_path "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("replace_with_ocp_installation_dir_path "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_env."),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])]),e("p",[s._v("Procedure to deploy automated Sysdig SaaS agents on Red Hat OpenShift Container Platform cluster")]),s._v(" "),e("ul",[e("li",[s._v("Execute the following commands from the Ansible installer VM in the python virtual environment root user.")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASE_DIR")]),s._v("/platform/security-sysdig/ \n\n$ ansible-playbook "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" hosts playbooks/sysdig-agent-deployment.yaml --ask-vault-pass \n")])])]),e("ul",[e("li",[s._v("Verification of Sysdig agent deployment on Red Hat OpenShift cluster nodes after successful execution of the playbook. Run the command listed below to get the information on Sysdig pods")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ oc get pods "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" sysdig-agent \n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("**NOTE**")]),s._v(" "),e("p",[s._v("Number of sysdig pods should be equal to number of nodes that user sees after running the following command:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ oc get nodes \n")])])]),e("ul",[e("li",[s._v("Output of above command shows number of nodes in the Red HatOpenShift cluster")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("NAME STATUS ROLES AGE VERSION \n \nmaster0.ocp.isv.local Ready master,worker 13d v1.27.6+f67aeb3 \n\nmaster1.ocp.isv.local Ready master,worker 13d v1.27.6+f67aeb3 \n\nmaster2.ocp.isv.local Ready master,worker 13d v1.27.6+f67aeb3 \n\nworker1.ocp.isv.local Ready worker 6d v1.27.8+4fab27b \n\nworker2.ocp.isv.local Ready worker 6d v1.27.8+4fab27b \n\nworker3.ocp.isv.local Ready worker 6d v1.27.8+4fab27b \n")])])])]),s._v(" "),e("h2",{attrs:{id:"verification-using-sydig-gui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification-using-sydig-gui"}},[s._v("#")]),s._v(" Verification using Sydig GUI")]),s._v(" "),e("ul",[e("li",[s._v("Login to Sysdig Secure and under Policy Events –> Hosts and Containers –> user will find all the nodes that are part of your Red Hat OpenShift infra and this shows Sysdig agents are successfully installed and security checks are being run on all those nodes.")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(170),alt:""}})]),s._v(" "),e("p",[s._v("FIGURE 24 - Monitoring Red Hat OpenShift cluster nodes using Sysdig Monitor GUI")])])}],n=a(0),r=Object(n.a)({},(function(){this._self._c;return this._m(0)}),t,!1,null,null,null);e.default=r.exports}}]);