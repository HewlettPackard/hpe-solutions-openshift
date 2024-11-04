ocp_version=$1
yumrepo=$2
is_airgap=$3

ocp_image_version=`echo $ocp_version | cut -d"." -f1-2`
echo $ocp_image_version

echo "Installing wget"
yum install -y wget

rm -rf /tmp/image/*
mkdir /tmp/image/
echo "Downloading openshift images"
if [[ "$is_airgap" == "no" ]]; then
    wget --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/$ocp_image_version/latest/rhcos-live-initramfs.x86_64.img -P /tmp/image/
    wget --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/$ocp_image_version/latest/rhcos-live-kernel-x86_64 -P /tmp/image/
    wget --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/$ocp_image_version/latest/rhcos-live-rootfs.x86_64.img -P /tmp/image/
else
    wget --wait=10 http://$yumrepo/ocp_packages/rhcos-live.x86_64.iso -P /tmp/image/
fi

chmod -R +x /tmp/image/

mkdir -p ../library/openshift_components
cd ../library/openshift_components

echo "Downloading openshift packages"

echo "Downloading latest OpenShift Container Platform Installer and Client"
if [[ "$is_airgap" == "no" ]]; then
    wget --execute="robots = off" --mirror --convert-links --no-parent --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/$ocp_version/ -A "openshift-*-linux-$ocp_version*" --no-directories --no-check-certificate
else
    wget http://$yumrepo/ocp_packages/openshift-install-linux-$ocp_version.tar.gz
    wget http://$yumrepo/ocp_packages/openshift-client-linux-$ocp_version.tar.gz
fi

