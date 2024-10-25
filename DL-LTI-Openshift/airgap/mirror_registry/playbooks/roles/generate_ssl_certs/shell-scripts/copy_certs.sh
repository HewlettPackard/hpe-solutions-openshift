#!/bin/bash

base_path=$1

cd $base_path
cp certs/ssl.key quay-install/quay-config/
cp certs/ssl.cert quay-install/quay-config/
cat certs/rootCA.pem >> quay-install/quay-config/ssl.cert
cp certs/rootCA.pem  /etc/containers/certs.d/dserver.anand.local/ca.crt
cp certs/rootCA.pem /etc/pki/ca-trust/source/anchors/
sudo update-ca-trust extract
#systemctl restart quay-app


