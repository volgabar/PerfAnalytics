import { Request, Response } from 'express';
//local imports
import { readFileAsync } from '../services/readFileAsync';

export const getMetrics = async (req: Request, res: Response): Promise<void> => {
    const metrics = await readFileAsync();
    res.status(200).send(metrics);
};
