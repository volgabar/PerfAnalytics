export default interface IPerfMetric {
    ttfb: number;
    fcp: number;
    domLoad: number;
    windowLoad: number;
    resourcePerformance?: unknown;
    createdAt: string;
}
