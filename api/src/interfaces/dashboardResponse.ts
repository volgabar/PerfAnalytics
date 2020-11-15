interface MetricType {
    value: unknown;
    createdAt: string;
}

export default interface IDashboardResponse {
    ttfb: MetricType[];
    fcp: MetricType[];
    domLoad: MetricType[];
    windowLoad: MetricType[];
    networkTimings: MetricType[];
    createdAt: MetricType[];
}
