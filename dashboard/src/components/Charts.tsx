import React, { FC, Fragment, useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
//local imports
import { getPerfMetrics } from '../services/api_call';
import IDashboardResponse from '../interfaces/dashboardResponse';
import Chart from './Chart';

const Charts: FC = () => {
    const [perfMetrics, setPerfMetrics] = useState<IDashboardResponse | null>(null);

    useEffect(() => {
        const getMetrics = async () => {
            const data: IDashboardResponse = await getPerfMetrics();
            setPerfMetrics(data);
        };

        getMetrics();
    }, []);

    return perfMetrics ? (
        <div className="Charts">
            {Object.keys(perfMetrics).map((metricKey) => (
                <Fragment key={metricKey}>
                    <Chart data={perfMetrics[metricKey as keyof IDashboardResponse]} metricType={metricKey} />
                </Fragment>
            ))}
        </div>
    ) : (
        <div className="Spinner">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={3000} //3 secs
            />
        </div>
    );
};

export default Charts;
