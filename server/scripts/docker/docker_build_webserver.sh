
service=webserver

# Pushing the correct diretory
pushd ../../

source configurations/common.env

major=$WEBSERVER_MAJ
minor=$WEBSERVER_MIN
patch=$WEBSERVER_PAT
reltype=$WEBSERVER_RELTYPE

build_name=${APP_NAME}_${service}:$reltype-$major.$minor.$patch 

echo "Build: Removing $build_name"
docker rmi $build_name

echo "Build: Creating $build_name"
docker build -t $build_name -f  Dockerfile_${service}.Dockerfile .