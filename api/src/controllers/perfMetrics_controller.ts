import { Request, Response } from 'express';
//local imports
import { writeFileAsync } from '../services/writeFileAsync';

export const addMetric = async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    const newMetrics = writeFileAsync(req.body);
    res.status(200).send(newMetrics);
};
