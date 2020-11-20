import { Request, Response } from 'express';
import IDashboardResponse from '../interfaces/dashboard-response';
// local imports
import { getFiltered } from './dashboard.controller';

// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     return res;
//   };

test('should return calculated dashboard metrics', async () => {
    const metrics = await getFiltered({} as Request, {} as Response);

    expect(metrics.status).toBe(200);
    // expect(metrics.json).toBe({} as IDashboardResponse);
});
