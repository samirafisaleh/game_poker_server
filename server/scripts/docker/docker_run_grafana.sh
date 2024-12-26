
# pushd ..

# volume=blackjack_grafana
# echo Volume $volume: Deleting
# docker volume rm $volume 
# echo Volume $volume: Creating
# docker volume create $volume

# network=blackjack_network
# echo Network $network: Creating 
# docker network create $network

# name=blackjack_grafana

# echo $name: Stopping
# docker stop $name

# echo $name: Removing
# docker rm $name

# echo $name: Starting

# source configurations/.env 

# BUILD_ENV=""

# if [[ ! -z $GF_PATHS_CONFIG ]]; then
#   BUILD_ENV+=" --env GF_PATHS_CONFIG=$GF_PATHS_CONFIG"
# fi

# if [[ ! -z $GF_PATHS_DATA ]]; then
#   BUILD_ENV+=" --env GF_PATHS_DATA=$GF_PATHS_DATA"
# fi

# if [[ ! -z $GF_PATHS_HOME ]]; then
#   BUILD_ENV+=" --env GF_PATHS_HOME=$GF_PATHS_HOME"
# fi

# if [[ ! -z $GF_PATHS_LOGS ]]; then
#   BUILD_ENV+=" --env GF_PATHS_LOGS=$GF_PATHS_LOGS"
# fi

# if [[ ! -z $GF_PATHS_PLUGINS ]]; then
#   BUILD_ENV+=" --env GF_PATHS_PLUGINS=$GF_PATHS_PLUGINS"
# fi

# if [[ ! -z $GF_PATHS_PROVISIONING ]]; then
#   BUILD_ENV+=" --env GF_PATHS_PROVISIONING=$GF_PATHS_PROVISIONING"
# fi


# while getopts "hvief:" flag; do
#  case $flag in
#    h) ;;
#    i | internal) docker run --rm -d -p 3000      --network $network --name=$name $name:dev-0.0.1 ;;
#    e | external) docker run --rm -d -p 3000:3000 --network $network --name $name $name:dev-0.0.1 ;;
#    f) filename=$OPTARG ;;
#    \?)           docker run --rm -d -p 3000:3000 --network $network --name $name $name:dev-0.0.1 ;;
 
#  esac
# done
