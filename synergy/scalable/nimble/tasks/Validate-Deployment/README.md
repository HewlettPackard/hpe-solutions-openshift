________________________________________
## Validate-Deployment ##
________________________________________

This folder contains playbooks that set up Docker Registry with persistent storage and validate the OCP deployment by creating an application.


**DockerRegistry.yaml play** <br/>
This play will check if the OCP has an inbuild Registry running with persistent storage. If not it will create a Docker Registry pod, after which it creates a PVC with name 'volreg' and use this PVC to mount persistent storage on the Docker Registry pod.

<br/>

**validate-pod-pv.yaml play**  <br/>
This play creates a Project within OCP with the name provided during execution. After creating the project it creates a PVC with name 'pvc100', further it checks and deploys a 'mariadb' application which uses the persistent storage from the PVC created.
