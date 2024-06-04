const express = require('express')
const app = express();
const userRoutes = require('./routes/userRoutes'); // импорт обработчика user-маршрутов
// const http = require('http');
// const router = require('./router'); // импорт общего обработчика маршрутов

const PORT = 3000;

app.use('/users', userRoutes);
app.use('/users_list', userRoutes);

app.listen(PORT, console.log(`The server is listening on port ${PORT}\n`));
// server.listen(PORT, console.log(`The server is listening on port ${PORT}\n`));