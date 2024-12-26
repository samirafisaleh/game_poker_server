
service=vault

# Pushing the correct diretory
pushd ../../

source configurations/common.env

major=$REDIS_MAJ
minor=$REDIS_MIN
patch=$REDIS_PAT
reltype=$REDIS_RELTYPE

build_name=${APP_NAME}_${service}:$reltype-$major.$minor.$patch 

echo "Build: Removing $build_name"
docker rmi $build_name

echo "Build: Creating $build_name"
docker build -t $build_name -f  Dockerfile_${service}.Dockerfile .