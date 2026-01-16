// const isProduct = process.env.NODE_ENV === 'production';

export function getBaseUrl() {
    return {
        api: process.env.API_URL,
        upload: process.env.UPLOAD_URL,
    };
}

// export const BASE_URL = isProduct ? process.env.API_URL : 'http://shopm.local.com:3007';
