const execSQLQuery = require('../connBanco') 

module.exports = {
    store(req, res) {
        execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
    }
}