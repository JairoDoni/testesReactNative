
const express = require('express');
const routes = require('./routes');
const port = 3000; 
const server = express();         


server.use(routes);

//inicia o servidor
server.listen(port);
console.log('API funcionando!');
