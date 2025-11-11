import { BASE_URL } from './baseUrl';

const isProduct = process.env.NODE_ENV === 'production';
const apiString = isProduct ? '' : '/api';

export const DIARY_API = {
    CREATE_DIARY: `${BASE_URL}${apiString}/service_diary/mutate/createDiary`,
    GET_DIARYS: `${BASE_URL}${apiString}/service_diary/query/getDiarys`,
};
