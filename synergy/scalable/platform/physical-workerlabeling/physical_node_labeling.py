import json
import subprocess
import os
import sys
from subprocess import Popen, PIPE
from proliantutils.ilo import client
from json_parser import VaultJSONParser, JSONParser
from getpass import getpass

def get_key():
    """ This function will get the vault key from the user
    """
    try:
        vault_key = getpass("Enter key for encrypted variables:")
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(vault_key)

def get_all_nodes(vault_key):
    """ This function will read data from the host.json
    and store it in the form od dictionary object
    """
    try:
        result = {}
        p = VaultJSONParser('hosts.json', vault_key)
        result = p.all_data()
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(result)

def get_node_label(node_fqdn_or_ip):
    """ This function will display all the labels for 
    each of the physical nodes mentioned in "hosts.json"
    """
    try:
        user_env = set_environment_var()
        command = "oc get node " + node_fqdn_or_ip + " --show-labels"
        res = Popen(command, stdin=PIPE, stdout=PIPE, stderr=PIPE, \
            env=user_env, shell=True)
        result = res.communicate('y\ny\ny\n'.encode('utf8'))
        print("\n" + str(result[0].decode('utf8')) + "\n")
        
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(result[0])

def display_all_node_labels(vault_key):
    """ Diplay all the labels that the node is currently having.
    """
    try:
        result = get_all_nodes(vault_key)
        final = {}
        for key, value in result.items():
            dict_object = {}
            if type(value) == type(dict()):
                v = list(value.values())
                get_label = get_node_label(v[0])
                current_labels = str(get_label.decode('utf8'))
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise

def get_all_nodes_health(vault_key):
    """ This function will use the proliantutils library
    module "get_host_health_data" to derive the health status of
    the following components 'BIOS, Fans, Temperature Sensors,
    Battery, Processor, Memory, Network, Storage.

    If the health status of all component is ok then overall
    health of the physical node is returned as "OK"
    """
    try:
        result = get_all_nodes(vault_key)
        final = {}
        for key, value in result.items():
            dict_object = {}
            if type(value) == type(dict()):
                v = list(value.values())
                ilo_client = client.IloClient(v[1], v[2], v[3])
                dict_object = ilo_client.get_host_health_data()
                q = VaultJSONParser(dict_object, vault_key)
                bios =  q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/BIOS_HARDWARE/STATUS")
                fans = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/FANS/STATUS")
                temperature = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/TEMPERATURE/STATUS")
                battery = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/BATTERY/STATUS")
                processor = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/PROCESSOR/STATUS")
                memory = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/MEMORY/STATUS")
                network = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/NETWORK/STATUS")
                storage = q.dict_query("GET_EMBEDDED_HEALTH_DATA/HEALTH_AT_A_GLANCE/STORAGE/STATUS")
                total_health = [bios, fans, temperature, battery, processor,\
                    memory, network, storage]
                result1 = len(set(total_health)) == 1
                if result1:
                    final[v[0]] = "OK"
                else:
                    final[v[0]] = "Degraded"
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
        
    return(final)

def get_all_node_security_status(vault_key):
    """ This function will use the proliantutils library
    module "get_current_bios_settings" to derive the status of
    the following BIOS configuration which are important for
    the security: 'secure boot status (enabled), asset tag (locked),
    UEFI Shell Script Verification (enabled), 
    UEFI Shell Startup (disabled), Processor AES (enabled)"
    
    If the value of any of the configuration deviates from the 
    recommended value, overall security status will be marked as 
    degraded. Refer to BIOS user guide for recommended value of these
    configurations
    """
    try:
        result = get_all_nodes(vault_key)
        final = {}
        for key, value in result.items():
            dict_object = {}
            if type(value) == type(dict()):
                v = list(value.values())
                ilo_client = client.IloClient(v[1], v[2], v[3])
                dict_object = ilo_client.get_current_bios_settings()
                q = VaultJSONParser(dict_object, vault_key)
                secure_boot_status =  q.dict_query("SecureBootStatus")
                asset_tag = q.dict_query("AssetTagProtection")
                shell_script_verify = q.dict_query("UefiShellScriptVerification")
                shell_startup = q.dict_query("UefiShellStartup")
                processor_aes = q.dict_query("ProcAes")
                if v[0] == "secphyworker1.sec.twentynet.local" and \
                    secure_boot_status.lower() == "disabled":
                    final[v[0]] = "OK"
                elif secure_boot_status.lower() == "enabled" and \
                    asset_tag.lower() == "locked" and \
                        shell_script_verify.lower() == "enabled" and \
                            shell_startup.lower() == "disabled" and \
                                processor_aes.lower() == "enabled":
                    final[v[0]] = "OK"
                else:
                    final[v[0]] = "Degraded"
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(final)

   
def set_environment_var():
    """
    This function will set the PATH and KUBECONFIG environment variables
    as per the user defined values in "config.json" file
    """
    try:
        data = JSONParser("config.json")
        kubeconfig = data.query("kubeconfig_path")
        path = data.query("oc_command_path")
        os.environ["PATH"] += os.pathsep + os.path.join(path)
        os.environ["KUBECONFIG"] = kubeconfig
        user_env = os.environ
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(user_env)

def label_for_health(vault_key):
    """
    This module will label the physical nodes as per the 
    overall health status "OK or Degraded" of the node.
    """
    try:
        user_env = set_environment_var()
        data = get_all_nodes_health(vault_key)
        for key, value in data.items():
            command = "oc label node " + key + " health=" + value + \
                " --overwrite=true"
            res = Popen(command, stdin=PIPE, stdout=PIPE, stderr=PIPE, \
                env=user_env, shell=True)
            res = res.communicate('y\ny\ny\n'.encode('utf8'))
            print("\n" + str(key))
            get_label = get_node_label(key)
            actual_label = str(get_label.decode('utf8'))
            expected_label = "health=" + value
            if (actual_label.find(expected_label) != -1):
                print("\n Verified - Label " + " health=" + value + \
                    " is added to the node " + key)
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(res[1])

def label_for_security(vault_key):
    """This module will label the physical nodes as per the 
    overall security posture "OK or Degraded" of the node.
    """
    try:
        user_env = set_environment_var()
        data = get_all_node_security_status(vault_key)
        for key, value in data.items():
            command = "oc label node " + key + " security=" + value + \
                " --overwrite=true"
            res = Popen(command, stdin=PIPE, stdout=PIPE, stderr=PIPE, \
                env=user_env, shell=True)
            result = res.communicate('y\ny\ny\n'.encode('utf8'))
            get_label = get_node_label(key)
            actual_label = str(get_label.decode('utf8'))
            expected_label = "security=" + value
            if (actual_label.find(expected_label) != -1):
                print("\n Verified - Label " + " security=" + value + \
                    " is added to the node " + key)
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
            
    return(result[1])

def custom_labelling(vault_key):
    """This module will label the physical nodes as per the labels
    defined by user in the "hosts.json" file for each of 
    the physical node.
    """
    try:
        flag = False
        result = get_all_nodes(vault_key)
        for key, value in result.items():
            if type(value) == type(dict()):
                for k, v in value.items():
                    if k == "custom_label_required":
                        if value["custom_label_required"].lower() == "yes":
                            flag = True
                            break
                if flag:
                    for k, v in value.items():
                        if k == "custom_labels":
                            if type(v) == type(dict()):
                                for key1, value1 in v.items():
                                    dict_object = {}
                                    if type(value1) == type(dict()):
                                        user_env = set_environment_var()
                                        command = "oc label node " + \
                                            value['host_fqdn'] + " " + \
                                                value1['label_name'] + "=" + \
                                                    value1['label_val'] + \
                                                        " --overwrite=true"
                                        res = Popen(command, stdin=PIPE, \
                                            stdout=PIPE, stderr=PIPE, \
                                                env=user_env, shell=True)
                                        res = res.communicate('y\ny\ny\n'.\
                                            encode('utf8'))
                                        get_label = get_node_label(value['host_fqdn'])
                                        actual_label = str(get_label.decode('utf8'))
                                        expected_label = value1['label_name'] + \
                                            "=" + value1['label_val']
                                        if (actual_label.find(expected_label) != -1):
                                            print("\n Verified - Label " + value1['label_name'] + \
                                                "=" + value1['label_val'] + \
                                                " is added the node " + value['host_fqdn'])
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
    return(res[1])

def main():
    try:
        vault_key = get_key()
        options = ["Get the physical worker node details that user wishes to configure.", \
            "Get current health status of the physical worker node", \
                "Get security parameters of the physical worker node", \
                        "Label the physical worker with health status", \
                            "Label the physical worker with security status", \
                                    "Custom labels", \
                                        "Display current labels on the node", \
                                        "Quit"]
        
        # Display options to user
        for i in range(len(options)):
            print("\n" + str(i+1) + ":", options[i])
        
        # Take user inputs
        user_input = 0
        while user_input != 8:
            try:
                user_input = int(input("\n Enter the choice number: "))
                print("\n\n")
                if user_input in range(1, 9):
                    if user_input == 1:
                        print(get_all_nodes(vault_key))
                    if user_input == 2:
                        print(get_all_nodes_health(vault_key))
                    if user_input == 3:
                        print(get_all_node_security_status(vault_key))
                    if user_input == 4:
                        print(label_for_health(vault_key))
                    if user_input == 5:
                        print(label_for_security(vault_key))
                    if user_input == 6:
                        print(custom_labelling(vault_key))
                    if user_input == 7:
                        display_all_node_labels(vault_key)
                    if user_input == 8:
                        print("Exiting!!")
                else:
                    print("Invalid input!")
            except:
                print("Invalid input!",sys.exc_info()[0],"occured.")
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
        
if __name__ == "__main__":
    main()