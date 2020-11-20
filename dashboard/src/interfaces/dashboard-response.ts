export interface IMetricType {
    y: number;
    x: string;
}

export default interface IDashboardResponse {
    ttfb: IMetricType[];
    fcp: IMetricType[];
    domLoad: IMetricType[];
    windowLoad: IMetricType[];
}
