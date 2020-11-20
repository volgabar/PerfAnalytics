import { Request, Response } from 'express';
import IPerfMetric from '../interfaces/perf-metric';
//local imports
import IPerfMetrics from '../interfaces/perf-metrics';
import { filterMetrics } from '../services/filter-metrics';
import { getMetrics } from '../services/get-metrics';
import { transformMetrics } from '../services/transform-metrics';

export const getFiltered = async (req: Request, res: Response): Promise<Response> => {
    const metrics = await getMetrics();

    if (!metrics) {
        return res.status(204).send();
    }

    const parsedMetrics: IPerfMetrics = JSON.parse(metrics);
    const filteredMetrics: IPerfMetric[] = filterMetrics(parsedMetrics);

    if (filteredMetrics.length) {
        return res.status(204).send();
    }

    const transformedMetrics = transformMetrics(filteredMetrics);
    const stringifiedMetrics = JSON.stringify(transformedMetrics);

    return res.status(200).send(stringifiedMetrics);
};
