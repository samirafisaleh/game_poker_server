

# pushd ..

# volume=blackjack_vault
# echo Volume $volume: Deleting
# docker volume rm $volume 
# echo Volume $volume: Creating
# docker volume create $volume

# network=blackjack_network
# echo Network $network: Creating 
# docker network create $network

# name=blackjack_vault

# echo $name: Stopping
# docker stop $name

# echo $name: Removing
# docker rm $name

# echo $name: Starting



# source configurations/.env 

# BUILD_ENV=""


# if [[ ! -z $VAULT_TOKEN ]]; then
#   BUILD_ENV+=" --env VAULT_TOKEN=$VAULT_TOKEN"
# fi

# if [[ ! -z $VAULT_ADDR ]]; then
#   BUILD_ENV+=" --env VAULT_ADDR=$VAULT_ADDR"
# fi

# if [[ ! -z $VAULT_CACERT ]]; then
#   BUILD_ENV+=" --env VAULT_CACERT=$VAULT_CACERT"
# fi

# if [[ ! -z $VAULT_CAPATH ]]; then
#   BUILD_ENV+=" --env VAULT_CAPATH=$VAULT_CAPATH"
# fi

# if [[ ! -z $VAULT_CLIENT_CERT ]]; then
#   BUILD_ENV+=" --env VAULT_CLIENT_CERT=$VAULT_CLIENT_CERT"
# fi

# if [[ ! -z $VAULT_CLIENT_KEY ]]; then
#   BUILD_ENV+=" --env VAULT_CLIENT_KEY=$VAULT_CLIENT_KEY"
# fi

# if [[ ! -z $VAULT_CLIENT_TIMEOUT ]]; then
#   BUILD_ENV+=" --env VAULT_CLIENT_TIMEOUT=$VAULT_CLIENT_TIMEOUT"
# fi

# if [[ ! -z $VAULT_CLUSTER_ADDR ]]; then
#   BUILD_ENV+=" --env VAULT_CLUSTER_ADDR=$VAULT_CLUSTER_ADDR"
# fi

# if [[ ! -z $VAULT_FORMAT ]]; then
#   BUILD_ENV+=" --env VAULT_FORMAT=$VAULT_FORMAT"
# fi

# if [[ ! -z $VAULT_LICENSE ]]; then
#   BUILD_ENV+=" --env VAULT_LICENSE=$VAULT_LICENSE"
# fi

# if [[ ! -z $VAULT_LICENSE_PATH ]]; then
#   BUILD_ENV+=" --env VAULT_LICENSE_PATH=$VAULT_LICENSE_PATH"
# fi

# if [[ ! -z $VAULT_LOG_LEVEL ]]; then
#   BUILD_ENV+=" --env VAULT_LOG_LEVEL=$VAULT_LOG_LEVEL"
# fi

# if [[ ! -z $VAULT_MAX_RETRIES ]]; then
#   BUILD_ENV+=" --env VAULT_MAX_RETRIES=$VAULT_MAX_RETRIES"
# fi

# if [[ ! -z $VAULT_REDIRECT_ADDR ]]; then
#   BUILD_ENV+=" --env VAULT_REDIRECT_ADDR=$VAULT_REDIRECT_ADDR"
# fi

# if [[ ! -z $VAULT_SKIP_VERIFY ]]; then
#   BUILD_ENV+=" --env VAULT_SKIP_VERIFY=$VAULT_SKIP_VERIFY"
# fi

# if [[ ! -z $VAULT_TLS_SERVER_NAME ]]; then
#   BUILD_ENV+=" --env VAULT_TLS_SERVER_NAME=$VAULT_TLS_SERVER_NAME"
# fi

# if [[ ! -z $VAULT_CLI_NO_COLOR ]]; then
#   BUILD_ENV+=" --env VAULT_CLI_NO_COLOR=$VAULT_CLI_NO_COLOR"
# fi

# if [[ ! -z $VAULT_RATE_LIMIT ]]; then
#   BUILD_ENV+=" --env VAULT_RATE_LIMIT=$VAULT_RATE_LIMIT"
# fi

# if [[ ! -z $VAULT_NAMESPACE ]]; then
#   BUILD_ENV+=" --env VAULT_NAMESPACE=$VAULT_NAMESPACE"
# fi

# if [[ ! -z $VAULT_SRV_LOOKUP ]]; then
#   BUILD_ENV+=" --env VAULT_SRV_LOOKUP=$VAULT_SRV_LOOKUP"
# fi

# if [[ ! -z $VAULT_MFA ]]; then
#   BUILD_ENV+=" --env VAULT_MFA=$VAULT_MFA"
# fi

# if [[ ! -z $VAULT_HTTP_PROXY ]]; then
#   BUILD_ENV+=" --env VAULT_HTTP_PROXY=$VAULT_HTTP_PROXY"
# fi

# if [[ ! -z $VAULT_PROXY_ADDR ]]; then
#   BUILD_ENV+=" --env VAULT_PROXY_ADDR=$VAULT_PROXY_ADDR"
# fi

# if [[ ! -z $VAULT_DISABLE_REDIRECTS ]]; then
#   BUILD_ENV+=" --env VAULT_DISABLE_REDIRECTS=$VAULT_DISABLE_REDIRECTS"
# fi





# while getopts "hvief:" flag; do
#  case $flag in
#    h) ;;
#    i | internal) docker run --rm -d --cap-add=IPC_LOCK -p 8200      --network $network --name $name $name:dev-0.0.1 ;;
#    e | external) docker run --rm -d --cap-add=IPC_LOCK -p 8200:8200 --network $network --name $name $name:dev-0.0.1 ;;
#    f) filename=$OPTARG ;;
#    \?)           docker run --rm -d --cap-add=IPC_LOCK -p 8200:8200 --network $network --name $name $name:dev-0.0.1 ;;
 
#  esac
# done
