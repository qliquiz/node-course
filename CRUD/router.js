// const url = require('url');
const userRoutes = require('./routes/userRoutes'); // импорт обработчика user-маршрутов

/* // router или routeHandler
module.exports = (req, res) => {
    const path = url.parse(req.url, true).pathname;

    if (path.startsWith('/users'))
        userRoutes(req, res);
    else {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(404);
        res.end(JSON.stringify('Page not found'));
    }
}; */

module.exports = () => {
    app.use('/users', userRoutes);
    app.use('/users_list', userRoutes);
};