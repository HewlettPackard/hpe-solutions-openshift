mkdir ../library/openshift_components
cd ../library/openshift_components

echo "Installing wget"
yum install -y wget

echo "Downloading latest OpenShift Container Platform Installer and Client"
wget --execute="robots = off" --mirror --convert-links --no-parent --wait=5 https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/ -A "openshift-*-linux-*" --no-directories --no-check-certificate
