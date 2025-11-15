import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const axiosInstance: AxiosInstance = axios.create({
  baseURL:'http://localhost:5000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }

    if (!error.response) {
      const baseURL = 'http://localhost:5000';
      
      if (process.env.NODE_ENV === 'development') {
        const isCorsError = error.message.includes('CORS') || 
                           error.message.includes('Access-Control') ||
                           (error.code === 'ERR_NETWORK' && error.message === 'Network Error');
        
        if (isCorsError) {
          console.error('CORS Error:', {
            message: 'Backend is blocking requests from frontend',
            frontend: 'http://localhost:3000',
            backend: baseURL,
            fix: 'Configure CORS on backend to allow origin: http://localhost:3000',
          });
        } else {
          console.error('Network error:', {
            message: error.message,
            code: error.code,
            baseURL,
          });
        }
      }
      
      if (error.message.includes('Network Error') || error.code === 'ERR_NETWORK') {
        const isCorsError = error.message.includes('CORS') || error.message.includes('Access-Control');
        if (isCorsError) {
          error.message = `CORS error: Backend at ${baseURL} is not allowing requests from http://localhost:3000. Please configure CORS on your backend.`;
        } else {
          error.message = `Cannot connect to backend API at ${baseURL}. Please ensure the backend server is running.`;
        }
      } else if (error.code === 'ECONNREFUSED') {
        error.message = `Connection refused. Backend API at ${baseURL} is not running.`;
      } else if (error.code === 'ETIMEDOUT') {
        error.message = `Request timeout. Backend API at ${baseURL} is not responding.`;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
