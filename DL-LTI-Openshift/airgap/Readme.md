Deploy OpenShift Container Platform using Airgap Method

=======================================================

follow below sections to deploy the OpenShift Container Platform through disconnected environment.

1. Create YUM repo server

2. Create Mirror registry

3. OpenShift Deployment

**Prerequisites:**

	we will be using one server for all the below services and which will be having internet access to download the images.

	Download server

	YUM server

	Mirror Registry

**Download/YUM/Mirror registry server  requirements**:

	a)should be installed with RHEL 9.4 

	b)At least 500 GB disk space (especially in the "/" partition), 4 CPU cores and 16GB RAM.

	c)OS disk: 2x 1.6 TB  ; Data disk: ~2 TB

    d)fill the values in input.yaml file   (vi /opt/hpe-solutions-openshift/DL-LTI-Openshift/input.yaml )

	e)Setup the Downlod server to configure the nginx, development tools and other python packages required for LTI installation.

	    Navigate to the directory, cd /opt/hpe-solutions-openshift/DL-LTI-Openshift/ and run the below command.

		  'sh setup.sh'



	   As part of setup.sh script it will create nginx service, so user must download and copy rhel 9.4 DVD ISO to /usr/share/nginx/html/



**1.Create Yum Repo server**

----------------------------------------

a)Navigate to /opt/hpe-solutions-openshift/DL-LTI-Openshift/ folder and update the hosts file with the yumrepo server details.

b)Navigate to yum folder

  cd /opt/hpe-solutions-openshift/DL-LTI-Openshift/airgap/yum

c)Run the below command to create yum repo server

  ansible-playbook -i /opt/hpe-solutions-openshift/DL-LTI-Openshift/hosts playbooks/create_local_yum_repo.yaml



**2.Mirror Registry**

--------------------------

a)Navigate to /opt/hpe-solutions-openshift/DL-LTI-Openshift/ folder and if it is airgap based deploymnt then make sure to fill the below values in input.yaml file

  vi /opt/hpe-solutions-openshift/DL-LTI-Openshift/input.yaml

 # fill the below values for the airgap deployment 

   is_environment_airgap: 'yes'

   mirror_registry_ip:

   mirror_registry_fqdn:

   LOCAL_REGISTRY:

   LOCAL_REPOSITORY:

   ARCHITECTURE:

b)Navigate to mirror_registry folder

   cd /opt/hpe-solutions-openshift/DL-LTI-Openshift/airgap/mirror_registry

c)Download and install the mirror registry

   ansible-playbook playbooks/download_mirror_registry_package.yaml

   ansible-playbook playbooks/install_mirror_registry.yaml

   generate ssl certificates

		ansible-playbook playbooks/generate_ssl_certs.yaml

   run the below commands to copy the above generated ssl certs

        cp certs/ssl.key quay-install/quay-config/

        cp certs/ssl.cert quay-install/quay-config/

        cat certs/rootCA.pem >> quay-install/quay-config/ssl.cert

		mkdir -p /etc/containers/certs.d/<mirror_registry_fqdn>        # Here provide you mirror registryg fqdn

        cp certs/rootCA.pem  /etc/containers/certs.d/<mirror_registry_fqdn>/ca.crt

        cp certs/rootCA.pem /etc/pki/ca-trust/source/anchors/

        sudo update-ca-trust extract

        systemctl restart quay-app



d)ansible-playbook site.yaml

	the site.yaml file containes the followeing playbooks

		  - import_playbook: playbooks/download_openshift_components.yaml  # it will download ocp related images, client and installer

          - import_playbook: playbooks/create_json_pull_secret.yaml

          - import_playbook: playbooks/update_json_pull_secret.yaml

          - import_playbook: playbooks/mirroring_ocp_image_repository.yaml



**3.OpenShift Solution Deployment**

------------------------------------------------------

  follow the below link for the OpenShift Deployment.

	https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/Readme.md
