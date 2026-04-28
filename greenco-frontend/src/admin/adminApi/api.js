import axios from "axios";

// const API_URL = "https://greenco-backend.onrender.com/api/v1/common";
export const API_BASE_URL = "http://localhost:5050";
const API_URL = `${API_BASE_URL}/api/v1/admin`;

export const api = axios.create({
    baseURL: API_URL
});

export const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http') || url.startsWith('data:')) return url;

    // Append timestamp to bust browser caching of older strict cross-origin headers
    const timestamp = new Date().getTime();
    if (url.startsWith('/uploads')) return `${API_BASE_URL}${url}?v=${timestamp}`;

    return `${API_BASE_URL}/${url}?v=${timestamp}`;
};

// Add auth token to requests if exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});