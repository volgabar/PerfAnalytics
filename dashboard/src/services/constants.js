const API_URL = {
    development: 'http://localhost:3000',
    production: 'https://perf-analytics-app-api.herokuapp.com',
};

export const API_BASEURL = process.env.NODE_ENV === 'development' ? API_URL.development : API_URL.production;
