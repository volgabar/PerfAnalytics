import IDashboardResponse from '../interfaces/dashboardResponse';
import IPerfMetric from '../interfaces/perfMetric';

export const transformMetrics = (metrics: IPerfMetric[]): IDashboardResponse => {
    const transformedMetrics = metrics.reduce((acc:IDashboardResponse, cur:IPerfMetric) => {
        return {
            "ttfb":[...acc.ttfb,{"value": cur.ttfb, "createdAt": cur.createdAt}],
            "fcp":[...acc.fcp,{"value": cur.fcp, "createdAt": cur.createdAt}],
            "domLoad":[...acc.domLoad,{"value": cur.domLoad, "createdAt": cur.createdAt}],
            "windowLoad":[...acc.windowLoad,{"value": cur.windowLoad, "createdAt": cur.createdAt}],
            "networkTimings":[...acc.networkTimings,{"value": cur.networkTimings, "createdAt": cur.createdAt}]        
        )
    }, {} as IDashboardResponse);

    return transformedMetrics;
};
