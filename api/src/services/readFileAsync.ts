import * as fs from 'fs';

export const readFileAsync = async (): Promise<string> => {
    const fileName = process.env.FILE_NAME || './dist/perfMetrics.json';

    const doesExist = await new Promise((resolve) => {
        fs.access(fileName, (err) => {
            if (err) {
                console.log(err);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });

    if (!doesExist) {
        return '{}';
    }

    return await new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log('RFA', err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
