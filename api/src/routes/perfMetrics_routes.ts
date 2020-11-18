import { Router } from 'express';
//local imports
import { addMetric } from '../controllers/perfMetrics_controller';

export default (router: Router): void => {
    /**
     * @swagger
     * definitions:
     *   PerfMetric:
     *     type: object
     *     required:
     *       - ttfb
     *       - fcp
     *       - domLoad
     *       - windowLoad
     *       - createdAt
     *     properties:
     *       ttfb:
     *         type: number
     *       fcp:
     *         type: number
     *       domLoad:
     *         type: number
     *       windowLoad:
     *         type: number
     *       createdAt:
     *         type: string
     *         format: date-time
     */

    /**
     * @swagger
     * /perfMetrics:
     *   post:
     *     summary: to add new metrics
     *     requestBody:
     *        required: true
     *        content:
     *          application/json:
     *              schema:
     *                 $ref: "#/definitions/PerfMetric"
     *     responses:
     *       '200':
     *          description: A succesful response
     */
    router.post('/perfMetrics', addMetric);
};
