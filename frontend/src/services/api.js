//Aqui vamos conectar o back com front
import axios from 'axios';
import { getAuthToken } from './auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
    const token = getAuthToken();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;