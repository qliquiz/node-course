const data = require('../data');
const url = require('url');


module.exports = (req, res) => {
    const args = url.parse(req.url, true).query;
    const id = Number(args.id);
    let newBody = '';

    req.on('data', chunk => newBody += chunk);

    req.on('end', () => {
        const user = JSON.parse(newBody);
        if (id) res.writeHead(201);
        res.end(JSON.stringify(data.updateUser(id, user)));
    });
}