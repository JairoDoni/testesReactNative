
const express = require('express');
const UserController = require('./controllers/CreateUserController') 
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();         


//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const routes = express.Router();

//PARA TESTES
routes.get('/', UserController.store);
app.use('/', routes);
routes.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Clientes', res);
})
//LISTAR USUARIOS
routes.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Clientes', res);
})
//CONSULTA POR ID
routes.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clientes' + filter, res);
})

//EDITAR CADASTRO
routes.patch('/clientes/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})
//CONEXÃO COM O BANCO
  function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3307,
      user     : 'root',
      password : '',
      database : 'react'
    });

  connection.query(sqlQry, function(error, results, fields){
    if(error) 
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('executou!');
  });
}

module.exports = routes;











