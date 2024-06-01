const data = require('../sql_data');
const url = require('url');


module.exports = (req, res) => {
    const args = url.parse(req.url, true).query;
    const id = Number(args.id);
    let newData = '';

    req.on('data', chunk => newData += chunk);

    req.on('end', async () => {
        const parsedNewData = JSON.parse(newData);
        if (id) {
            let currentUser = await data.getUser(id);
            if (!parsedNewData.name) parsedNewData.name = currentUser.name;
            if (!parsedNewData.age) parsedNewData.age = currentUser.age;
            const updatedUser = await data.updateUser(id, parsedNewData);
            res.writeHead(201);
            res.end(JSON.stringify(updatedUser));
        }
    });
}