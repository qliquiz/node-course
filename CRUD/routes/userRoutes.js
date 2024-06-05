const express = require('express');
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const getUsers = require('./getUsers');
const updateUser = require('./updateUser');


// router for /users
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

usersRouter.post('/', (req, res) => {
    createUser(req, res);
});

usersRouter.get('/', (req, res) => {
    getUser(req, res);
});

usersRouter.delete('/', (req, res) => {
    deleteUser(req, res);
});

usersRouter.put('/', (req, res) => {
    updateUser(req, res);
});


// router for /users_list
const usersListRouter = express.Router();

usersListRouter.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

usersListRouter.get('/', (req, res) => {
    getUsers(req, res);
});


module.exports = {usersRouter, usersListRouter};