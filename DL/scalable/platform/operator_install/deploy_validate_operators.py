###
##### Copyright 2020 Hewlett Packard Enterprise Development LP
#####
##### Licensed under the Apache License, Version 2.0 (the "License");
##### You may not use this file except in compliance with the License.
##### You may obtain a copy of the License at
#####
##### http://www.apache.org/licenses/LICENSE-2.0
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
This script installs the required OpenShift Operators and Cluster Logging Operators \
"""
import sys
import json
import getopt
import os
import subprocess
import time
import requests

import config

# Creating a generic object for Config class 
operator_config = config.Config()

# Global variables
REQ_HEADER = {}
OPERATOR_CSV_NAME = ''

def get_token():
    """
    Get authentication token using the cluster credentials on the OC command line tool

    Returns:
    The bearer token to the init_setup function
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
        token = subprocess.getoutput(operator_config.oc_path + "oc whoami -t")
    except Exception as run_except:
        print("get_token: The exception '{}' occured while creating a token using cluster credentials".format(run_except))

    return token

def get_details(uri):
    """
    Function to make GET API calls

    Returns:
    GET call body is returned if call is successfull
    Else returns the status code of the error

    """
    try:
        global REQ_HEADER
        get_call = "https://" + operator_config.oc_host + uri
        get_response = requests.get(get_call, verify=False, headers=REQ_HEADER)
        if get_response.status_code == 200:
            get_response = json.loads(get_response.text)
            return get_response

        if get_response.status_code != 200 and get_response.status_code == 404:
            return get_response.status_code
    except requests.ConnectionError as req_err:
        print("get_details: The exception '{}' occured during connection".format(req_err))
    except Exception as run_err:
        print("get_details: The exception '{}' has occured".format(run_err))

def operator_create(operator_name, channel, plan_approval, source, namespaces):
    """
    Function to create OpenShift operators using API POST calls:
    """

    global REQ_HEADER
    try:
        uri = "https://" + operator_config.oc_host + "/apis/operators.coreos.com/v1alpha1/namespaces/" + \
            namespaces + "/subscriptions"
        payload = {
            "apiVersion": "operators.coreos.com/v1alpha1",
            "kind": "Subscription",
            "metadata": {
                "name": operator_name,
                "namespace": namespaces
            },
            "spec": {
                "source": source,
                "sourceNamespace": "openshift-marketplace",
                "name": operator_name,
                "channel": channel,
                "installPlanApproval": plan_approval
            }
        }

        response = requests.post(uri, json=payload, verify=False, headers=REQ_HEADER)

        if response.status_code == 201:
            print("Creating Operator "+ operator_name)
        elif response.status_code == 409:
            print(operator_name+" Operator exists: Conflict!")
        elif response.status_code != 201 and response.status_code != 409:
            print("Operator " + operator_name +" could not be installed. Error code: " + \
                  str(response.status_code))
            sys.exit(1)
    except Exception as run_err:
        print("operator_create: The exception '{}' has occured while creating the operator: {}".format(run_err, operator_name))

def logging_instance(operator_name):
    """
    Function to create a logging instance inside the cluster logging operator

    """

    global REQ_HEADER
    response = 0
    count = 0
    try:
        #get_csv_name is used to update the OPERATOR_CSV_NAME global variable
        get_csv_name(operator_name)
        while isinstance(response, int):
            response = check_service_creation("openshift-logging")
            count += 1
        uri = "https://"+operator_config.oc_host+"/apis/logging.openshift.io/v1/namespaces/openshift-logging/clusterloggings"
        payload = {
            "apiVersion": "logging.openshift.io/v1",
            "kind": "ClusterLogging",
            "metadata": {
                "name": "instance",
                "namespace": "openshift-logging"
            },
            "spec": {
                "managementState": "Managed",
                "logStore": {
                    "type": "elasticsearch",
                    "elasticsearch": {
                        "nodeCount": 3,
                        "redundancyPolicy": "SingleRedundancy",
                        "storage": {
                            "storageClassName": operator_config.storage_class_name,
                            "size": "200G"
                        }
                    }
                },
                "visualization": {
                    "type": "kibana",
                    "kibana": {
                        "replicas": 1
                    }
                },
                "curation": {
                    "type": "curator",
                    "curator": {
                        "schedule": "30 3 * * *"
                    }
                },
                "collection": {
                    "logs": {
                        "type": "fluentd",
                        "fluentd": {}
                    }
                }
            }
        }

        response_check = 0
        while response_check not in (201, 409):
            response = requests.post(uri, json=payload, verify=False, headers=REQ_HEADER)
            response_check = response.status_code
            if response.status_code == 201:
                print("Created Logging instance")
            elif response.status_code == 409:
                print("Logging instance exists: Conflict!")
    except Exception as run_err:
        print("logging_instance: The  exception '{}' has occured while creating a logging instance".format(run_err))

def check_service_creation(namespaces):
    """
    Function to check the status of the service mesh creation
    Used in the creation of the service mesh control plane
    (Service mesh control plane requires the servicemesh operator to be up and running)
    """
    global OPERATOR_CSV_NAME
    try:
        return get_details("/apis/operators.coreos.com/v1alpha1/namespaces/" + namespaces + \
            "/clusterserviceversions/" + OPERATOR_CSV_NAME)
    except Exception as run_err:
        print("check_service_creation: The exception '{}' has occured while checking service creation".format(run_err))

def deploy_control_plane(operator_name, namespaces):
    """
    Create OpenShift Service Mesh Control Plane using API POST calls:
    """
    false = False
    true = True
    global REQ_HEADER
    response = 0
    count = 0
    try:
        #get_csv_name is used to update the OPERATOR_CSV_NAME global variable
        get_csv_name(operator_name)

        while isinstance(response, int):
            response = check_service_creation(namespaces)
            count += 1

        uri = "https://" + operator_config.oc_host + "/apis/maistra.io/v1/namespaces/" + namespaces + \
              "/servicemeshcontrolplanes"

        payload = {
            "apiVersion": "maistra.io/v1",
            "kind": "ServiceMeshControlPlane",
            "metadata": {
                "name": "basic-install",
                "namespace": namespaces
            },
            "spec": {
                "istio": {
                    "gateways": {
                        "istio-egressgateway": {
                            "autoscaleEnabled": false
                        },
                        "istio-ingressgateway": {
                            "autoscaleEnabled": false
                        }
                    },
                    "mixer": {
                        "policy": {
                            "autoscaleEnabled": false
                        },
                        "telemetry": {
                            "autoscaleEnabled": false
                        }
                    },
                    "pilot": {
                        "autoscaleEnabled": false,
                        "traceSampling": 100
                    },
                    "kiali": {
                        "enabled": true
                    },
                    "grafana": {
                        "enabled": true
                    },
                    "tracing": {
                        "enabled": true,
                        "jaeger": {
                            "template": "all-in-one"
                        }
                    }
                }
            }
        }

        response_check = 0
        while response_check not in (201, 409):
            response = requests.post(uri, json=payload, verify=False, headers=REQ_HEADER)
            response_check = response.status_code

            if response.status_code == 201:
                print("Created Service Mesh Control Plane")
            elif response.status_code == 409:
                print("Service Mesh exists: Conflict!")
    except Exception as run_err:
        print("deploy_control_plane: The exception '{}' has occured while deploying the control plane".format(run_err))


def deploy_member_roll(namespaces):
    """
    Create OpenShift Service Mesh Member Roll using API POST calls:
    """
    global REQ_HEADER
    try:
        uri = "https://" + operator_config.oc_host + "/apis/maistra.io/v1/namespaces/" + namespaces + \
              "/servicemeshmemberrolls"

        payload = {
            "apiVersion": "maistra.io/v1",
            "kind": "ServiceMeshMemberRoll",
            "metadata": {
                "name": "default",
                "namespace": namespaces
            },
            "spec": {
                "members": [
                    "your-project",
                    "another-of-your-projects"
                ]
            }
        }

        response = requests.post(uri, json=payload, verify=False, headers=REQ_HEADER)

        if response.status_code == 201:
            print("Created Service Mesh Member Roll")
        elif response.status_code == 409:
            print("Member Roll exists: Conflict!")
        elif response.status_code != 201 and response.status_code != 409:
            print("Member Roll could not be installed. Error Code: " + str(response.status_code))
            sys.exit(1)
    except Exception as run_err:
        print("deploy_member_roll: The exception '{}' has occured while deploying the member roll".format(run_err))

def get_csv_name(operator_name):
    """
    Functon to get the csv_name of the operator
    csv_name is used to update the OPERATOR_CSV_NAME global variable
    csv_name is required to check the servicemesh creation status
    """

    global OPERATOR_CSV_NAME
    json_operator_name = "Sample_Operator"
    status = {}
    try:
        while json_operator_name != operator_name or "currentCSV" not in status.keys():
            operator_details = get_details("/apis/operators.coreos.com/v1alpha1/subscriptions?limit=250")
            for i in operator_details["items"]:
                metadata = i["metadata"]
                json_operator_name = metadata["name"]
                if json_operator_name == operator_name:
                    time.sleep(2)
                    if "status" in i.keys():
                        status = i["status"]
                        if "state" and "currentCSV" in status.keys():
                            if status["state"] == "AtLatestKnown":
                                OPERATOR_CSV_NAME = status["currentCSV"]
                                break
    except IndexError as idx_err:
        print("Got an container index related exception '{}'".format(idx_err))
    except Exception as run_err:
        print("get_csv_name: The exception '{}' has occured while getting the csv name".format(run_err))

def validate_operator(operator_list):
    """
    Function to validate the OpenShift operators creation
    """
    fetched_operators = []
    print("Validating Operators...")
    operator_details = get_details("/apis/operators.coreos.com/v1alpha1/subscriptions?limit=250")
    try:
        if isinstance(operator_details, int):
            print("Could not Fetch Operator Details..Validation Failed..Retry")
        else:
            for i in operator_details["items"]:
                metadata = i["metadata"]
                operator_name = metadata["name"]
                fetched_operators.append(operator_name)

            #condition to check if all required operators are present in the list of fetched operators
            if set(operator_list) <= set(fetched_operators):
                print("The Required Operators have been Created")
            else:
                print("The Required Operator creation has failed")
    except IndexError as idx_err:
        print("Got an container index related exception '{}'".format(idx_err))
    except Exception as run_err:
        print("validate_operator: The exception '{}' has occured while validating the operators".format(run_err))

def validate_control_plane(namespaces):
    """
    Function to validate service mesh control plane creation
    """
    count = 0
    print("Validating Control Plane Creation...")
    try:
        control_plane_details = get_details("/apis/maistra.io/v1/namespaces/" + namespaces + \
        "/servicemeshcontrolplanes/basic-install")
        #check if get details return value is string or int ( i.e valid or invalid)
        while isinstance(control_plane_details, int):
            control_plane_details = get_details("/apis/maistra.io/v1/namespaces/" + namespaces + \
                "/servicemeshcontrolplanes/basic-install")
            count += 1
        print("Control Plane is present and validated!")
    except Exception as run_err:
        print("validate_control_plane: The exception '{}' has occured while validating the control plane creation".format(run_err))

def validate_member_roll(namespaces):
    """
    Function to validate service mesh member roll creation
    """
    count = 0
    print("Validating Member Roll Creation...")
    try:
        control_plane_details = get_details("/apis/maistra.io/v1/namespaces/" + namespaces + \
            "/servicemeshmemberrolls/default")
        #check if get details return value is string or int ( i.e valid or invalid)
        while isinstance(control_plane_details, int):
            control_plane_details = get_details("/apis/maistra.io/v1/namespaces/" + namespaces + \
                "/servicemeshmemberrolls/default")
            count += 1
        print("Member roll is present and validated!")
    except Exception as run_err:
        print("validate_member_roll: The exception '{}' has occured while validating the member roll creation".format(run_err))

def validate_cluster_logging_instance():
    """
    Function to validate cluster logging instance creation
    """
    count = 0
    print("Validating Cluster Logging Instance Creation...")
    cluster_logging_details = get_details("/apis/logging.openshift.io/v1/namespaces/openshift-logging/clusterloggings/instance")
    try:
        #check if get details return value is string or int ( i.e valid or invalid)
        while isinstance(cluster_logging_details, int):
            cluster_logging_details = get_details("/apis/logging.openshift.io/v1/namespaces/openshift-logging/clusterloggings/instance")
            count += 1
        print("Cluster Logging Instance is present and validated!")
    except Exception as run_err:
        print("validate_cluster_logging_instance: The exception '{}' has occured while validating the clister logging instance creation".format(run_err))

def create_project(*project_details):
    """
    Function to create OpenShift projects:
    """

    global REQ_HEADER
    project_name = project_details[0]
    try:
        uri = "https://" + operator_config.oc_host + "/api/v1/namespaces"
        payload = {
            "metadata": {
                "name": project_name,
                "labels": {
                    "openshift.io/cluster-monitoring": "true"
                }
            }
        }

        response = requests.post(uri, json=payload, verify=False, headers=REQ_HEADER)

        if response.status_code == 201:
            _print = "Created Project " + project_name
        elif response.status_code == 409:
            print("Project " + project_name + " exists: Conflict!")
        elif response.status_code != 201 and response.status_code != 409:
            print("Project " + project_name + " could not be created")
            sys.exit(1)
    except Exception as run_err:
        print("create_project: The exception '{}' has occured while creating the project".format(run_err))

    try:
        uri = "https://" + operator_config.oc_host + "/apis/operators.coreos.com/v1/namespaces/" + project_name + "/operatorgroups"
        if len(project_details) == 2:
            payload ={
                "apiVersion": "operators.coreos.com/v1",
                "kind": "OperatorGroup",
                "metadata": {
                    "generateName": project_name + "-",
                    "namespace": project_name
                },
                "spec": {
                "targetNamespaces": [
                    project_name
                ]
            }
            }
        else:
            payload ={
                "apiVersion": "operators.coreos.com/v1",
                "kind": "OperatorGroup",
                "metadata": {
                    "generateName": project_name + "-",
                    "namespace": project_name
                }
            }
        response = requests.post(uri, json=payload, verify=False, headers=REQ_HEADER)

        if response.status_code == 201:
            _print = "Created Operator Group for Project "+ project_name
        elif response.status_code == 409:
            print("Project " + project_name + " operator group exists: Conflict!")
        elif response.status_code != 201 and response.status_code != 409:
            print("Project " + project_name + " operator group could not be created")
            sys.exit(1)
    except Exception as run_err:
        print("create_project: The exception '{}' has occured while creating the project operator group".format(run_err))

#function for creating the initial setup
def init_setup():
    """
    Initialise Setup for making the required OpenShift API calls
    """
    global REQ_HEADER
    
    token = get_token()
    print("Token is generated")
    REQ_HEADER = {
                "Authorization" : "Bearer " + token,
                "Content-Type" : "application/json"
                }

    try:
        print("Creating Operators...")
        create_project("openshift-operators-redhat")
        create_project("openshift-logging", "spec")
        for i, j, k, l in zip(operator_config.operator_list, operator_config.channel_list, \
            operator_config.install_plan_approval_list, operator_config.source_list):
            if i == "servicemeshoperator":
                operator_create(i, j, k, l, "openshift-operators")
            elif i == "elasticsearch-operator":
                operator_create(i, j, k, l, "openshift-operators-redhat")
            elif i == "cluster-logging":
                operator_create(i, j, k, l, "openshift-logging")
            elif i == "jaeger-product":
                operator_create(i, j, k, l, "openshift-operators")
            else:
                operator_create(i, j, k, l, operator_config.namespaces)

        validate_operator(operator_config.operator_list)

        #create control plane and member roll only if servicemesh operator \
        # is in the required list of operators
        if "servicemeshoperator" in operator_config.operator_list:
            print("\n")
            print("Deploying Service Mesh Control Plane..")
            deploy_control_plane("servicemeshoperator", operator_config.namespaces)
            validate_control_plane(operator_config.namespaces)
            print("\n")

            print("Deploying Service Mesh Member Roll...")
            deploy_member_roll(operator_config.namespaces)
            validate_member_roll(operator_config.namespaces)
            print("\n")

        print("Deploying Logging Cluster..")
        logging_instance("cluster-logging")
        validate_cluster_logging_instance()
        print("\n")

        print("AUTOMATION IS COMPLETE...")
    except Exception as run_err:
        print("init_setup: The exception '{}' has occured while initialising the setup".format(run_err))

#main function
def main():
    """
    Main Function

    """
    init_setup()

main()

