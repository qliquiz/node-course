const data = require('../data');


module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => body += chunk);

    req.on('end', () => {
        const user = JSON.parse(body);
        res.writeHead(201);
        res.end(JSON.stringify(data.createUser(user)));
    });
}