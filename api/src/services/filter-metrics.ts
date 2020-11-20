import IPerfMetric from '../interfaces/perf-metric';

export const filterMetrics = ({ metrics }: { metrics: IPerfMetric[] }): IPerfMetric[] => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 30);

    return metrics?.filter((metric: IPerfMetric) => new Date(metric.createdAt) >= date);
};
