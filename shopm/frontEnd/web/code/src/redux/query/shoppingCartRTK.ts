import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    ShoppingCartField,
    CreateShoppingCartBodyField,
    ShoppingCartBodyField,
    ShoppingCartMedicationField,
    CreateShoppingCartMedicationBodyField,
} from '@src/dataStruct/shoppingCart';
import { SHOPPINGCART_API } from '@src/const/api/shoppingCart';
import { MyResponse } from '@src/dataStruct/response';

export const shoppingCartRTK = createApi({
    reducerPath: 'shoppingCartRTK',
    baseQuery: fetchBaseQuery({ baseUrl: '', credentials: 'include' }),
    tagTypes: ['ShoppingCart'],
    endpoints: (builder) => ({
        getAllShoppingCarts: builder.query<MyResponse<ShoppingCartField[]>, ShoppingCartBodyField>({
            query: (body) => ({
                url: SHOPPINGCART_API.GET_ALL_SHOPPINGCARTS,
                method: 'POST',
                body,
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map((cart) => ({ type: 'ShoppingCart' as const, id: cart.id })),
                          { type: 'ShoppingCart', id: 'LIST' }, // để invalidate toàn bộ khi cần
                      ]
                    : [{ type: 'ShoppingCart', id: 'LIST' }],
        }),
        // Mutation
        createShoppingCart: builder.mutation<MyResponse<ShoppingCartField>, CreateShoppingCartBodyField>({
            query: (body) => ({
                url: SHOPPINGCART_API.CREATE_SHOPPINGCART,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'ShoppingCart', id: 'LIST' }],
        }),
        addMedicationToShoppingCart: builder.mutation<
            MyResponse<ShoppingCartMedicationField>,
            CreateShoppingCartMedicationBodyField
        >({
            query: (body) => ({
                url: SHOPPINGCART_API.ADD_MEDICATION_TO_SHOPPINGCART,
                method: 'POST',
                body,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'ShoppingCart', id: arg.shoppingCartId }],
        }),
    }),
});

export const { useGetAllShoppingCartsQuery, useCreateShoppingCartMutation, useAddMedicationToShoppingCartMutation } =
    shoppingCartRTK;
