import { getBaseUrl } from './baseUrl';

// const isProduct = process.env.NODE_ENV === 'production';
// const apiString = isProduct ? '' : '/api';

// export const IMAGE_API = {
//     UPLOAD_A_IMAGE: `${BASE_URL}${apiString}/service_image/mutate/uploadAImage`,
//     UPLOAD_MULTIPLE_IMAGE: `${BASE_URL}${apiString}/service_image/mutate/uploadMultipleImage`,
// };

export const IMAGE_API = {
    UPLOAD_A_IMAGE: `${getBaseUrl().upload}/service_image/mutate/uploadAImage`,
    UPLOAD_MULTIPLE_IMAGE: `${getBaseUrl().upload}/service_image/mutate/uploadMultipleImage`,
};
