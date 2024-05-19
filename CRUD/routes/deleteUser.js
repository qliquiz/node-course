const data = require('../data');
const url = require('url');


module.exports = (req, res) => {
    const args = url.parse(req.url, true).query;
    const id = Number(args.id);

    if (id) res.writeHead(202);
    else res.writeHead(204);
    res.end(JSON.stringify(data.deleteUser(id)));
}