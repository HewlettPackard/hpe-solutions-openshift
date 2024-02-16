ocp_version=$1
ocp_image_version=`echo $ocp_version | cut -d"." -f1-2`
echo $ocp_image_version

echo "Installing wget"
yum install -y wget

mkdir /tmp/image/
rm -rf /tmp/image/*
echo "Downloading openshift images"
wget --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/$ocp_image_version/latest/rhcos-live-initramfs.x86_64.img -P /tmp/image/
wget --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/$ocp_image_version/latest/rhcos-live-kernel-x86_64 -P /tmp/image/
wget --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/$ocp_image_version/latest/rhcos-live-rootfs.x86_64.img -P /tmp/image/
chmod -R +x /tmp/image/

mkdir -p ../library/openshift_components
cd ../library/openshift_components

echo "Downloading openshift packages"

echo "Downloading latest OpenShift Container Platform Installer and Client"
wget --execute="robots = off" --mirror --convert-links --no-parent --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/$ocp_version/ -A "openshift-*-linux-$ocp_version*" --no-directories --no-check-certificate