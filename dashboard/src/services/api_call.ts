import axios from 'axios';
// local imports
import IDashboardResponse from '../interfaces/dashboardResponse';

export const getPerfMetrics = async (): Promise<IDashboardResponse> => {
    const { data } = await axios.get<IDashboardResponse>('http://localhost:3000/dashboard');
    return data;
};
