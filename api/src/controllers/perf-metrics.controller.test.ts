import { Request, Response, NextFunction } from 'express';
// local imports
import IPerfMetric from '../interfaces/perf-metric';
import { addOneController } from './perf-metrics.controller';

test('should call writeFileAsync service with given metric', async () => {
    const date = new Date();
    const newMetric: IPerfMetric = {
        ttfb: 5,
        fcp: 6,
        domLoad: 3,
        windowLoad: 2,
        resourcePerformance: { a: 1, b: 2 },
        createdAt: date.toISOString(),
    };

    const result = await addOneController({} as Request, {} as Response, {} as NextFunction);

    expect(result.status).toBe(200);
    expect(result.json).toMatchObject(newMetric);
});
