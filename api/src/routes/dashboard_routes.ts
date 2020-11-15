import { Router } from 'express';
//local imports
import { getMetrics } from '../controllers/dashboard_controller';

export default (router: Router): void => {
    router.get('/dashboard', getMetrics);
};
