

# pushd ..

# volume=blackjack_webserver
# echo Volume $volume: Deleting
# docker volume rm $volume 
# echo Volume $volume: Creating
# docker volume create $volume

# network=blackjack_network
# echo Network $network: Creating 
# docker network create $network


# name=blackjack_uvicorn

# echo $name: Stopping
# docker stop $name

# echo $name: Removing
# docker rm $name

# echo $name: Starting


# while getopts "hvief:" flag; do
#  case $flag in
#    h) ;;
#    i | internal) docker run --rm -d -p 8002      --network $network -v $volume:/var/log/blackjack/ --name $name blackjack:dev-0.0.1 /bin/bash run_uvicorn.sh ;;
#    e | external) docker run --rm -d -p 8002:8002 --network $network -v $volume:/var/log/blackjack/ --name $name blackjack:dev-0.0.1 /bin/bash run_uvicorn.sh ;;
#    f) filename=$OPTARG ;;
#    \?)           docker run --rm -d -p 8002:8002 --network $network -v $volume:/var/log/blackjack/ --name $name blackjack:dev-0.0.1 /bin/bash run_uvicorn.sh ;;
 
#  esac
# done