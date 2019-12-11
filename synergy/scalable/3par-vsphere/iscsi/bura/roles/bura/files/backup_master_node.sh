#!/bin/bash
set -eo pipefail
ORIGINFILES="origin-master origin-master-api origin-master-controllers origin-node"
OCPFILES="atomic-openshift-master atomic-openshift-master-api atomic-openshift-master-controllers atomic-openshift-node"

die(){
  echo "$1"
  exit $2
}

usage(){
  echo "$0 [path]"
  echo "  path  The directory where the backup will be stored"
  echo "        /backup/\$(hostname)/\$(date +%Y%m%d) by default"
  echo "Examples:"
  echo "    $0 /my/mountpoint/\$(hostname)"
}

etcdfiles(){
  if [ -f /etc/profile.d/etcdctl.sh ]
  then
    echo "Exporting etcd config and data files to ${BACKUPLOCATION}"
    teststring="healthy"
    a=$(source /etc/profile.d/etcdctl.sh && etcdctl3 endpoint health)
    if [[ $a == *healthy* ]];
    then
        echo "healthy etcd"
        if [ -d /etc/etcd ]
        then
        echo "Exporting etcd config files to ${BACKUPLOCATION}"
        mkdir -p ${BACKUPLOCATION}/etcd-config
        cp -R /etc/etcd ${BACKUPLOCATION}/etcd-config/
        fi
        if [ -d /var/lib/etcd ]
        then
        echo "Exporting etcd data files to ${BACKUPLOCATION}"
        mkdir -p ${BACKUPLOCATION}/etcd-data
        cp -R /var/lib/etcd/ ${BACKUPLOCATION}/etcd-data/
        fi
    fi
  fi
}

certfiles(){
  mkdir -p ${BACKUPLOCATION}/etc/docker
  echo "Exporting certificate file to ${BACKUPLOCATION}"
  if [ -d /etc/docker/certs.d ]
  then
    cp -aR /etc/docker/certs.d ${BACKUPLOCATION}/etc/docker/
  fi
}

ocpfiles(){
  mkdir -p ${BACKUPLOCATION}/etc/sysconfig
  echo "Exporting OCP related files to ${BACKUPLOCATION}"
  cp -aR /etc/origin ${BACKUPLOCATION}/etc
  for file in ${ORIGINFILES} ${OCPFILES}
  do
    if [ -f /etc/sysconfig/${file} ]
    then
      cp -aR /etc/sysconfig/${file} ${BACKUPLOCATION}/etc/sysconfig/
    fi
  done
}

otherfiles(){
  mkdir -p ${BACKUPLOCATION}/etc/sysconfig
  mkdir -p ${BACKUPLOCATION}/etc/pki/ca-trust/source/anchors
  echo "Exporting other important files to ${BACKUPLOCATION}"
  if [ -f /etc/sysconfig/flanneld ]
  then
    cp -a /etc/sysconfig/flanneld \
      ${BACKUPLOCATION}/etc/sysconfig/
  fi
  cp -aR /etc/sysconfig/{iptables,docker-*} \
    ${BACKUPLOCATION}/etc/sysconfig/
  if [ -d /etc/cni ]
  then
    cp -aR /etc/cni ${BACKUPLOCATION}/etc/
  fi
  cp -aR /etc/dnsmasq* ${BACKUPLOCATION}/etc/
#  cp -aR /etc/pki/ca-trust/source/anchors/* \
#    ${BACKUPLOCATION}/etc/pki/ca-trust/source/anchors/
}

packagelist(){
  echo "Creating a list of rpms installed in ${BACKUPLOCATION}"
  rpm -qa | sort > ${BACKUPLOCATION}/packages.txt
}

if [[ ( $@ == "--help") ||  $@ == "-h" ]]
then
  usage
  exit 0
fi

BACKUPLOCATION=${1:-"/backup/$(hostname)/$(date +%Y%m%d)"}

if [ -d /backup ]
then
  echo "deleting the older backup"
  rm -rf /backup/*
fi

mkdir -p ${BACKUPLOCATION}

etcdfiles
ocpfiles
certfiles
otherfiles
packagelist

exit 0
