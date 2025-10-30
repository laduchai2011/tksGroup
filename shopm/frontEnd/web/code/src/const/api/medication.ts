import { BASE_URL } from './baseUrl';

const isProduct = process.env.NODE_ENV === 'production';
const apiString = isProduct ? '' : '/api';

export const MEDICATION_API = {
    CREATE_MEDICATION: `${BASE_URL}${apiString}/service_medication/mutate/createMedication`,
    GET_MEDICATION: `${BASE_URL}${apiString}/service_medication/mutate/getMedications`,
};
