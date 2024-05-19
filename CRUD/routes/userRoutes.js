const url = require('url');
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const getUsers = require('./getUsers');
const updateUser = require('./updateUser');

// userRoutes
module.exports = (req, res) => {
    const path = url.parse(req.url, true).pathname;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');

    if (path === '/users_list' && method === 'GET')
        getUsers(req, res);
    else if (path === '/users' && method === 'POST')
        createUser(req, res);
    else if (path.startsWith('/users') && method === 'GET')
        getUser(req, res);
    else if (path.startsWith('/users') && method === 'DELETE')
        deleteUser(req, res);
    else if (path.startsWith('/users') && method === 'PUT')
        updateUser(req, res);
    else {
        res.writeHead(404);
        res.end(JSON.stringify('Page not found'));
    }
}