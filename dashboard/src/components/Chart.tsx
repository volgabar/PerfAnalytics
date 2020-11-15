import React from 'react';
import { Line } from 'react-chartjs-2';

const chartOptions = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    title: {
        display: true,
        text: 'Data Orgranized In Bars',
        fontSize: 25,
    },
    legend: {
        display: true,
        position: 'top',
    },
};
const Chart = (chartData: any) => {
    return (
        <div className="Chart">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default Chart;
