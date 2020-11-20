const API_URL = {
    development: 'http://localhost:3000',
    production: 'http://localhost:8080',
};

export const API_BASEURL = process.env.NODE_ENV === 'development' ? API_URL.development : API_URL.production;
