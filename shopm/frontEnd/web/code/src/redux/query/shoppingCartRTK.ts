import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShoppingCartField, CreateShoppingCartBodyField, ShoppingCartBodyField } from '@src/dataStruct/shoppingCart';
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
            providesTags: ['ShoppingCart'], // dùng nếu muốn refetch danh sách sau khi thêm
        }),
        // Mutation
        createShoppingCart: builder.mutation<MyResponse<ShoppingCartField>, CreateShoppingCartBodyField>({
            query: (body) => ({
                url: SHOPPINGCART_API.CREATE_SHOPPINGCART,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['ShoppingCart'], // dùng nếu muốn refetch danh sách sau khi thêm
        }),
    }),
});

export const { useGetAllShoppingCartsQuery, useCreateShoppingCartMutation } = shoppingCartRTK;
