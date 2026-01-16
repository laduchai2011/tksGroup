import { getBaseUrl } from './baseUrl';

const isProduct = process.env.NODE_ENV === 'production';
// const apiString = isProduct ? '' : '/api';

// export const ACCOUNT_API = {
//     SIGNUP: `${BASE_URL}${apiString}/service_account/mutate/signup`,
//     SIGNIN: `${BASE_URL}${apiString}/service_account/mutate/signin`,
//     SIGNOUT: `${BASE_URL}${apiString}/service_account/mutate/signout`,
// };

export const ACCOUNT_API = {
    SIGNUP: `${getBaseUrl().api}/service_account/mutate/signup`,
    SIGNIN: `${getBaseUrl().api}/service_account/mutate/signin`,
    SIGNOUT: `${getBaseUrl().api}/service_account/mutate/signout`,
};
