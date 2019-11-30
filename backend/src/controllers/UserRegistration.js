const execSQLQuery = require('../connBanco') 

module.exports = {
    async store(req, res) {
        const nome = req.body.nome.substring(0,150);
        const cpf = req.body.cpf.substring(0,11);
        execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
    }
}