import { Request, Response, NextFunction } from 'express';
import { getUsers } from '../sql_data';


export default async (req: Request, res: Response, next: NextFunction) => {
    try { res.status(200).json(await getUsers()); }
    catch (err) { next(err); }
}