const data = require('../sql_data');


module.exports = async (req, res, next) => {
    try {
        const { id } = req.query;
        if (id) {
            const user = await data.getUser(Number(id));
            res.status(200).json(user);
        } else res.status(400).json({ message: 'Error: please, check ID again' });
    } catch (error) {
        next(error);
    }
}