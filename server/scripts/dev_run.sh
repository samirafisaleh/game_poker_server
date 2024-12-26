
echo "Changing directory"
pushd ../source/ > /dev/null

echo "Loading configurations"
export $(cat ../configurations/env.common.env | xargs) 
export $(cat ../configurations/env.dev.env | xargs) 

node main_express.js
