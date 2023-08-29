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

echo "============================================================"
echo "Installing development tools"
echo "============================================================"
yum -y install @development

echo "============================================================"
echo "Installing Nginx server"
echo "============================================================"
yum -y install nginx

echo "============================================================"
echo "Starting Nginx server"
echo "============================================================"
SERVICE=httpd;
if ps ax | grep -v grep | grep $SERVICE > /dev/nulli
then
    systemctl stop httpd
fi
systemctl enable nginx
systemctl start nginx


echo "============================================================"
echo "Installing iso-repackaging utilities"
echo "============================================================"
yum -y install syslinux isomd5sum

echo "============================================================"
echo "Configuring firewall ports for HTTP and HTTPS"
echo "============================================================"
rpm -qa | grep -qw firewalld || yum install firewalld -y
systemctl enable firewalld
systemctl start firewalld
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --reload

echo "============================================================"
echo "Verifying Python3 status and installing the prerequisites"
echo "============================================================"
rpm -qa | grep -qw python38 || yum install python38 -y
pip3 install setuptools_rust
pip3 install --upgrade pip

version=$(python -V 2>&1 | grep -Po '(?<=Python )\d.\d')
min=3.8
rpm -qa | grep -qw genisoimage || yum install genisoimage -y
rpm -qa | grep -qw bc || yum install bc -y
if [ 1 -eq "$(echo "${version} < ${min}" | bc)" ]
then
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    echo "This script requires python 3.8 or greater"
    echo "Install and enable Python 3.8 or above using the following command and install requirements"
    echo "scl enable python38 bash"
    echo "pip3 install -r requirements.txt"
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    exit 1
else
    echo "Python3 is enabled"
    echo "Installing requirements"
    pip3 install -r requirements.txt
fi
