import IDashboardResponse from '../interfaces/dashboardResponse';
import IPerfMetric from '../interfaces/perfMetric';

export const transformMetrics = (metrics: IPerfMetric[]): IDashboardResponse => {
    const transformedMetrics = metrics?.reduce<IDashboardResponse>(
        (acc: IDashboardResponse, cur: IPerfMetric): IDashboardResponse => {
            const { ttfb, fcp, domLoad, windowLoad } = acc;

            return {
                ttfb: [...(ttfb || []), { y: cur.ttfb, x: cur.createdAt }],
                fcp: [...(fcp || []), { y: cur.fcp, x: cur.createdAt }],
                domLoad: [...(domLoad || []), { y: cur.domLoad, x: cur.createdAt }],
                windowLoad: [...(windowLoad || []), { y: cur.windowLoad, x: cur.createdAt }],
            } as IDashboardResponse;
        },
        {} as IDashboardResponse,
    );

    return transformedMetrics;
};
