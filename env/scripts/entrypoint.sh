DIR="/react/node_modules"
if [ ! -d "$DIR" ]; then
    npm i
fi
npm start
