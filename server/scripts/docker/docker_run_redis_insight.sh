
# pushd ..

# volume=blackjack_redis_insight
# echo Volume $volume: Deleting
# docker volume rm $volume 
# echo Volume $volume: Creating
# docker volume create $volume

# network=blackjack_network
# echo Network $network: Creating 
# docker network create $network

# name=blackjack_redis_insight

# echo $name: Stopping
# docker stop $name

# echo $name: Removing
# docker rm $name

# echo $name: Starting


# source configurations/.env 

# BUILD_ENV=""


# if [[ ! -z $RI_APP_PORT ]]; then
#   BUILD_ENV+=" --env RI_APP_PORT=$RI_APP_PORT"
# fi

# if [[ ! -z $RI_APP_HOST ]]; then
#   BUILD_ENV+=" --env RI_APP_HOST=$RI_APP_HOST"
# fi

# if [[ ! -z $RI_SERVER_TLS_KEY ]]; then
#   BUILD_ENV+=" --env RI_SERVER_TLS_KEY=$RI_SERVER_TLS_KEY"
# fi

# if [[ ! -z $RI_SERVER_TLS_CERT ]]; then
#   BUILD_ENV+=" --env RI_SERVER_TLS_CERT=$RI_SERVER_TLS_CERT"
# fi

# if [[ ! -z $RI_ENCRYPTION_KEY ]]; then
#   BUILD_ENV+=" --env RI_ENCRYPTION_KEY=$RI_ENCRYPTION_KEY"
# fi

# if [[ ! -z $RI_LOG_LEVEL ]]; then
#   BUILD_ENV+=" --env RI_LOG_LEVEL=$RI_LOG_LEVEL"
# fi

# if [[ ! -z $RI_FILES_LOGGER ]]; then
#   BUILD_ENV+=" --env RI_FILES_LOGGER=$RI_FILES_LOGGER"
# fi

# if [[ ! -z $RI_STDOUT_LOGGER ]]; then
#   BUILD_ENV+=" --env RI_STDOUT_LOGGER=$RI_STDOUT_LOGGER"
# fi

# if [[ ! -z $RI_PROXY_PATH ]]; then
#   BUILD_ENV+=" --env RI_PROXY_PATH=$RI_PROXY_PATH"
# fi




# while getopts "hvief:" flag; do
#  case $flag in
#    h) ;;
#    i | internal) docker run --rm -d -p 5540      --network $network --name $name $name:dev-0.0.1 ;;
#    e | external) docker run --rm -d -p 5540:5540 --network $network --name $name $name:dev-0.0.1 ;;
#    f) filename=$OPTARG ;;
#    \?)           docker run --rm -d -p 5540:5540 --network $network --name $name $name:dev-0.0.1 ;;
 
#  esac
# done


#!/bin/bash

pushd ..

project=poker

name="${project}_redis_insight"

if [ ! "$(docker ps -a -q -f name=^$name$)" ]; 
then 
    major=$REDIS_INSIGHT_MAJ
    minor=$REDIS_INSIGHT_MIN
    patch=$REDIS_INSIGHT_PAT
    reltype=$REDIS_INSIGHT_RELTYPE

    volume="${project}_volume_redis_insight"
    echo Volume $volume: Creating
    docker volume create $volume

    network="${project}_network"
    echo Network $network: Creating 
    docker network create $network

    echo $name: Starting
    docker run -d -p 7540:5540 \
           --network $network \
           -v $volume:/data \
           --name $name $name:$reltype-$major.$minor.$patch
else 
    echo $name: Restarting
    docker restart $name
fi 

