
const express = require('express');
const testeConexao = require('./controllers/testeConexao') 
const ListUsers = require('./controllers/ListUsers') 
const FilterId = require('./controllers/FilterId') 
const DeleteUser = require('./controllers/DeleteUser') 
const UserRegistration = require('./controllers/UserRegistration') 
const EditUser = require('./controllers/EditUser') 
const bodyParser = require('body-parser');

const server = express();
const port = 3000;

//configurando o body parser para pegar POSTS mais tarde
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//definindo as rotas
const routes = express.Router();

//PARA TESTES
routes.get('/', testeConexao.store);
server.use('/', routes);

//LISTAR USUARIOS
routes.get('/clientes', ListUsers.store)
//CONSULTA POR ID
routes.get('/clientes/:id?', FilterId.store)
//CRIAR USUARIO
routes.post('/clientes', UserRegistration.store)
//EDITAR CADASTRO
routes.patch('/clientes/:id', EditUser.store)
//DELETAR USUARIO
routes.delete('/clientes/:id', DeleteUser.store)

//INICIAR SERVIDOR
server.listen(port);
console.log('API funcionando!');













