import { Router } from 'express';
//local imports
import { addMetric } from '../controllers/perfMetrics_controller';

export default (router: Router): void => {
    router.post('/perfMetrics', addMetric);
};
