
export $(cat ../configurations/env.common.env | xargs) 
export $(cat ../configurations/env.dev.env | xargs) 

pushd ../source/ > /dev/null

echo "$NAME: PM Delete"

pm2 delete chess_server