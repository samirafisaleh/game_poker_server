
service=grafana

# Pushing the correct diretory
pushd ../../

source configurations/common.env

major=$GRAFANA_MAJ
minor=$GRAFANA_MIN
patch=$GRAFANA_PAT
reltype=$GRAFANA_RELTYPE

build_name=${APP_NAME}_${service}:$reltype-$major.$minor.$patch 

echo "Build: Removing $build_name"
docker rmi $build_name

echo "Build: Creating $build_name"
docker build -t $build_name -f  Dockerfile_${service}.Dockerfile .