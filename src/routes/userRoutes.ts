import express from 'express';
import createUser from './createUser';
import deleteUser from './deleteUser';
import getUser from './getUser';
import getUsers from './getUsers';
import updateUser from './updateUser';

// Router for /users
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

usersRouter.post('/', createUser);
usersRouter.get('/', getUser);
usersRouter.delete('/', deleteUser);
usersRouter.put('/', updateUser);

// Router for /users_list
const usersListRouter = express.Router();

usersListRouter.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

usersListRouter.get('/', getUsers);

export { usersRouter, usersListRouter };