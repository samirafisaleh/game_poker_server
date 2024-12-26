

FROM bitnami/prometheus:latest

COPY configurations/prometheus.yml /opt/bitnami/prometheus/conf/prometheus.yml

