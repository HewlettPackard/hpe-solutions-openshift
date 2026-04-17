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
echo "Verifying subscription manager status"
echo "============================================================"
subscription_status=$(subscription-manager status | grep -e "Current"|awk '{print $3}')
expected="Current"
if [[ $subscription_status == $expected ]]
then
    echo "System is registered to Red Hat Subscription Manager"
    echo "Enabling required Red Hat repositories"
    subscription-manager repos --enable=rhel-7-server-rpms --enable=rhel-7-server-extras-rpms --enable=rhel-7-server-optional-rpms --enable=rhel-server-rhscl-7-rpms
else
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    echo "Please subscribe to Red Hat Subscription Manager before proceeding further"
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    exit 1
fi

echo "============================================================"
echo "Installing development tools"
echo "============================================================"
yum -y install @development

echo "============================================================"
echo "Updating /etc/yum.repos.d/nginx.repo"
echo "============================================================"
cat > /etc/yum.repos.d/nginx.repo <<EOF
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/mainline/rhel/7/\$basearch
gpgcheck=0
enabled=1
EOF

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
rpm -qa | grep -qw rh-python36 || yum install rh-python36 -y

version=$(python -V 2>&1 | grep -Po '(?<=Python )\d.\d')
min=3.6
rpm -qa | grep -qw genisoimage || yum install genisoimage -y
rpm -qa | grep -qw bc || yum install bc -y
if [ 1 -eq "$(echo "${version} < ${min}" | bc)" ]
then
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    echo "This script requires python 3.6 or greater"
    echo "Install and enable Python 3.6 or above using the following command and install requirements"
    echo "scl enable rh-python36 bash"
    echo "pip3 install -r requirements.txt"
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    exit 1
else
    echo "Python3 is enabled"
    echo "Installing requirements"
    pip3 install -r requirements.txt
fi
