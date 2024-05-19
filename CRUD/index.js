const http = require('http');
const router = require('./router'); // импорт общего обработчика маршрутов

const PORT = 3000;


const server = http.createServer(router);

server.listen(PORT, console.log(`The server is listening on port ${PORT}\n`));