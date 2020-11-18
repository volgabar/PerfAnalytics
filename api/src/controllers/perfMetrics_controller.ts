import { Request, Response } from 'express';
//local imports
import { writeFileAsync } from '../services/writeFileAsync';

export const addMetric = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);
    const newMetrics = await writeFileAsync(req.body);
    return res.status(200).send(newMetrics);
};
