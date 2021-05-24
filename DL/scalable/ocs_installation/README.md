# Red Hat OpenShift Container Storage

### Introduction 

This document contains configuring Red Hat OpenShift Container Storage 4.4/4.5 (OCS) on existing Red Hat OpenShift Container Platform 4.6.x (OCP) worker nodes on bare metal or virtual machines. The OpenShift Container Storage operator installation will be using Local Storage operator which will use file system storage of 10GB for monitoring purpose and block storage of 500GB for OSD (Object Storage Daemon) volumes. These OSDs are useful for configuring any application on top of OCS cluster.

The below operators are required to create OCS cluster and deployed through automation fashion.

- Local Storage Operator

- OpenShift Container Storage Operator

### Configuration requirements

The below table shows about all required nodes hardware configuration.

| **Server Role** | **CPU** | **RAM** | **HardDisk1** | **HardDiak2** | **HardDisk3** |
| --------------- | ------- | ------- | ------------- | ------------- | ------------- |
| Bootstrap       | 4       | 16      | 120  GB       | NA            | NA            |
| HAProxy         | 4       | 16      | 150  GB       | NA            | NA            |
| Master          | 8       | 64      | 120  GB       | NA            | NA            |
| Worker          | 16      | 64      | 120  GB       | 10  GB        | 500 GB/2 TB   |

 

### Pre-requisites

- Red Hat OpenShift Container Platform 4.6 cluster console is required with the login credentials.

- Availability of any local storage from any storage (i.e Nimble,3PAR, Local Storage) in OpenShift Container Platform.

- OCS installation on OCP 4.6 cluster requires a minimum of 3 worker nodes but OCS should have exact 3 worker nodes which use two more hard disks with 10GB for mon POD (3 in total using always a PVC) + 500GB (or more than 500GB) volume (a PVC using the default “**thin**” storage class) for the OSD volumes. It also requires 16 CPUs and 64GB RAM for each node and worker node hard disk configuration as shown in above figure.

## Scripts for deploying OCS cluster

**NOTE**

```
BASE_DIR - is a base directory path for all automated scripts directories are in place and path is /opt/hpe/solutions/ocp/hpe-solutions-openshift/DL/scalable
```

This section provides details on the scripts developed to automate the installation of OCS 4.5 operator on the OCP 4.6 cluster. The scripts used to deploy OCS can be found in the installer machine at *$BASE_DIR/ocs_installation*.

- **install_ocs_operator.py** - main python script which installs Local Storage operator, OpenShift Container Storage operators, creates file system & block storage and also creates SCs, PVs, PVCs.

- **config.py** - This python script is used to convert user input values into program variables for usage by the install_ocs_operator.py script.

- **userinput.json** - The userinput.json file needs to be modified as per user configuration and requirements for installing and scaling OCS cluster.

- **config_secrets.json** – This encrypted file has OCP cluster login credentials and user needs to provide credentials to this file using 'ansible-vault' command.

- **create_local_storage_operator.yaml** – Creates Local Storage operator's Namespace, installs Local Storage operator.

- **local_storage_fs.yaml** – Creates file system storage for monitoring OCS cluster.

- **local_storage_block.yaml** – Creates block storage for claiming OSD persistent volumes.

- **ocs_operator.yaml** – This playbook creates OpenShift Container Storage Namespace, block storage for bounding PVC to Storage Class.

- **storage_ocs.yaml** – This playbook creates storage classes, PVCs (Persistent Volume Claim), pods to bring up the OCS cluster.

This section provides details on the scripts developed to automate the installation of WordPress application. The scripts used to deploy WordPress application can be found in the installer machine at *$BASE_DIR/ocs_installation/wordpress*.

- **deploy_wordpress.sh** – This shell script will install WordPress application on OCS cluster.

- **delete_wordpress.sh** – This shell script will uninstall WordPress application on OCS cluster.


### Installing OpenShift Container Storage on OpenShift Container Platform cluster 

1)  Login to the installer machine as non-root user and browse to python virtual environment as per DG.

2)  Update the *config_secrets.json* file found at *$BASE_DIR/ocs_installation* using 'ansible-vault' command as shown below:

```
The below command is used to open encrypted file config_secrets.json
$ ansible-vault edit config_secrets.json
​```
OPENSHIFT_USERNAME: <OpenShift Container Platform cluster username>
OPENSHIFT_PASSWORD: <OpenShift Container Platform cluster password>
​```
```

3) Update the *userinput.json* file is found at *$BASE_DIR/ocs_installation* with the following setup configuration details:

```
​```
OPENSHIFT_DOMAIN: "<OpenShift Server sub domain fqdn (api.domain.base_domain)>",
OPENSHIFT_PORT: "<OpenShift Server port number (OpenShift Container Platform runs on port 6443 by default)>",
LOCAL_STORAGE_NAMESPACE: "<Local Storage Operator Namespace (local-storage)>",
OPENSHIFT_CONTAINER_STORAGE_NAMESPACE: "<OpenShift Container Storage Operator Namespace (openshift-storage)>",
OPENSHIFT_CONTAINER_STORAGE_LOCAL_STORAGE_VERSION: "<OCP_cluster_version>",
OPENSHIFT_CONTAINER_STORAGE_FILESYSTEM_STORAGE: "<Provide 10GiB worker node's drive for file system storage (Ex: /dev/sdb)>" ,
OPENSHIFT_CONTAINER_STORAGE_BLOCK_STORAGE: "<Provide 500Gi worker node's drive for block storage (Ex: /dev/sdc)>",
OPENSHIFT_CLIENT_PATH: "<Provide oc absolute path ending with / OR leave empty in case oc is available under /usr/local/bin>",
"OPENSHIFT_CONTAINER_PLATFORM_WORKER_NODES": <Provide OCP worker nodes fqdn list ["sworker1.fqdn", "sworker2.fqdn", "worker3.fqdn"]>,
"OPENSHIFT_CONTAINER_STORAGE_SCALING_WORKER_NODES": <Provide OCS worker nodes fqdn list ["sworker4.fqdn", "sworker5.fqdn", "sworker6.fqdn"]>,
"OPENSHIFT_CONTAINER_STORAGE_BLOCK_VOLUME": "<Provide base/scale OCS worker node block storage, should be in Gi/Ti (example - 500Gi or 2Ti)>"
​```
```

5) Execute the following command to deploy OCS cluster.

```
$ cd $BASE_DIR/ocs_installation
$ python -W ignore install_ocs_operator.py
```

The output of the above command as shown below:

```
$ python -W ignore install_ocs_operator.py
Enter key for encrypted variables:
Logging into your OpenShift Cluster
Successfully logged into the OpenShift Cluster
Waiting for 1 minutes to 'Local Storage' operator to be available on OCP web console..!!
'Local Storage' operator is created..!!
Waiting for 2 minutes to OCS operator to be available on OCP web console..!!
'OpenShift Container Storage' operator is created..!!
INFO:
         1) Run the below command to list all PODs and PVCs of OCS cluster.
                 'oc get pod,pvc -n openshift-storage'
         2) Wait for 'pod/ocs-operator-xxxx' pod to be up and running.
         3) Log into OCP web GUI and check Persistant Stoarge in dashboard.
$
```

## Validating OCS with deploying WordPress application

This section covers the steps to validate the OpenShift Container Storage deployment (OCS) by deploying 2-tier application along with MySQL database.

### Deploying WordPress application

1) From within the repository, navigate to the WordPress script folder

```
$ cd $BASE_DIR/ocs_installation/wordpress
```

2) Run below script to deploy WordPress application along with MySQL

```
$ ./deploy_wordpress.sh
```

### Verifying the WordPress deployment

1) Execute the following command to verify the persistent volume associated with WordPress application and MySQL database. 

```
$ oc get pods,pvc,route
NAME                                  READY   STATUS    RESTARTS   AGE
pod/wordpress-6f69797b8f-hqpss        1/1     Running   0          5m52s
pod/wordpress-mysql-8f4b599b5-cd2s2   1/1     Running   0          5m52s
 
NAME                                   STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                  AGE
persistentvolumeclaim/mysql-pv-claim   Bound    pvc-ccf2a578-9ba3-4577-8115-7c80ac200a9c   5Gi        RWO            ocs-storagecluster-ceph-rbd   5m50s
persistentvolumeclaim/wp-pv-claim      Bound    pvc-3acec0a0-943d-4138-bda9-5b57f8c35c5d   5Gi        RWO            ocs-storagecluster-ceph-rbd   5m50s
 
NAME                                      HOST/PORT                                              PATH   SERVICES         PORT     TERMINATION   WILDCARD
route.route.openshift.io/wordpress-http   wordpress-http-wordpress.apps.socp.twentynet.local          wordpress-http   80-tcp                 None
$
```
 
