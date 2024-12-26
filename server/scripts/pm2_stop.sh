
export $(cat ../configurations/env.common.env | xargs) 
export $(cat ../configurations/env.dev.env | xargs) 

pushd ../source/ > /dev/null

echo "$NAME: PM Stop"
pm2 stop ../configurations/ecosystem.config.js