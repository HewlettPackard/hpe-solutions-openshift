Mirror Registry Installation Process
====================================

1.Navigate to Mirror registry folder
	cd /opt/GreenLake-for-OpenShift/DL-LTI-Openshift/airgap/mirror_registry

2.Enther the values in input.yaml file. a sample file is as below

cat input_sample.yaml
base_path: /opt/GreenLake-for-OpenShift/DL-LTI-Openshift/airgap/mirror_registry     #provide mirror registry folder location
mirror_registry_ip: 10.0.11.30                                                      #provide mirror registry ip             
mirror_registry_fqdn: dserver.anand.local                                           #provide mirror registry fqdn
pull_secret_path: /opt/GreenLake-for-OpenShift/DL-LTI-Openshift/airgap/mirror_registry/pull-secret  # provide pull secret file location, make sure in this path the file exists with the pull secret
email: eaj@hpe.com                                                                  #provide email id
OCP_RELEASE: 4.16.10                                                                #provide ocp release verison
LOCAL_REGISTRY: dserver.anand.local:8443                                            #provide <mirror registry fqdn>:8443
LOCAL_REPOSITORY: ocp416                                                            #provide your local repositroy 
ARCHITECTURE: x86_64                                                                #provide arichitecture

# DO not change these details
PRODUCT_REPO: openshift-release-dev                                                     
LOCAL_SECRET_JSON: /opt/GreenLake-for-OpenShift/DL-LTI-Openshift/airgap/mirror_registry/json_pull_secret.json
RELEASE_NAME: ocp-release
password_file_path: /opt/GreenLake-for-OpenShift/DL-LTI-Openshift/airgap/mirror_registry/credentials

3. run the below site.yaml playbook
	ansible-playbook site.yaml
	
	the site.yaml file contains the below playbooks
	  - import_playbook: playbooks/download_mirror_registry_package.yaml
      - import_playbook: playbooks/install_mirror_registry.yaml
      - import_playbook: playbooks/generate_ssl_certs.yaml
      - import_playbook: playbooks/create_json_pull_secret.yaml
      - import_playbook: playbooks/update_json_pull_secret.yaml
      - import_playbook: playbooks/download_openshift_cli.yaml
      - import_playbook: playbooks/mirroring_ocp_image_repository.yaml
      	
Optional:
 If you want to run each palybook at a time then run the below command for each playbook.
	ansible-playbook playbook/download_mirror_registry_package.yaml