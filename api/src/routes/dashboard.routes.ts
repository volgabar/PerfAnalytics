import { Router } from 'express';
//local imports
import { getFiltered } from '../controllers/dashboard.controller';

export default (router: Router): void => {
    /**
     * @swagger
     * /dashboards:
     *  get:
     *    description: Use to request last 30 munites of dashboard metrics
     *    responses:
     *      '200':
     *         description: A succesful response
     *      '204':
     *         description: A succesful response, but no content to return
     */
    router.get('/dashboards', getFiltered);
};
