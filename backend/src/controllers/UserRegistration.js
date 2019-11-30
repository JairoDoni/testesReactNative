const execSQLQuery = require('../connBanco') 

module.exports = {
    async store(req, res) {
        const nome = req.body.nome.substring(0,150);
        const email = req.body.email.substring(0,150);
        const senha = req.body.senha.substring(0,150);
        const idade = req.body.idade.substring(0,11);
        const telefone = req.body.telefone.substring(0,150);
        const cidade = req.body.cidade.substring(0,150);
        const escola = req.body.escola.substring(0,150);
        const cursoPret = req.body.cursoPret.substring(0,150);
        execSQLQuery(`INSERT INTO user(Nome, email, senha, idade, telefone, cidade, escola, cursoPret) VALUES('${nome}','${email}','${senha}','${idade}','${telefone}','${cidade}','${escola}','${cursoPret}')`, res);
    }
}