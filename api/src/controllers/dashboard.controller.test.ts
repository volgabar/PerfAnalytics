import { NextFunction, Request, Response } from 'express';
import IDashboardResponse from '../interfaces/dashboard-response';
// local imports
import { getFilteredController } from './dashboard.controller';

// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     return res;
//   };

test('should return calculated dashboard metrics', async () => {
    const metrics = await getFilteredController({} as Request, {} as Response, {} as NextFunction);

    expect(metrics.status).toBe(200);
    // expect(metrics.json).toBe({} as IDashboardResponse);
});
