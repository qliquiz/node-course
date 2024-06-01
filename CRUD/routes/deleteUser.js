const data = require('../sql_data');
const url = require('url');


module.exports = async (req, res) => {
    const args = url.parse(req.url, true).query;
    const id = Number(args.id);

    if (id) {
        const rogue = await data.deleteUser(id);
        res.writeHead(202);
        res.end(JSON.stringify(rogue));
    } else {
        res.writeHead(204);
        res.end(JSON.stringify({ message: 'Error: please, check ID again' }));
    }
}