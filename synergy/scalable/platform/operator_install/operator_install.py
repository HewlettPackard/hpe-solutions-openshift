"""
This script installs the required OpenShift Operators and sets up the environment \
to enable installation of kibana logstash and elasticsearch and installs the same.
"""
import sys
import json
import getopt
import os
import subprocess
import time
import requests

# Global variables
USER_NAME = ''
PASSWORD = ''
IP = ''
REQ_HEADER = {}
SERVICE_MESH_CSV_NAME = ''

#function to read the input json file
def readfiles():
    """
    Function to read the command line argument input JSON file
    which contains details about the requried OPENSHIFT setup

    Returns:
    The input json file to the init_setup function

    """
    argv = sys.argv[1:]
    try:
        opts, _args = getopt.getopt(argv, 'i:', ['inputfile'])
    except getopt.GetoptError:
        print('usage: install_operators.py -i <path to input file>')
        sys.exit(2)

    for opt, arg in opts:
        if opt == '-h':
            print('usage: install_operators.py -i <path to input file>')
            sys.exit()
        elif opt in ("-i", "--inputfile"):
            inputfile = arg
    return inputfile

#Function to Use Credentials and create a Token
def get_token(oc_path):
    """
    Get authentication token from OC command line tool

    Returns:
    The bearer token to the init_setup function

    """
    global USER_NAME, PASSWORD, IP
    print("Logging into your OpenShift Cluster")
    status, _ = subprocess.getstatusoutput(oc_path + "oc login "+IP+" -u "+USER_NAME+" -p "+ \
        PASSWORD +" --insecure-skip-tls-verify=true")
    if status == 0:
        print("Successfully logged into the OpenShift Cluster")
    else:
        print("Could not login, please enter correct login credentials")
        exit(1)
    token = subprocess.getoutput(oc_path + "oc whoami -t")

    return token

#General Function for get calls
def get_details(uri):
    """
    Function to make GET API calls

    Returns:
    GET call body is returned if call is successfull
    Else returns the status code of the error

    """
    global IP, REQ_HEADER
    get_call = "https://"+IP+uri
    get_response = requests.get(get_call, verify=False, headers=REQ_HEADER)
    if get_response.status_code == 200:
        get_response = json.loads(get_response.text)
        return get_response

    if(get_response.status_code != 200 and get_response.status_code == 404):
        return get_response.status_code


#function to create the OpenShift Operators
def operator_create(operator_name, channel, plan_approval, source, namespaces):
    """
    Function to create OpenShift operators using API POST calls:

    """

    global REQ_HEADER, IP
    uri = "https://"+IP+"/apis/operators.coreos.com/v1alpha1/namespaces/"+namespaces+ \
        "/subscriptions"

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
    if response.status_code == 409:
        print(operator_name+" Operator exists: Conflict!")
    if(response.status_code != 201 and response.status_code != 409):
        print("Operator " + operator_name +" could not be installed. Error code: " +str(response.status_code))
        exit(1)

#function to check the status of the service mesh creation
def check_service_mesh_status(namespaces):
    """
    Function to check the status of the service mesh creation
    Used in the creation of the service mesh control plane
    (Service mesh control plane requires the servicemesh operator to be up and running)
    """
    global SERVICE_MESH_CSV_NAME
    return get_details("/apis/operators.coreos.com/v1alpha1/namespaces/"+namespaces+ \
        "/clusterserviceversions/"+ SERVICE_MESH_CSV_NAME)

#function to deploy the control plane
def deploy_control_plane(operator_name, namespaces):
    """
    Create OpenShift Service Mesh Control Plane using API POST calls:

    """
    false = False
    true = True
    global REQ_HEADER
    response = 0
    count = 0
    #get_csv_name is used to update the SERVICE_MESH_CSV_NAME global variable
    get_csv_name(operator_name)
    while isinstance(response, int):
        response = check_service_mesh_status(namespaces)
        count += 1

    uri = "https://"+IP+"/apis/maistra.io/v1/namespaces/"+namespaces+"/servicemeshcontrolplanes"

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


#function to deploy the service mesh member roll
def deploy_member_roll(namespaces):
    """
    Create OpenShift Service Mesh Member Roll using API POST calls:

    """
    global REQ_HEADER
    uri = "https://"+IP+"/apis/maistra.io/v1/namespaces/"+namespaces+"/servicemeshmemberrolls"

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
    if response.status_code == 409:
        print("Member Roll exists: Conflict!")
    if(response.status_code != 201 and response.status_code != 409):
        print("Member Roll could not be installed. Error Code: " + str(response.status_code))
        exit(1)

#function to get the operator csv_name
def get_csv_name(operator_name):
    """
    Functon to get the csv_name of the operator
    csv_name is used to update the SERVICE_MESH_CSV_NAME global variable
    csv_name is required to check the servicemesh creation status

    """
    global SERVICE_MESH_CSV_NAME
    json_operator_name = "Sample_Operator"
    status = {}
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
                            SERVICE_MESH_CSV_NAME = status["currentCSV"]
                            break

#function to validate the operator creation
def validate_operator(operator_list):
    """
    Function to validate the OpenShift operators creation

    """
    fetched_operators = []
    global SERVICE_MESH_CSV_NAME
    print("Validating Operators...")
    operator_details = get_details("/apis/operators.coreos.com/v1alpha1/subscriptions?limit=250")
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

#function to validate the creation of service mesh control plane
def validate_control_plane(namespaces):
    """
    Function to validate service mesh control plane creation

    """
    count = 0
    print("Validating Control Plane Creation...")
    control_plane_details = get_details("/apis/maistra.io/v1/namespaces/"+namespaces+ \
        "/servicemeshcontrolplanes/basic-install")
    #check if get details return value is string or int ( i.e valid or invalid)
    while isinstance(control_plane_details, int):
        control_plane_details = get_details("/apis/maistra.io/v1/namespaces/"+namespaces+ \
            "/servicemeshcontrolplanes/basic-install")
        count += 1
    print("Control Plane is present and validated!")

#function to validate the creation of service mesh member roll
def validate_member_roll(namespaces):
    """
    Function to validate service mesh member roll creation

    """
    count = 0
    print("Validating Member Roll Creation...")
    control_plane_details = get_details("/apis/maistra.io/v1/namespaces/"+namespaces+ \
        "/servicemeshmemberrolls/default")
    #check if get details return value is string or int ( i.e valid or invalid)
    while isinstance(control_plane_details, int):
        control_plane_details = get_details("/apis/maistra.io/v1/namespaces/"+namespaces+ \
            "/servicemeshmemberrolls/default")
        count += 1
    print("Member roll is present and validated!")

#function to set up environment for ELK operators
def setupenv():
    """
    Function to set up elasticsearch.repo to enable yum installation of ELK operators

    """
    os.system("chmod +x enableyumrepos.sh")
    os.system("./enableyumrepos.sh")
    print("Environment is set up..")

#function to deploy elasticsearch operator
def deploy_elasticsearch():
    """
    Deploy elasticsearch operator by running the elasticsearch.sh shell script

    """
    os.system("chmod +x elasticsearch.sh")
    os.system("./elasticsearch.sh &> /dev/null")

##function to validate creation of elasticsearch operator
def validate_elasticsearch():
    """
    Validate elasticsearch operator by checking the status of the operator

    """
    status, _ = subprocess.getstatusoutput("systemctl status elasticsearch")
    if status == 0:
        print("Elasticsearch is Active")
    else:
        print("Elasticsearch is not running..")

#function to deploy kibana operator
def deploy_kibana(installer_ip):
    """
    Deploy kibana operator by running the kibana.sh shell script

    """
    os.system("chmod +x kibana.sh")
    os.system("./kibana.sh "+installer_ip+" &> /dev/null")

#function to validate creation of kibana operator
def validate_kibana(installer_ip, port):
    """
    Validate kibana operator by checking the status of the operator and GUI console

    """
    status, output = subprocess.getstatusoutput("systemctl status kibana")
    if status == 0:
        print("Kibana is Active")
        output = "CLOSED"
        print("Waiting for Kibana GUI to load..")
        while output != "OPEN":
            #pingtest.py program is used to ping IP address along with the PORT number \
            # and verify if its open or closed
            _, output = subprocess.getstatusoutput("python pingtest.py "+installer_ip+" "+ port+" 2> /dev/null && \
                echo OPEN || echo CLOSED")
        print("Kibana GUI is available for use on the installer IP.. ")
    else:
        print("Kibana is not running..")

#function to deploy logstash operator
def deploy_logstash():
    """
    Deploy logstash operator by running the logstash.sh shell script

    """
    os.system("chmod +x logstash.sh")
    os.system("./logstash.sh &> /dev/null")

#function to validate creation of logstash operator
def validate_logstash():
    """
    Validate logstash operator by checking the status of the operator

    """
    status, _ = subprocess.getstatusoutput("systemctl status logstash")
    if status == 0:
        print("Logstash is Active")
    else:
        print("Logstash is not running..")

#function for creating the initial setup
def init_setup():
    """
    Initialise Setup for making the required OpenShift API calls

    """
    global USER_NAME, PASSWORD, IP, REQ_HEADER

    input_file = readfiles()
    with open(input_file, 'r') as userinput:
        data = json.load(userinput)


    USER_NAME = data["OPENSHIFT_USERNAME"]
    PASSWORD = data["OPENSHIFT_PASSWORD"]
    IP = data["OPENSHIFT_DOMAIN"]+":"+data["OPENSHIFT_PORT"]

    oc_path = data["OPENSHIFT_CLIENT_PATH"]
    token = get_token(oc_path)
    print("Token is generated")
    REQ_HEADER = {
                "Authorization" : "Bearer "+token,
                "Content-Type" : "application/json"
                }

    source_list = data["OPERATOR_SOURCE_LIST"]
    operator_list = data["OPENSHIFT_OPERATOR_LIST"]
    channel_list = data["OPERATOR_CHANNEL_LIST"]
    install_plan_approval_list = data["OPERATOR_INSTALL_PLAN"]
    namespaces = data["OPENSHIFT_PROJECT_NAME"]
    installer_ip = data["OPENSHIFT_INSTALLER_IP"]



    print("Creating Operators...")
    for i, j, k, l in zip(operator_list, channel_list, install_plan_approval_list, source_list):
        if i == "servicemeshoperator":
            operator_create(i, j, k, l, "openshift-operators")
        else:
            operator_create(i, j, k, l, namespaces)

    validate_operator(operator_list)

    #create control plane and member roll only if servicemesh operator \
    # is in the required list of operators
    if "servicemeshoperator" in operator_list:
        print("\n")
        print("Deploying Service Mesh Control Plane..")
        deploy_control_plane("servicemeshoperator", namespaces)
        validate_control_plane(namespaces)
        print("\n")

        print("Deploying Service Mesh Member Roll...")
        deploy_member_roll(namespaces)
        validate_member_roll(namespaces)
        print("\n")

    print("Setting up environment for installation of yum repos..")
    setupenv()

    print("Deploying Elasticsearch on Installer VM IP...")
    deploy_elasticsearch()
    validate_elasticsearch()
    print("\n")


    print("Deploying Logstash on Installer VM IP...")
    deploy_logstash()
    validate_logstash()
    print("\n")


    print("Deploying Kibana on Installer VM IP...")
    deploy_kibana(installer_ip)
    #default port number of kibana is 5601
    validate_kibana(installer_ip, "5601")
    print("\n")

    print("AUTOMATION IS COMPLETE...")


#main function
def main():
    """
    Main Function

    """
    init_setup()

main()
