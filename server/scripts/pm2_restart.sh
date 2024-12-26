
export $(cat ../configurations/env.common.env | xargs) 
export $(cat ../configurations/env.dev.env | xargs) 

pushd ../source/ > /dev/null

echo "$NAME: PM Restart"
pm2 restart ../configurations/ecosystem.config.js