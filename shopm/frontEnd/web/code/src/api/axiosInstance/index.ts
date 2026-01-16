import axios from 'axios';
import { getBaseUrl } from '@src/const/api/baseUrl';

// const isProduct = process.env.NODE_ENV === 'production';
// const apiString = isProduct ? "" : "/api"

export const axiosInstanceApi = axios.create({
    baseURL: `${getBaseUrl().api}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export const axiosInstanceUpload = axios.create({
    baseURL: `${getBaseUrl().upload}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
