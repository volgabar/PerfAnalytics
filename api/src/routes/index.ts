import { Router } from 'express';
//local imports
import PerfMetricsRoutes from './perf-metrics.routes';
import DashboardRoutes from './dashboard.routes';

const routes = (router: Router): void => {
    PerfMetricsRoutes(router);
    DashboardRoutes(router);
};
export default routes;
