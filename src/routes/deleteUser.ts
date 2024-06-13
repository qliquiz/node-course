import { Request, Response, NextFunction } from 'express';
import { deleteUser } from '../sql_data';


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.query;
        if (id) {
            const rogue = await deleteUser(Number(id));
            res.status(202).json(rogue);
        } else { res.status(400).json({ message: 'Error: please, check ID again' }); }
    } catch (error) { next(error); }
};