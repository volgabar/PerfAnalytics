import { Request, Response } from 'express';
import IDashboardResponse from '../interfaces/dashboardResponse';
// local imports
import { getMetrics } from './dashboard_controller';

// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     return res;
//   };

test('should return calculated dashboard metrics', async () => {
    const metrics = await getMetrics({} as Request, {} as Response);

    expect(metrics.status).toBe(200);
    // expect(metrics.json).toBe({} as IDashboardResponse);
});
