import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    MedicationField,
    CreateMedicationBodyField,
    MedicationBodyField,
    PagedMedicationField,
} from '@src/dataStruct/medication';
import { MEDICATION_API } from '@src/const/api/medication';
import { MyResponse } from '@src/dataStruct/response';

export const medicationRTK = createApi({
    reducerPath: 'medicationRTK',
    baseQuery: fetchBaseQuery({ baseUrl: '', credentials: 'include' }),
    tagTypes: ['Medication'],
    endpoints: (builder) => ({
        getMedications: builder.query<MyResponse<PagedMedicationField>, MedicationBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_MEDICATION,
                method: 'POST',
                body,
            }),
        }),
        // Mutation
        createMedication: builder.mutation<MyResponse<MedicationField>, CreateMedicationBodyField>({
            query: (body) => ({
                url: MEDICATION_API.CREATE_MEDICATION,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Medication'], // dùng nếu muốn refetch danh sách sau khi thêm
        }),
    }),
});

export const { useCreateMedicationMutation, useGetMedicationsQuery } = medicationRTK;
