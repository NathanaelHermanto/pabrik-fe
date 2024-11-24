import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL + '/api/v1/'
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 
        if (config.url !== '/auth/authenticate' && token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('Unauthorized!');
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;
