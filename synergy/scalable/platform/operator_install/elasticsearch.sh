yum install elasticsearch -y #
sudo chown -R elasticsearch:elasticsearch /var/lib/elasticsearch #
systemctl daemon-reload #
systemctl enable elasticsearch.service #
systemctl start elasticsearch.service #
systemctl status elasticsearch #
