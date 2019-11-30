const execSQLQuery = require('../connBanco') 

module.exports = {
    async store(req, res) {
        let filter = '';
        if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
        execSQLQuery('SELECT * FROM user' + filter, res);
    
    }
}