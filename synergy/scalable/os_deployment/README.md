# OS Deployment

This folder consists of scripts to deploy operating system over servers using virtual media.

## Prerequisites 
Installer machine with the following:
1. RHEL 7 installed and registered with valid repository. 
2. Static IP on same network as the management plane of the servers.
3. Python 3.5 or above is present and latest version associated pip is present.
4. Web server (preferably Nginx) is configured

## Installation
1. Installing the prerequisites.
   ```
   # pip3 install requirements.txt
   ```
2. Update the servers dictionary in deploy_os.py script with the server details on which the operating system is to be installed.
   ```
   # vi deploy_os.py
   ```
   Example values as follows:
   ```
    server = [{
        "Server_serial_number"  : "MXQ920023X",
        "ILO_Address"           : "10.0.x.x",
        "ILO_Username"          : "admin",
        "ILO_Password"          : "password",
        "Hostname"              : "master.tennet.local",
        "Host_IP"               : "x.x.x.x",
        "Host_Username"         : "root",
        "Host_Password"         : "Password",
        "Host_Netmask"          : "255.255.0.0",
        "Host_Gateway"          : "10.0.x.x",
        "Host_DNS"              : "10.0.x.x",
        "OS_image_name"         : "rhel-server-7.6-x86_64-dvd.iso",
        "Web_server_address"    : "10.0.x.x"
    },
    {
        "Server_serial_number"  : "MXQ93906KB",
        "ILO_Address"           : "10.0.x.x",
        "ILO_Username"          : "admin",
        "ILO_Password"          : "password",
        "Hostname"              : "worker.tennet.local",
        "Host_IP"               : "10.0.x.x",
        "Host_Username"         : "root",
        "Host_Password"         : "Password",
        "Host_Netmask"          : "255.255.0.0",
        "Host_Gateway"          : "10.0.x.x",
        "Host_DNS"              : "10.0.x.x",
        "OS_image_name"         : "rhel-server-7.6-x86_64-dvd.iso",
        "Web_server_address"    : "10.0.x.x"
    }]
   ```
3. Executing the script to deploy operating system.
   ```
   python3 deploy_os.py
   ```
