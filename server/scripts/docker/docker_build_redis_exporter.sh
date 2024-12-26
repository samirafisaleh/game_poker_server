
service=redis_exporter

# Pushing the correct diretory
pushd ../../

source configurations/common.env

major=$REDIS_EXPORTER_MAJ
minor=$REDIS_EXPORTER_MIN
patch=$REDIS_EXPORTER_PAT
reltype=$REDIS_EXPORTER_RELTYPE

build_name=${APP_NAME}_${service}:$reltype-$major.$minor.$patch 

echo "Build: Removing $build_name"
docker rmi $build_name

echo "Build: Creating $build_name"
docker build -t $build_name -f  Dockerfile_${service}.Dockerfile .