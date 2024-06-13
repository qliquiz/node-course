import { Request, Response, NextFunction } from 'express';
import { updateUser, getUser } from '../sql_data';


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.query;
        let newData = '';

        if (!id) return res.status(400).json({ message: 'Error: please, check ID again' });

        req.on('data', (chunk) => { newData += chunk; });

        req.on('end', async () => {
            try {
                const parsedNewData = JSON.parse(newData);
                const currentUser = await getUser(Number(id));

                if (!currentUser) return res.status(404).json({ message: 'Error: user not found' });

                if (!parsedNewData.name) parsedNewData.name = currentUser.name;
                if (!parsedNewData.age) parsedNewData.age = currentUser.age;

                const updatedUser = await updateUser(Number(id), parsedNewData);

                res.status(201).json(updatedUser);
            } catch (error) { next(error); }
        });
    } catch (error) { next(error); }
};