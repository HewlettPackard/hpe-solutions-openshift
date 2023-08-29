###
##### Copyright 2020 Hewlett Packard Enterprise Development LP
#####
##### Licensed under the Apache License, Version 2.0 (the "License");
##### You may not use this file except in compliance with the License.
##### You may obtain a copy of the License at
#####
##### http://www.apache.org/licenses/LICENSE-2.0
#####
##### Unless required by applicable law or agreed to in writing, software
##### distributed under the License is distributed on an "AS IS" BASIS,
##### WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
##### See the License for the specific language governing permissions and
##### limitations under the License.
#######
##


#!/usr/bin/env python
"""
This script installs the Local Storage and OpenShift Container Storage operators \
and creates OpenShift Container Storage cluster.
"""
import sys
import json
import getopt
import os
import operator
import subprocess
import time
from shutil import copyfile

import config

# Creating a generic object for Config class 
operator_config = config.Config()


def run_cmd_on_shell(cmd):
    """
    This function executes command on command prompt.
    It will provide stdout, std err.
    Return: It will return stdout and stderr of input cmd command for this function.
    """

    try:
        # This will form executing command based on stdout and stderr & will execute on shell
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

        # This will execute the command/script on shell
        out, err = p.communicate()

        # Converting "bytes" type to "str" type
        out1, err1 = str(out,'utf-8'), str(err, 'utf-8')
    except Exception as run_except:
        print("The exception '{}' occurred during execution of the command '{}'".format(run_except, cmd))

    return out1, err1

def validate_cluster_login():
    """
    Get OCP cluster authentication using the cluster credentials on the OC command line tool

    Returns: None
    """
    try:
        print("Logging into your OpenShift Cluster")

        status, _ = subprocess.getstatusoutput(operator_config.oc_path + "oc login " + operator_config.oc_host \
        + " -u " + operator_config.username + " -p " + operator_config.password +" --insecure-skip-tls-verify=true")

        if status == 0:
            print("Successfully logged into the OpenShift Cluster")
        else:
            print("Could not login, please enter correct login credentials")
            sys.exit(1)
    except Exception as run_except:
        print("validate_cluster_login: The exception '{}' occurred while checking OCP cluster cluster credentials".format(run_except))


def create_worker_node_labels():
    '''
    This function applies labels for all worker nodes to get PVCs to be bounded to all worker nodes

    Returns: None
    '''
    try:
        for rack_idx, ocp_worker_node in enumerate(operator_config.ocp_worker_nodes):
            run_cmd_on_shell(operator_config.oc_path + 'oc label node {} "cluster.ocs.openshift.io/openshift-storage=" --overwrite'.format(ocp_worker_node))
            run_cmd_on_shell(operator_config.oc_path + 'oc label node {} "node-role.kubernetes.io/infra=""" --overwrite'.format(ocp_worker_node))
            run_cmd_on_shell(operator_config.oc_path + 'oc label node {} "topology.rook.io/rack=rack{}" --overwrite'.format(ocp_worker_node, rack_idx))
    except Exception as run_except:
        print("create_worker_node_labels: The exception '{}' occurred while creating label for worker node {}".format(run_except, worker_node))
        clean_temp_files()
        sys.exit()


def create_temporary_files():
    '''
    The function create_temporary_files creates temporary yaml files based on existing yaml files

    Returns: None
    '''
    existing_functions = ["create_local_storage_operator", "odf_operator", "localvolumeset","storagecluster"]

    try:
        for _, main_function in enumerate(existing_functions):
            copyfile(main_function + ".yaml", main_function + "_tmp.yaml")
    except Exception as run_except:
        print("create_temporary_files: The exception '{}' occurred while creating temporary files".format(run_except))
        clean_temp_files()
        sys.exit() 

def clean_temp_files():
    '''
    The function clean_temp_files removes all temporary functions which are processed for generating OpenShift Container Storage opearator

    Returns: None
    '''
    remove_files = ["create_local_storage_operator_tmp", "ocs_operator_tmp", "storage_ocs_tmp"]
    try:
        for _, remove_file in enumerate(remove_files):
            if os.path.isfile(remove_file):
                os.remove(file_name + ".yaml")
    except Exception as run_except:
        print("clean_temp_files: Received an exception {} while removing temporary files".format(run_except))
        sys.exit()


def update_ocp_worker_nodes_fqdn(volume_file):
    '''
    The function update_ocp_worker_nodes_fqdn updates worker nodes fqdns for supporting Filesystem storage volume and block storage volume
     volume_file: File contains all worker node details and will be replaced worker nodes FQDN as per userinput

    Returns: None
    '''
    try:
        # Opening temporary storage file to read the content, updating worker nodes fqdn and capturing the same into local string
        with open(volume_file, "r") as read_pointer:
            volume_file_content = read_pointer.readlines()
            write_file = ""
            for line in volume_file_content:
                if ("ocp-worker" in line):
                    for worker_node_fqdn in operator_config.ocp_worker_nodes:
                        worker_line = line.replace("ocp-worker", worker_node_fqdn)
                        write_file += worker_line
                if ("ocp-worker" in line):
                    continue
                write_file += line

        # Opening temporary storage file for updating modified local string
        write_pointer = open(volume_file, 'w')
        write_pointer.write(write_file)
        write_pointer.close()
    except Exception as run_except:
        print("update_ocp_worker: Received an exception {} while updating OCP worker nodes FQDN".format(run_except))
        clean_temp_files()

def modify_temporary_files():
    '''
    The function modify_temporary_files modifies all temporary functions which are used to install OpenShift Container Storage operator

    Returns: None
    '''

    try:

        # Modifying Local Storage version number in temporary file
        os.system("sed -i 's/\"4.4\"/\"{}\"/g' create_local_storage_operator_tmp.yaml".format(operator_config.local_storage_version))

        # Modifying OpenShift Container Storage operator version number in temporary file
        os.system("sed -i 's/4.4/{}/g' odf_operator_tmp.yaml".format(operator_config.ocs_version))
        
        os.system("sed -i 's/disknumber/{}/g' localvolumeset_tmp.yaml".format(operator_config.disk_number))
        
        os.system("sed -i 's/disknumber/{}/g' storagecluster_tmp.yaml".format(operator_config.disk_number))


    except Exception as run_except:
        print("modify_temporary_files: Received an exception {} while modifying temporary yaml files".format(run_except))
        clean_temp_files()

def main():
    try:
        # Checking login to OCP cluster console
        validate_cluster_login()

        # Create temporary files for creating OCS operator along with PVCs
        create_temporary_files()

        # Modifying temporary file contents
        modify_temporary_files()

        # Creating local storage name space, operator group and will create 'Local Storage' operator
        run_cmd_on_shell(operator_config.oc_path + "oc create -f create_local_storage_operator_tmp.yaml")
        print("Waiting for 1 minutes to 'Local Storage' operator to be available on OCP web console..!!")
        time.sleep(100)
        print("'Local Storage' operator is created..!!")

        # Applying labels for worker nodes
        create_worker_node_labels()

        # Auto Discovering Devices
        run_cmd_on_shell(operator_config.oc_path + "oc create -f auto_discover_devices.yaml")
        time.sleep(50)
        
        # Create Local Volume Sets
        run_cmd_on_shell(operator_config.oc_path + "oc create -f localvolumeset_tmp.yaml")
        time.sleep(100)

        # Creating OCS name space, operator group, and OpenShift Container Storage operator
        run_cmd_on_shell(operator_config.oc_path + "oc create -f odf_operator_tmp.yaml")
        print("Waiting for 2 minutes to ODF operator to be available on OCP web console..!!")
        time.sleep(300)
        print("'OpenShift Data Operator' is created..!!")

        run_cmd_on_shell(operator_config.oc_path + "oc patch console.operator cluster -n openshift-storage --type json -p '[{\"op\": \"add\", \"path\": \"/spec/plugins\", \"value\": [\"odf-console\"]}]'")

        # Create ODF cluster
        run_cmd_on_shell(operator_config.oc_path + "oc create -f storagecluster_tmp.yaml")
        time.sleep(100)
        
        print("INFO:\n \
        1) Run the below command to list all PODs and PVCs of OCS cluster.\n\t\t 'oc get pod,pvc -n openshift-storage'\n \
        2) Wait for 'pod/ocs-operator-xxxx' pod to be up and running.\n \
        3) Log into OCP web GUI and check Persistant Stoarge in dashboard. \
        ")

        '''
        # Validating OCS cluster creation
        print("Validating OCS cluster creation..!!")
        while(True):
            out, err = run_cmd_on_shell("oc get pod -n {}".format(operator_config.ocs_namespace))
            print("out: {}".format(out))
            time.sleep(5)
            break
        '''
    except Exception as run_err:
        print("main: Got an exception {}".format(run_err))
    finally:
        clean_temp_files()

if __name__=="__main__":
    main()

