yum install logstash -y #
systemctl daemon-reload #
systemctl enable logstash.service #
systemctl start logstash.service #
systemctl status logstash #
