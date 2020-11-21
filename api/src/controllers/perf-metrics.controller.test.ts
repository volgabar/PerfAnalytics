import { Request, Response, NextFunction } from 'express';
// local imports
import IPerfMetric from '../interfaces/perf-metric';
import { addOneController } from './perf-metrics.controller';
import { addMetric } from '../services/add-metric';

const date = new Date();
const mockRequest = {
    ttfb: 5,
    fcp: 6,
    domLoad: 3,
    windowLoad: 2,
    resourcePerformance: [{ a: 1, b: 2 }],
    createdAt: date.toISOString(),
};

// const mockResponse: Response = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn(),
// };

// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     return res;
// };

const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
};

jest.mock('../services/add-metric', () => jest.fn(() => addMetric));
// jest.mock('../services/add-metric');

afterEach(() => {
    jest.resetAllMocks();
});

xtest('should call writeFileAsync service with given metric', async () => {
    await addOneController((mockRequest as unknown) as Request, (mockResponse as unknown) as Response, null);

    expect(addMetric).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toBeCalledWith(200);
    expect(mockResponse.status().json).toBeCalledWith(mockRequest);
});
