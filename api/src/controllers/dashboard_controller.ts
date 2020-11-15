import { Request, Response } from 'express';
import IPerfMetric from '../interfaces/perfMetric';
//local imports
import IPerfMetrics from '../interfaces/perfMetrics';
import { filterMetrics } from '../services/filterMetrics';
import { readFileAsync } from '../services/readFileAsync';
import { transformMetrics } from '../services/transformMetrics';

export const getMetrics = async (req: Request, res: Response): Promise<void> => {
    const metrics = await readFileAsync();
    const parsedMetrics: IPerfMetrics = JSON.parse(metrics);
    const filteredMetrics: IPerfMetric[] = filterMetrics(parsedMetrics);
    console.log(filteredMetrics);
    const transformedMetrics = transformMetrics(filteredMetrics);
    const stringifiedMetrics = JSON.stringify(transformedMetrics);
    res.status(200).send(stringifiedMetrics);
};
