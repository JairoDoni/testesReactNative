const execSQLQuery = require('../connBanco') 

module.exports = {
    store(req, res) {
        let filter = '';
        if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
        execSQLQuery('SELECT * FROM Clientes' + filter, res);
    
    }
}