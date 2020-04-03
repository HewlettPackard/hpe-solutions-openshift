echo "Generating the Manifests"
/etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/library/openshift_components/openshift-install create manifests --dir=/etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/ignitions

echo "Generating the Ignition files"
/etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/library/openshift_components/openshift-install create ignition-configs --dir=/etc/ansible/hpe-solutions-openshift/synergy/scalable/installer/ignitions

