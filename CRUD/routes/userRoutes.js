// const url = require('url');
const router = require('express').Router()
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const getUsers = require('./getUsers');
const updateUser = require('./updateUser');

/* const routes = (req, res) => {
    const path = url.parse(req.url, true).pathname;
    const method = req.method;

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
} */

const contentType = (req, res) => {res.setHeader('Content-Type', 'application/json')}

router.use(contentType);

router.get('/users_list', (req, res) => {
    getUsers(req, res);
    // res.send('getUsers');
});

router.post('/users', (req, res) => {
    createUser(req, res);
    // res.send('createUser');
});

router.get('/users', (req, res) => {
    getUser(req, res);
    // res.send('getUser');
});

router.delete('/users', (req, res) => {
    deleteUser(req, res);
    // res.send('deleteUser');
});

router.put('/users', (req, res) => {
    updateUser(req, res);
    // res.send('updateUser');
});

module.exports = router;