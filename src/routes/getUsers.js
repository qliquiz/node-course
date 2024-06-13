const data = require('../sql_data');


module.exports = async (req, res, next) => {
    try {
        const users = await data.getUsers();
        res.status(200).json(await data.getUsers());
    } catch (error) {
        next(error);
    }
}