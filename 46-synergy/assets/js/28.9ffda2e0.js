(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{534:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"validating-openshift-container-platform-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validating-openshift-container-platform-deployment"}},[t._v("#")]),t._v(" Validating OpenShift Container Platform deployment")]),t._v(" "),e("p",[t._v("After the cluster is up and running with OpenShift Local Storage\nOperator, the cluster configuration is validated by deploying a MongoDB\npod with persistent volume and Yahoo Cloud Service Benchmarking (YCSB).\nThis section covers the steps to validate the OpenShift Container\nPlatform deployment.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("PREREQUISITES")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("OCP 4.6 cluster must be installed.")])]),t._v(" "),e("li",[e("p",[t._v("Use local storage or OCS to claim persistent volume (PV).")])]),t._v(" "),e("li",[e("p",[t._v("MongoDB instance will only support local file system storage or OCS\nfile system.")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Block storage is not supported.")])])]),t._v(" "),e("h2",{attrs:{id:"deploying-mongodb-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-mongodb-application"}},[t._v("#")]),t._v(" Deploying MongoDB application")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Login to the installer VM as a non-root user.")])]),t._v(" "),e("li",[e("p",[t._v("Use the following command to download the Red Hat scripts specific\nto the MongoDB application at\n"),e("a",{attrs:{href:"https://github.com/red-hat-storage/SAWORF",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/red-hat-storage/SAWORF"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com/red-hat-storage/SAWORF.git"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])])]),t._v(" "),e("li",[e("p",[t._v("From within the red-hat-storage repository, navigate to the folder\nSAWORF/OCS3/MongoDB/blog2.")])]),t._v(" "),e("li",[e("p",[t._v("Update the "),e("em",[t._v("create_and_load.sh")]),t._v(" script with "),e("strong",[t._v("local storage")]),t._v(", "),e("strong",[t._v("OCS\n,")]),t._v(" "),e("strong",[t._v("Nimble storage,")]),t._v(" and "),e("strong",[t._v("3PAR storage")]),t._v(" in place of\n"),e("strong",[t._v("glusterfs")]),t._v(" content. Example is as follows.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("mongodb_ip")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$(")]),t._v("oc get svc -n "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PROJECT_NAME}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v **local storage** "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" mongodb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("}'")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Create MongoDB and YCSB pods and load the sample data.")])]),t._v(" "),e("li",[e("p",[t._v("Update the following command with appropriate values for the command\nline parameters and execute the command to create the MongoDB and\nYCSB pods and also to load the sample data.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./create_and_load_mongodb "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROJECT_NAME")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OCP_TEMPLATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MONGODB_MEMORY_LIMIT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PV_SIZE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MONGODB_VERSION")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_WORKLOAD")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_DISTRIBUTION")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_RECORDCOUNT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_OPERATIONCOUNT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_THREADS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LOG_DIR")]),t._v("\n")])])]),e("p",[t._v("Example command is shown as follows.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./create_and_load_mongodb dbtest mongodb-persistent 4Gi 10Gi "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),t._v(" workloadb uniform "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" root /mnt/data/\n")])])]),e("p",[t._v("The output is as follows.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> Deploying template "openshift/mongodb-persistent" to project dbtest\n\n MongoDB\n\n---------\n\n> MongoDB database service, with persistent storage. For more information about using this template, including OpenShift considerations, see documentation in the upstream repository: https://github.com/sclorg/mongodb-container.\n\n\nNOTE: Scaling to more than one replica is not supported. You must have persistent volume available in your cluster to use this template.\n\nThe following service(s) have been created in your project: mongodb.\n\nUsername: redhat\n\nPassword: redhat\n\nDatabase Name: redhatdb\n\nConnection URL: mongodb://redhat:redhat@mongodb/redhatdb\n\nFor more information about using this template, including OpenShift considerations, see documentation in the upstream repository: https://github.com/sclorg/mongodb-container.\n\nWith parameters:\n\n    * Memory Limit=4Gi\n\n    * Namespace=openshift\n\n     * Database Service Name=mongodb\n\n     * MongoDB Connection Username=redhat\n\n     * MongoDB Connection Password=redhat\n\n     * MongoDB Database Name=redhatdb\n\n     * MongoDB Admin Password=redhat\n\n     * Volume Capacity=10Gi\n\n     * Version of MongoDB Image=3.6\n\n> Creating resources ...\n\n     secret "mongodb" created\n\n     service "mongodb" created\n\n     error: persistentvolumeclaims "mongodb" already exists\n\n     deploymentconfig.apps.openshift.io "mongodb" created\n\n> Failed\n\n pod/ycsb-pod created\n\n')])])])]),t._v(" "),e("li",[e("p",[t._v("Execute the following command to run the check_db_size script.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./check_db_size "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROJECT_NAME")]),t._v("\n")])])]),e("p",[t._v("The output is as follows.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n\n MongoDB shell version v3.6.12\n\n connecting to: mongodb://172.x.x.x:27017/redhatdb?gssapiServiceName=mongodb\n\n Implicit session: session {"id" : UUID("c0a76ddc-ea0b-4fc-88fd-045d0f98b2") }\n\n MongoDB server version: 3.6.3\n\n {\n\n               "db" : "redhatdb",\n\n               "collections" : 1,\n\n               "views" : 0,\n\n               "objects" : 4000,\n\n               "avgObjSize" : 1167.877,\n\n               "dataSize" : 0.004350680857896805,\n\n               "storageSize" : 0.00446319580078125,\n\n               "numExtents" : 0,\n\n               "indexes" : 1,\n\n               "indexSize" : 0.0001068115234375,\n\n               "fsUsedSize" : 1.0311393737792969,\n\n               "fsTotalSize" : 99.951171875,\n\n               "ok" : 1\n\n }\n\n')])])])])]),t._v(" "),e("h2",{attrs:{id:"verifying-mongodb-pod-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verifying-mongodb-pod-deployment"}},[t._v("#")]),t._v(" Verifying MongoDB pod deployment")]),t._v(" "),e("ol",[e("li",[t._v("Execute the following command to verify the persistent volume\nassociated with MongoDB pods.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" oc get "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pv")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" mongodb\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("The output is as follows.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" local-pv-e7f10f65 100Gi RWO Delete Bound dbtest/mongodb local-sc 26h\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Execute the following command to verify the persistent volume claim\n(PVC) associated with MongoDB pods.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" oc get pvc \n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("The output is as follows.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> local-pv-e7f10f65 100Gi RWO Delete Bound dbtest/mongodb local-sc 26h\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Execute the following command to ensure MongoDB and YCSB pods are up\nand running.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" oc get pod\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    The output is as follows.\n\n\n        NAME               READY   STATUS      RESTARTS   AGE\n\n        mongodb-1-deploy   0/1     Completed   0          3m40s\n\n        mongodb-1-skbwq    1/1     Running     0          3m36s\n\n        ycsb-pod           1/1     Running     0          3m41s\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("For more information about deploying MongoDB application along with\nYCSB, refer to the Red Hat documentation at\n"),e("a",{attrs:{href:"https://www.redhat.com/en/blog/multitenant-deployment-mongodb-using-openshift-container-storage-and-using-ycsb-test-performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.redhat.com/en/blog/multitenant-deployment-mongodb-using-openshift-container-storage-and-using-ycsb-test-performance"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);a.default=n.exports}}]);