### ambiente de desenvolvimento

npm run start

### Para iniciar os processos PM2, execute os seguintes comandos no terminal:

npm install pm2 -g

pm2 start ecosystem.config.js --env production
pm2 list
pm2 env 0
pm2 show frontend
pm2 monit
pm2 stop frontend

## atualizando servidor deploy

pm2 stop frontend
git status
$ git reset --hard origin/main
git pull // lembra de verificar a BaseUrl do backend
npm i
pm2 start ecosystem.config.js --env production
