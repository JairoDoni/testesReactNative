// const express = require('express');
// const mysql = require('mysql');
// // const bodyParser = require('body-parser');
// const routes = require('./routes')
// // server.use(bodyParser.urlencoded({ extended: true }));
// // server.use(bodyParser.json());

// // Create connection
// const db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'react'
// });
// // Connect
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('MySql Connected...');
// });

// const server = express();

// server.use(routes);

// server.listen('3000', () => {
//     console.log('Server started on port 3000');
// });


const express = require('express');
const mysql = require('mysql');
const server = express();         
const bodyParser = require('body-parser');

//configurando o body parser para pegar POSTS mais tarde
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3000,
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
  router.get('/getposts', (req, res) => {
   exectSQLQuery('SELECT * FROM posts', res);
   
});
//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
server.use('/', router);

	
//inicia o servidor
server.listen('3000', () => {
    console.log('Server started on port 3000');
});


