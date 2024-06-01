const data = require('../sql_data');


module.exports = async (req, res) => {
    const users = await data.getUsers();
    res.writeHead(200);
    res.end(JSON.stringify(users));
}