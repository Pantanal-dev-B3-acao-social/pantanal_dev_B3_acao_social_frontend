### ambiente de desenvolvimento

npm run start

### Para iniciar os processos PM2, execute os seguintes comandos no terminal:

pm2 start ecosystem.config.js --env production
pm2 list
pm2 env 0
pm2 show frontend
pm2 monit
pm2 stop frontend

## iniciando

pm2 start ecosystem.config.js
