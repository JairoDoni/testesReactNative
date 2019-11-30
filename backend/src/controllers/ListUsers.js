const execSQLQuery = require('../connBanco') 

module.exports = {
    async store(req, res) {
        execSQLQuery('SELECT * FROM Clientes', res);
    }
}