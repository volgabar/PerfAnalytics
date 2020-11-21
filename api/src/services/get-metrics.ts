import fs from 'fs';

export const getMetrics = async (): Promise<string> => {
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

    if (!doesExist) {
        return null;
    }

    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
