(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{321:function(e,t,a){"use strict";a.r(t);var n=a(13),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"preparing-the-execution-environment-for-rhocp-worker3-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-execution-environment-for-rhocp-worker3-node"}},[e._v("#")]),e._v(" Preparing the execution environment for RHOCP worker3 node")]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("ul",[t("li",[e._v("RHEL 8.6 must be "),t("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/performing_a_standard_rhel_8_installation/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("installed and registered"),t("OutboundLink")],1),e._v(" on your host machine")]),e._v(" "),t("li",[e._v("Configure "),t("strong",[e._v("BOND  > VLAN  > Bridge")])])]),e._v(" "),t("p",[t("strong",[e._v("Setting up RHEL 8.6 installer machine")])]),e._v(" "),t("p",[e._v("This section assumes the following considerations for our deployment environment:")]),e._v(" "),t("ul",[t("li",[e._v("A server running Red Hat Enterprise Linux (RHEL) 8.6 exists within the deployment environment and is accessible to the installation user to be used as an installer machine. This server must have internet connectivity.")]),e._v(" "),t("li",[e._v("A virtual machine is used to act as an installer machine and the same host is utilized for creating the RHEL 7 installer machine and deploying the RHOCP cluster. We are using one of the worker3 machines as an installer machine to deploy the solution manually.")])]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("p",[e._v("RHEL 8.6 installer machine must have the following configurations:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v('The installer machine must have at least 500 GB disk space (especially in the "/" partition), 4 CPU cores, and 16 GB RAM.')])]),e._v(" "),t("li",[t("p",[e._v("RHEL 8.6 installer machine must be subscribed with valid Red Hat credentials. To register the installer machine for the Red Hat subscription, run the following command:")])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" subscription-manager register "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --auto-attach\n")])])]),t("ol",[t("li",[e._v("SSH key pair must be available on the installer machine. If the SSH key pair is not available, generate a new SSH key pair with the following command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ssh-keygen\n")])])]),t("p",[e._v("To set up the installer machine:")]),e._v(" "),t("ol",[t("li",[e._v("Create and activate Python3 virtual environment for deploying this solution with the following commands:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ python3 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" venv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("virtual_environment_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("virtual_environment_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/activate\n")])])]),t("ol",[t("li",[t("p",[e._v("Download the hpe-solutions-openshift/DL-LTI-Openshift/")])]),e._v(" "),t("li",[t("p",[e._v("repositories from the Ansible Engine using the following commands:")])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /opt/\n\n$ yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-y")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.hpe.com/Solutions/ISV-OpenShift.git\n")])])]),t("ol",[t("li",[e._v("Set up the installer machine to configure the nginx, development tools, and other python packages. Navigate to the /opt/ hpe-solutions-openshift/DL-LTI-Openshift/ directory and run the following command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" setup.sh\n")])])]),t("ol",[t("li",[e._v("Download and copy RHEL 8.6 and RHEL 7.9 DVD ISO to /usr/share/nginx/html/ directory to create nginx service.")])]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("For server type ProLiant DL365 Gen10 Plus, Bonding_Interface1 is eno5 and Bonding_Interface2 is eno6. For server type ProLiant DL365 Gen10 Plus , Bonding_Interface1 is ens2 and Bonding_Interface2 is ens3.")]),e._v(" "),t("p",[e._v("The output generates the input.yaml file and the hosts file in the same location.")])])}),[],!1,null,null,null);t.default=s.exports}}]);