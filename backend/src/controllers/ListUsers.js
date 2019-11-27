const execSQLQuery = require('../connBanco') 

module.exports = {
    store(req, res) {
        execSQLQuery('SELECT * FROM Clientes', res);
    }
}