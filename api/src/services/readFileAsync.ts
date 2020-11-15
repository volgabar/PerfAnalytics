import * as fs from 'fs';

export const readFileAsync = async (): Promise<string> => {
    const fileName = process.env.FILE_NAME || './dist/perfMetrics.json';

    return await new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                reject('');
            } else {
                resolve(data);
            }
        });
    });
};
