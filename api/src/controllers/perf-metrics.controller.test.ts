import { Request, Response } from 'express';
// local imports
import IPerfMetric from '../interfaces/perf-metric';
import { addOne } from './perf-metrics.controller';

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

    const result = await addOne({} as Request, {} as Response);

    expect(result.status).toBe(200);
    expect(result.json).toMatchObject(newMetric);
});
