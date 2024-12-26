
export $(cat ../configurations/env.common.env | xargs) 
export $(cat ../configurations/env.dev.env | xargs) 

pushd ../source/ > /dev/null

echo "$NAME: PM Start"
pm2 start ../configurations/ecosystem.config.js