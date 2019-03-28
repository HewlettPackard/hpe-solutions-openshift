________________________________________
## Validate-Deployment ##
________________________________________

This folder contains a playbook that sets up Docker Registry with persistent storage.


**DockerRegistry.yaml play** <br/>
This play will check if the OCP has an inbuild Registry running with persistent storage. If not it will create a Docker Registry pod, after which it creates a PVC with name 'volreg' and use this PVC to mount persistent storage on the Docker Registry pod.

<br/>
