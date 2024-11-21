###
## Copyright (2020) Hewlett Packard Enterprise Development LP
##
## Licensed under the Apache License, Version 2.0 (the "License");
## You may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
## http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
####

#!/bin/sh

echo "============================================================"
echo "Starting Environment Setup"
echo "============================================================"

# Detect the operating system (RHEL/CentOS vs. Ubuntu/Debian)
if [ -f /etc/redhat-release ]; then
    OS="RHEL"
    PACKAGE_MANAGER="yum"
    DEV_TOOLS="@development"
    FIREWALL_SERVICE="firewalld"
    SYSTEMCTL="systemctl"
    PYTHON_PKG="python3"
elif [ -f /etc/lsb-release ]; then
    OS="Ubuntu"
    PACKAGE_MANAGER="apt-get"
    DEV_TOOLS="build-essential"
    FIREWALL_SERVICE="ufw"
    SYSTEMCTL="systemctl"
    PYTHON_PKG="python3"
else
    echo "Unsupported operating system"
    exit 1
fi

echo "============================================================"
echo "Installing development tools"
echo "============================================================"
if [ "$OS" = "RHEL" ]; then
    $PACKAGE_MANAGER -y groupinstall $DEV_TOOLS
else
    $PACKAGE_MANAGER update -y
    $PACKAGE_MANAGER install -y $DEV_TOOLS
fi

echo "============================================================"
echo "Installing Nginx server"
echo "============================================================"
$PACKAGE_MANAGER -y install nginx

echo "============================================================"
echo "Starting Nginx server"
echo "============================================================"
SERVICE="httpd"
if ps ax | grep -v grep | grep $SERVICE > /dev/null
then
    $SYSTEMCTL stop $SERVICE
fi
$SYSTEMCTL enable nginx
$SYSTEMCTL start nginx

echo "============================================================"
echo "Installing ISO-repackaging utilities"
echo "============================================================"
if [ "$OS" = "RHEL" ]; then
    $PACKAGE_MANAGER -y install syslinux isomd5sum ansible-core
    $PACKAGE_MANAGER -y install genisoimage bc
else
    $PACKAGE_MANAGER update -y
    $PACKAGE_MANAGER install -y syslinux-utils isolinux isomd5sum ansible
    $PACKAGE_MANAGER install -y genisoimage bc
fi

echo "============================================================"
echo "Verifying Python3 status and installing prerequisites"
echo "============================================================"

# Upgrade pip and install required Python packages
pip3 install --upgrade pip setuptools_rust

# Check if Python version is 3.9 or higher
version=$($PYTHON_PKG -V 2>&1 | grep -Po '(?<=Python )\d+\.\d+')
min=3.9

if [ "$(printf '%s\n' "$min" "$version" | sort -V | head -n1)" != "$min" ]; then
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    echo "This script requires Python 3.9 or greater"
    echo "Install and enable Python 3.9 or above using the following command and install requirements"
    echo "scl enable python39 bash (RHEL) or update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 1 (Ubuntu)"
    echo "pip3 install -r requirements.txt"
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    exit 1
else
    echo "Python3 is enabled"
    echo "Installing requirements"
    pip3 install -r requirements.txt
fi
