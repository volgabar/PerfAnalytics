export default interface IPerfMetric {
    ttfb: number;
    fcp: number;
    domLoad: number;
    windowLoad: number;
    networkTimings: unknown;
    createdAt: string;
}
