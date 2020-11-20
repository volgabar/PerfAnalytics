import axios from 'axios';
// local imports
import IDashboardResponse from '../interfaces/dashboard-response';
import { API_BASEURL } from './constants';

export const getPerfMetrics = async (): Promise<IDashboardResponse> => {
    const { data } = await axios.get<IDashboardResponse>(`${API_BASEURL}/dashboard`);
    return data;
};
