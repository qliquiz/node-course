const data = require('../sql_data');


module.exports = async (req, res, next) => {
    try {
        const { id } = req.query;
        if (id) {
            const rogue = await data.deleteUser(Number(id));
            res.status(202).json(rogue);
        } else res.status(400).json({ message: 'Error: please, check ID again' });
    } catch (error) {
        next(error);
    }
}