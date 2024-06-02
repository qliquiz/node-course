const data = require('../sql_data');
const url = require('url');


module.exports = async (req, res) => {
    const args = url.parse(req.url, true).query;
    const id = Number(args.id);

    if (id) {
        const user = await data.getUser(id);
        res.writeHead(200);
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Error: please, check ID again' }));
    }
}