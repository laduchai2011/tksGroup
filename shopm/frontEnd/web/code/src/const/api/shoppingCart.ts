import { getBaseUrl } from './baseUrl';

// const isProduct = process.env.NODE_ENV === 'production';
// const apiString = isProduct ? '' : '/api';

// export const SHOPPINGCART_API = {
//     CREATE_SHOPPINGCART: `${BASE_URL}${apiString}/service_shoppingCart/mutate/createShoppingCart`,
//     ADD_MEDICATION_TO_SHOPPINGCART: `${BASE_URL}${apiString}/service_shoppingCart/mutate/addMedicationToShoppingCart`,
//     GET_ALL_SHOPPINGCARTS: `${BASE_URL}${apiString}/service_shoppingCart/query/getAllShoppingCarts`,
// };

export const SHOPPINGCART_API = {
    CREATE_SHOPPINGCART: `${getBaseUrl().api}/service_shoppingCart/mutate/createShoppingCart`,
    ADD_MEDICATION_TO_SHOPPINGCART: `${getBaseUrl().api}/service_shoppingCart/mutate/addMedicationToShoppingCart`,
    GET_ALL_SHOPPINGCARTS: `${getBaseUrl().api}/service_shoppingCart/query/getAllShoppingCarts`,
};
