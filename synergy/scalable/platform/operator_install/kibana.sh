yum install kibana -y #
ip=$1 #
sed -i 's/#server.host: "localhost"/server.host: \"'${ip}'\"/' /etc/kibana/kibana.yml #
systemctl daemon-reload #
systecmctl enable kibana.service #
systemctl start kibana.service #
systemctl status kibana.service #
