import { BASE_URL } from './baseUrl';

const isProduct = process.env.NODE_ENV === 'production';
const apiString = isProduct ? '' : '/api';

export const MEDICATION_API = {
    CREATE_MEDICATION: `${BASE_URL}${apiString}/service_medication/mutate/createMedication`,
    GET_MEDICATION: `${BASE_URL}${apiString}/service_medication/query/getMedications`,
    GET_ALL_MEDICATION_IMAGES: `${BASE_URL}${apiString}/service_medication/query/getAllMedicationImages`,
    GET_ALL_MEDICATION_VIDEOS: `${BASE_URL}${apiString}/service_medication/query/getAllMedicationVideos`,
};
