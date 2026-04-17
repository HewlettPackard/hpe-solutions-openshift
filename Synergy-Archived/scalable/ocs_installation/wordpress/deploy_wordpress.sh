oc new-project wordpress
sleep 2
oc project wordpress
#allow wordpress to run as root
oc adm policy add-scc-to-user anyuid -z default
#Set default storage
oc annotate storageclass ocs-storagecluster-ceph-rbd storageclass.kubernetes.io/is-default-class=true
sleep 2
oc create -f wordpress.yaml
sleep 5
echo "URL to access application"
var_url=`oc get route wordpress-http --template='{{ .spec.host }}'`
echo $var_url
