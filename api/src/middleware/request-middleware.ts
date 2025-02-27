import { RequestHandler, Request, Response, NextFunction } from 'express';
import Joi from '@hapi/joi';
import BadRequest from '../errors/bad-request';

const getMessageFromJoiError = (error: Joi.ValidationError): string | undefined => {
    if (!error.details && error.message) {
        return error.message;
    }
    return error.details && error.details.length > 0 && error.details[0].message
        ? `PATH: [${error.details[0].path}] ;; MESSAGE: ${error.details[0].message}`
        : undefined;
};

interface HandlerOptions {
    validation?: {
        body?: Joi.ObjectSchema;
    };
}

/**
 * This router wrapper catches any error from async await
 * and throws it to the default express error handler,
 * instead of crashing the app
 * @param handler Request handler to check for error
 */
const requestHandler = (handler: RequestHandler, options?: HandlerOptions): RequestHandler => async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (options?.validation?.body) {
        const { error } = options?.validation?.body.validate(req.body);
        if (error != null) {
            return next(new BadRequest(getMessageFromJoiError(error)));
        }
    }

    return handler(req, res, next).catch((err: Error) => {
        next(err);
    });
};

export default requestHandler;
