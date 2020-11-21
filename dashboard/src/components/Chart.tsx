import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
// local imports
import { IMetricType } from '../interfaces/dashboard-response';
import { MetricNames } from '../enums/metric-names';

const chartOptions = (name: string) => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    type: 'time',
                    time: {
                        minUnit: 'second',
                        tooltipFormat: 'h:mm:ss a',
                    },
                },
            ],
        },
        title: {
            display: true,
            text: MetricNames[name as keyof typeof MetricNames],
            fontSize: 25,
        },
        legend: {
            display: false,
        },
    };
};

const transformData = (data: IMetricType[]) => {
    return {
        labels: data.map((d) => d.x),
        datasets: [
            {
                data: data,
                borderColor: [
                    'rgba(255, 105, 99, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 3,
            },
        ],
    };
};

const Chart: FC<{ data: IMetricType[]; metricType: string }> = ({ data, metricType }) => {
    return (
        <div className="Chart" data-testid={`${metricType}Chart`}>
            <Line data={transformData(data)} options={chartOptions(metricType)} />
        </div>
    );
};

Chart.propTypes = {
    data: PropTypes.any,
    metricType: PropTypes.string.isRequired,
};

export default Chart;
