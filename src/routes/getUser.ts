import { Request, Response, NextFunction } from 'express';
import { getUser } from '../sql_data';


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.query;
        if (id) res.status(200).json(await getUser(Number(id)));
        else res.status(400).json({ message: 'Error: please, check ID again' });
    } catch (error) { next(error); }
};