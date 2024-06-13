const data = require('../sql_data');


module.exports = async (req, res, next) => {
    try {
        let body = '';

        req.on('data', chunk => body += chunk);

        req.on('end', async () => {
            try {
                const parsedBody = JSON.parse(body);
                const { name, age } = parsedBody;

                if (name && age) {
                    const user = {
                        name,
                        age: parseInt(age, 10)
                    };
                    const newUser = await data.createUser(user);
                    res.status(201).json(newUser);
                } else res.status(400).json({ message: 'Error: please, check name and age again' });
            } catch (error) {
                next(error);
            }
        });
    } catch (error) {
        next(error);
    }
}