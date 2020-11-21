import Joi from '@hapi/joi';
import { Request, Response } from 'express';
//local imports
import requestMiddleware from '../middleware/request-middleware';
import { addMetric } from '../services/add-metric';

const perfMetricSchema = Joi.object().keys({
    ttfb: Joi.number().required(),
    fcp: Joi.number().required(),
    domLoad: Joi.number().required(),
    windowLoad: Joi.number().required(),
    resourcePerformance: Joi.array().optional(),
    createdAt: Joi.date().required(),
});

const addOne = async (req: Request, res: Response): Promise<Response> => {
    const newMetrics = await addMetric(req.body);
    return res.status(200).send(newMetrics);
};

export const addOneController = requestMiddleware(addOne, { validation: { body: perfMetricSchema } });
