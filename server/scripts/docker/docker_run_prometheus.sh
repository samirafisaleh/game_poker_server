#!/bin/bash

pushd ..

source version.env

# Get the base of the directory and delete _server.
base_dir=${PWD##*/}  
project="${base_dir/_server/}"

name="${project}_prometheus"


if [ ! "$(docker ps -a -q -f name=$name)" ]; 
then 

    major=$PROMETHEUS_MAJ
    minor=$PROMETHEUS_MIN
    patch=$PROMETHEUS_PAT
    reltype=$PROMETHEUS_RELTYPE

    volume_conf="${project}_volume_prometheus_conf"
    echo Volume $volume_conf: Creating
    docker volume create $volume_conf

    network="${project}_network"
    echo Network $network: Creating 
    docker network create $network


    echo $name: Starting
    docker run -d -p 7090:9090 \
            --network $network \
            -v $volume_conf:/opt/bitnami/prometheus/conf/ \
            --name $name $name:$reltype-$major.$minor.$patch

else 
    echo $name: Copying prometheus.yml
    docker cp configurations/prometheus.yml chess_prometheus:/opt/bitnami/prometheus/conf/

    echo $name: Restarting
    docker restart $name
fi 
