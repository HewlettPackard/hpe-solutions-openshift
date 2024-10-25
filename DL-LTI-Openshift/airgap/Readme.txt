Airgap Deployment Process:
==========================
Create Yum Repo server
---------------
1.Navigate to yum folder
  cd /opt/hpe-solutions-openshift-master/DL-LTI-Openshift/airgap/yum
  provide yum_repo_server_ip in input.yaml file.
  provide yum_server ip in hosts file.

2.Run the below command to create yum repo server
  ansible-playbook -i hosts playbooks/create_local_yum_repo.yaml
  
3.Run the below commands to download and save in the /var/www/html/ocp_packages folder
  mkdir -p /var/www/html/ocp_packages
  cp rhcos-live.x86_64.iso /var/www/html/ocp_packages
  cp rhel-9.4-x86_64-dvd.iso /var/www/html/ocp_packages
  wget --execute="robots = off" --mirror --convert-links --no-parent --wait=5 https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/$ocp_version/ -A "openshift-*-linux-$ocp_version*" --no-directories --no-check-certificate -P /var/www/html/ocp_packages


Mirror Registry
---------------
1.Navigate to /opt/hpe-solutions-openshift-master/DL-LTI-Openshift/ folder and make sure to fill the below values in input.yaml file
  vi /opt/hpe-solutions-openshift-master/DL-LTI-Openshift/input.yaml
   is_environment_airgap: 'yes'
   mirror_registry_ip:
   mirror_registry_fqdn:
   email:
   OCP_RELEASE:
   LOCAL_REGISTRY:
   LOCAL_REPOSITORY:
   ARCHITECTURE:
   sshKey: ''
   pull_secret: ''
   base_path:

2.Once the input.yaml filled with values then copy to airgap/mirror_registry folder
	cp input.yaml  /opt/hpe-solutions-openshift-master/DL-LTI-Openshift/airgap/mirror_registry/
2.Navigate to mirror_registry folder
   cd /opt/hpe-solutions-openshift-master/DL-LTI-Openshift/airgap/mirror_registry

3.Download and install the mirror registry
   a)ansible-playbook playbooks/download_mirror_registry_package.yaml
   b)ansible-playbook playbooks/install_mirror_registry.yaml
   c)generate ssl certificates
		ansible-playbook playbooks/generate_ssl_certs.yaml
   d)run the below commands to copy the above generated ssl certs
        cp certs/ssl.key quay-install/quay-config/
        cp certs/ssl.cert quay-install/quay-config/
        cat certs/rootCA.pem >> quay-install/quay-config/ssl.cert
		mkdir -p /etc/containers/certs.d/<mirror_registry_fqdn>        # Here provide you mirror registryg fqdn
        cp certs/rootCA.pem  /etc/containers/certs.d/<mirror_registry_fqdn>/ca.crt
        cp certs/rootCA.pem /etc/pki/ca-trust/source/anchors/
        sudo update-ca-trust extract
        systemctl restart quay-app
		
4.ansible-playbook site.yaml
	the site.yaml file containes the followeing playbooks
		  - import_playbook: playbooks/download_openshift_cli.yaml
          - import_playbook: playbooks/create_json_pull_secret.yaml
          - import_playbook: playbooks/update_json_pull_secret.yaml
          - import_playbook: playbooks/mirroring_ocp_image_repository.yaml
 
OpenShift Solution Deployment
------------------------------ 

