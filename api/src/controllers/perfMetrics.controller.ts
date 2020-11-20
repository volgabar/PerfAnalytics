import { Request, Response } from 'express';
//local imports
import { addMetric } from '../services/add-metric';

export const addOne = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);
    const newMetrics = await addMetric(req.body);
    return res.status(200).send(newMetrics);
};
