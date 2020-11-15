import { Router } from 'express';
//local imports
import PerfMetricsRoutes from './perfMetrics_routes';
import DashboardRoutes from './dashboard_routes';

const routes = (router: Router): void => {
    PerfMetricsRoutes(router);
    DashboardRoutes(router);
};
export default routes;
