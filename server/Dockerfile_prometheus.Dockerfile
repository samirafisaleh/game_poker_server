FROM bitnami/prometheus

COPY configurations/prometheus.yml /opt/bitnami/prometheus/conf/prometheus.yml

EXPOSE 9090
