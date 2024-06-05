const data = require('../sql_data');


module.exports = async (req, res, next) => {
    try {
        const { id } = req.query;
        let newData = '';

        if (!id) return res.status(400).json({ message: 'Error: please, check ID again' });

        req.on('data', chunk => newData += chunk);

        req.on('end', async () => {
            try {
                const parsedNewData = JSON.parse(newData);
                const currentUser = await data.getUser(Number(id));

                if (!parsedNewData.name) parsedNewData.name = currentUser.name;
                if (!parsedNewData.age) parsedNewData.age = currentUser.age;

                const updatedUser = await data.updateUser(Number(id), parsedNewData);

                res.status(201).json(updatedUser);
            } catch (error) {
                next(error);
            }
        });
    } catch (error) {
        next(error);
    }
}