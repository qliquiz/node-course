const data = require('../sql_data');


module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => body += chunk);

    req.on('end', async () => {
        const parsedBody = JSON.parse(body);
        const name = parsedBody.name;
        const age = parsedBody.age;
        if (name && age) {
            const user = {
                name,
                age: parseInt(age)
            }
            const newUser = await data.createUser(user);
            res.writeHead(201);
            res.end(JSON.stringify(newUser));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'Error: please, check name and age again' }));
        }
    });
}