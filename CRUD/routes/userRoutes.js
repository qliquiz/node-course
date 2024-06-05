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

usersRouter.post('/', createUser);
usersRouter.get('/', getUser);
usersRouter.delete('/', deleteUser);
usersRouter.put('/', updateUser);


// router for /users_list
const usersListRouter = express.Router();

usersListRouter.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

usersListRouter.get('/', getUsers);


module.exports = {usersRouter, usersListRouter};