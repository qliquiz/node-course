const express = require('express');
const {usersRouter, usersListRouter} = require('./routes/userRoutes');

const app = express();


app.use('/users', usersRouter);
app.use('/users_list', usersListRouter);


const PORT = 3000;

app.listen(PORT, console.log(`The server is listening on port ${PORT}\n`));