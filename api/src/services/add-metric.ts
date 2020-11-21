import fs from 'fs';
//local imports
import IPerfMetric from '../interfaces/perf-metric';
import IPerfMetrics from '../interfaces/perf-metrics';

export const addMetric = async (newMetric: IPerfMetric): Promise<string> => {
    const fileName = process.env.FILE_NAME || './dist/perfMetrics.json';

    const doesExist = await new Promise((resolve) => {
        fs.access(fileName, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });

    let oldMetrics: IPerfMetrics;
    let newData: IPerfMetrics;
    if (doesExist) {
        const oldData: IPerfMetrics = await new Promise((resolve, reject) => {
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    oldMetrics = JSON.parse(data);
                    resolve(oldMetrics);
                }
            });
        });

        newData = { metrics: [...oldData.metrics, newMetric] };
    } else {
        newData = { metrics: [newMetric] };
    }

    const stringifiedNewData = JSON.stringify(newData);

    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, stringifiedNewData, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(stringifiedNewData);
            }
        });
    });
};
