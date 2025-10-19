import { BASE_URL } from './baseUrl';

const isProduct = process.env.NODE_ENV === 'production';
const apiString = isProduct ? '' : '/api';

export const ACCOUNT_API = {
    SIGNUP: `${BASE_URL}${apiString}/service_account/mutate/signup`,
};
