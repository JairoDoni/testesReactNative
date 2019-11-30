const execSQLQuery = require('../connBanco') 

module.exports = {
    async store(req, res) {
        execSQLQuery('DELETE FROM user WHERE ID=' + parseInt(req.params.id), res);
    }
}