import IDashboardResponse from '../interfaces/dashboardResponse';
import IPerfMetric from '../interfaces/perfMetric';

export const transformMetrics = (metrics: IPerfMetric[]): IDashboardResponse => {
    const transformedMetrics = metrics.reduce<IDashboardResponse>(
        (acc: IDashboardResponse, cur: IPerfMetric): IDashboardResponse => {
            const { ttfb, fcp, domLoad, windowLoad, networkTimings } = acc;

            return {
                ttfb: [...(ttfb || []), { value: cur.ttfb, createdAt: cur.createdAt }],
                fcp: [...(fcp || []), { value: cur.fcp, createdAt: cur.createdAt }],
                domLoad: [...(domLoad || []), { value: cur.domLoad, createdAt: cur.createdAt }],
                windowLoad: [...(windowLoad || []), { value: cur.windowLoad, createdAt: cur.createdAt }],
                networkTimings: [...(networkTimings || []), { value: cur.networkTimings, createdAt: cur.createdAt }],
            } as IDashboardResponse;
        },
        {} as IDashboardResponse,
    );

    return transformedMetrics;
};
