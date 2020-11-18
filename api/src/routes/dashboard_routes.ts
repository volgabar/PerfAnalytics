import { Router } from 'express';
//local imports
import { getMetrics } from '../controllers/dashboard_controller';

export default (router: Router): void => {
    /**
     * @swagger
     * /dashboard:
     *  get:
     *    description: Use to request last 30 munites dashboard metrics
     *    responses:
     *      '200':
     *         description: A succesful response
     */
    router.get('/dashboard', getMetrics);
};
