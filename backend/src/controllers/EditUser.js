const execSQLQuery = require('../connBanco') 

module.exports = {
    async store(req, res) {
        const id = parseInt(req.params.id);
        const nome = req.body.nome.substring(0,150);
        const cpf = req.body.cpf.substring(0,11);
        execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
    }
}