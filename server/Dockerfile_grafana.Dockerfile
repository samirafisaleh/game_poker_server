

FROM grafana/grafana 

COPY configurations/grafana.ini /etc/grafana/grafana.ini

ENV GF_PATHS_CONFIG=/etc/grafana/grafana.ini
