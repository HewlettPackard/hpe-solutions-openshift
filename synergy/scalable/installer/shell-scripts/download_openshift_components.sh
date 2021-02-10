###
##### Copyright (2021) Hewlett Packard Enterprise Development LP
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


mkdir ../library/openshift_components
cd ../library/openshift_components

echo "Installing wget"
yum install -y wget

echo "Downloading latest OpenShift Container Platform Installer and Client"
wget --execute="robots = off" --mirror --convert-links --no-parent --wait=5 https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/ -A "openshift-*-linux-*" --no-directories --no-check-certificate
