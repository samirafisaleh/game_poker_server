#!/bin/bash

pushd ..

project=poker

name="${project}_redis_exporter"

if [ ! "$(docker ps -a -q -f name=^$name$)" ]; 
then 

    major=$REDIS_EXPORTER_MAJ
    minor=$REDIS_EXPORTER_MIN
    patch=$REDIS_EXPORTER_PAT
    reltype=$REDIS_EXPORTER_RELTYPE

    volume="${project}_volume_redis_exporter"
    echo Volume $volume: Creating
    docker volume create $volume

    network="${project}_network"
    echo Network $network: Creating 
    docker network create $network

    echo $name: Starting
    docker run -d \
           --network $network \
           --env REDIS_ADDR=chess_redis:6379 \
           --name $name $name:$reltype-$major.$minor.$patch
else 
    echo $name: Restarting
    docker restart $name
fi 

