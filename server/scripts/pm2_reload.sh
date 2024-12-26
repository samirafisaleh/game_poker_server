
export $(cat ../configurations/env.common.env | xargs) 
export $(cat ../configurations/env.dev.env | xargs) 

pushd ../source/ > /dev/null

echo "$NAME: PM Reload"
pm2 reload ../configurations/ecosystem.config.js