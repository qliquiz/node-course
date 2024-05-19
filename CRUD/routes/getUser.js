const data = require('../data');
const url = require('url');


module.exports = (req, res) => {
    const args = url.parse(req.url, true).query;
    const id = Number(args.id);

    if (id) res.writeHead(200);
    else res.writeHead(404);
    res.end(JSON.stringify(data.getUser(id)));
}