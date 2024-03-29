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


echo "Generating the Manifests"
/opt/hpe/solutions/ocp/hpe-solutions-openshift/synergy/scalable/installer/library/openshift_components/openshift-install create manifests --dir=/opt/hpe/solutions/ocp/hpe-solutions-openshift/synergy/scalable/installer/ignitions

echo "Generating the Ignition files"
/opt/hpe/solutions/ocp/hpe-solutions-openshift/synergy/scalable/installer/library/openshift_components/openshift-install create ignition-configs --dir=/opt/hpe/solutions/ocp/hpe-solutions-openshift/synergy/scalable/installer/ignitions

