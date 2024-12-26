
#!/bin/bash

# Pushing the correct diretory
pushd ..

project=chess

name="${project}_redis"

if [ ! "$(docker ps -a -q -f name=^$name$)" ]; 
then

    major=$REDIS_MAJ
    minor=$REDIS_MIN
    patch=$REDIS_PAT
    reltype=$REDIS_RELTYPE

    volume="${project}_volume_redis"
    echo Volume $volume: Creating
    docker volume create $volume

    volume_conf="${project}_volume_redis_conf"
    echo Volume $volume_conf: Creating
    docker volume create $volume_conf

    network="${project}_network"
    echo Network $network: Creating 
    docker network create $network

    echo $name: Starting
    docker run -d  \
            --network $network \
            -v $volume:/data \
            -v $volume_conf:/usr/local/etc/redis \
            --name $name $name:$reltype-$major.$minor.$patch

else 
    echo $name: Copying redis.conf
    docker cp configurations/redis.conf chess_redis:/usr/local/etc/redis/

    echo $name: Restarting
    docker restart $name
fi

