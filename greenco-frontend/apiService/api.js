import axios from "axios";

// const API_URL = "https://greenco-backend.onrender.com/api/v1/common";
// const API_URL = "http://localhost:5050/api/v1/common";
const API_URL = "http://192.168.0.115:5050/api/v1/common";

// export const API_BASE_URL = "http://localhost:5050";
export const API_BASE_URL = "http://192.168.0.115:5050";

export const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http') || url.startsWith('data:')) return url;

    // Append timestamp to bust browser caching of older strict cross-origin headers
    const timestamp = new Date().getTime();
    if (url.startsWith('/uploads')) return `${API_BASE_URL}${url}?v=${timestamp}`;

    return `${API_BASE_URL}/${url}?v=${timestamp}`;
};


export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});