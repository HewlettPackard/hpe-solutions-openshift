**Red Hat OpenShift Data Foundation**

**Introduction**

This document contains configuring Red Hat OpenShift Data Foundation 4.15 on existing Red Hat OpenShift Container Platform 4.15 (OCP) worker nodes on bare metal or virtual machines.

The below operators are required to create ODF cluster and deployed through automation fashion.

* Local Storage Operator

* OpenShift Data Foundation Operator

**Pre-requisites**

1, Red Hat OpenShift Container Platform 4.15 cluster console is required with the login credentials.

2, ODF installation on OCP 4.15 cluster requires a minimum of 3 worker nodes but ODF should have exact 3 worker nodes.

3, The workers nodes which all are using for ODF should be added to OCP cluster.

**Scripts for deploying ODF cluster**

This section provides details on the scripts developed to automate the installation of ODF 4.15 operator on the OCP 4.15 cluster.

- **install\_odf\_operator.py** - main python script which installs Local Storage operator, OpenShift Data Foundation operators, creates file system & block storage and also creates SCs, PVs, PVCs.
- **config.py** - This python script is used to convert user input values into program variables for usage by the install\_odf\_operator.py script.
- **userinput**.**json** - The userinput.json file needs to be modified as per user configuration and requirements for installing and scaling ODF cluster.
- **create\_local\_storage\_operator.yaml** – Creates Local Storage operator's Namespace, installs Local Storage operator.
- **auto\_discover\_devices.yaml–** Creates the LocalVolumeDiscovery resource using this file.
- **localvolumeset.yaml** – Creates the LocalVolumeSets
- **odf\_operator.yaml –** This playbook creates OpenShift Container Storage Namespace  and OpenShift Data Foundation Operator.
- **storagecluster.yaml –** This playbook creates storage classes, PVCs (Persistent Volume Claim), pods to bring up the ODF cluster.

This section provides details on the scripts developed to automate the installation of WordPress application. 

- **deploy\_wordpress.sh** – This shell script will install WordPress application on ODF cluster.
- **delete\_wordpress.sh** – This shell script will uninstall WordPress application on ODF cluster.

**Installing OpenShift Data Foundation on OpenShift Container Platform cluster**

- Login to the installer machine.

- Update the *userinput.json* file with the following setup configuration details:

`    `"OPENSHIFT\_DOMAIN": "<OpenShift Server sub domain fqdn (api.domain.base\_domain)>",

`   `"OPENSHIFT\_PORT": "<OpenShift Server port number (OpenShift Container Platform runs on port 6443 by default)>",

`   `"LOCAL\_STORAGE\_VERSION": "<OCP\_cluster\_version>",

`   `"OPENSHIFT\_CONTAINER\_STORAGE\_VERSION": "<ODF Operator Version>",

`   `"OPENSHIFT\_CLIENT\_PATH": "<Provide oc absolute path ending with / OR leave empty in case oc is available under /usr/local/bin/>",

`   `"OPENSHIFT\_CONTAINER\_PLATFORM\_WORKER\_NODES":  <Provide OCP worker nodes fqdn list ["worker1.fqdn", "worker2.fqdn", "worker3.fqdn"]>,

`   `"OPENSHIFT\_USERNAME": "<Openshift Container Platform username>",

`  `"OPENSHIFT\_PASSWORD": ""<Openshift Container Platform Password>,

`  `"DISK\_NUMBER": "<number of disks for ODF cluster>"

5. Execute the following command to deploy ODF cluster.

$ cd odf\_installation

$ python3 -W ignore install\_odf\_operator.py

The output of the above command as shown below:

$ python -W ignore install\_odf\_operator.py

Logging into your OpenShift Cluster

Successfully logged into the OpenShift Cluster

Waiting for 1 minutes to 'Local Storage' operator to be available on OCP web console..!!

'Local Storage' operator is created..!!

Waiting for 2 minutes to ODF operator to be available on OCP web console..!!

'OpenShift Data Foundation' operator is created..!!

INFO:

`         `1) Run the below command to list all PODs and PVCs of ODF cluster.

`                 `'oc get pod,pvc -n openshift-storage'

`         `2) Wait for 'pod/ocs-operator-xxxx' pod to be up and running.

`         `3) Log into OCP web GUI and check Persistant Stoarge in dashboard.


To test wordpress application on ODF Cluster run below command:

```
# cd wordpress

# chmod +x deploy_wordpress.sh

# ./deploy_wordpress.sh

```
