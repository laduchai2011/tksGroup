import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    MedicationField,
    MedicationImageField,
    MedicationVideoField,
    CreateMedicationBodyField,
    MedicationBodyField,
    MedicationCommentBodyField,
    MedicationImageBodyField,
    MedicationVideoBodyField,
    PagedMedicationField,
    PagedMedicationCommentField,
    MedicationCommentField,
    CreateMedicationCommentBodyField,
} from '@src/dataStruct/medication';
import { MEDICATION_API } from '@src/const/api/medication';
import { MyResponse } from '@src/dataStruct/response';

export const medicationRTK = createApi({
    reducerPath: 'medicationRTK',
    baseQuery: fetchBaseQuery({ baseUrl: '', credentials: 'include' }),
    tagTypes: ['Medication', 'MedicationComment'],
    endpoints: (builder) => ({
        getAMedication: builder.query<MyResponse<MedicationField>, MedicationBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_A_MEDICATION,
                method: 'POST',
                body,
            }),
        }),
        getMedications: builder.query<MyResponse<PagedMedicationField>, MedicationBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_MEDICATIONS,
                method: 'POST',
                body,
            }),
        }),
        getAMedicationImage: builder.query<MyResponse<MedicationImageField>, MedicationImageBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_A_MEDICATION_IMAGE,
                method: 'POST',
                body,
            }),
        }),
        getAMedicationVideo: builder.query<MyResponse<MedicationVideoField>, MedicationVideoBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_A_MEDICATION_VIDEO,
                method: 'POST',
                body,
            }),
        }),
        getAllMedicationImages: builder.query<MyResponse<MedicationImageField[]>, MedicationImageBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_ALL_MEDICATION_IMAGES,
                method: 'POST',
                body,
            }),
        }),
        getAllMedicationVideos: builder.query<MyResponse<MedicationVideoField[]>, MedicationVideoBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_ALL_MEDICATION_VIDEOS,
                method: 'POST',
                body,
            }),
        }),
        getMedicationComments: builder.query<MyResponse<PagedMedicationCommentField>, MedicationCommentBodyField>({
            query: (body) => ({
                url: MEDICATION_API.GET_MEDICATION_COMMENTS,
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
        createMedicationComment: builder.mutation<MyResponse<MedicationCommentField>, CreateMedicationCommentBodyField>(
            {
                query: (body) => ({
                    url: MEDICATION_API.CREATE_MEDICATION_COMMENT,
                    method: 'POST',
                    body,
                }),
                // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                //     try {
                //         const { data: newCommentResp } = await queryFulfilled;
                //         const newComment = newCommentResp.data;

                //         if (!newComment) return;

                //         // ✅ cập nhật cache chỉ cho comment list của medication hiện tại
                //         dispatch(
                //             medicationRTK.util.updateQueryData(
                //                 'getMedicationComments',
                //                 { medicationId: arg.medicationId },
                //                 (draft) => {
                //                     draft.data = [...(draft.data || []), newComment]; // push comment mới
                //                 }
                //             )
                //         );
                //     } catch (err) {
                //         console.error('Error updating cache comment:', err);
                //     }
                // },
            }
        ),
    }),
});

export const {
    useGetAMedicationQuery,
    useGetMedicationsQuery,
    useGetAMedicationImageQuery,
    useGetAMedicationVideoQuery,
    useGetAllMedicationImagesQuery,
    useGetAllMedicationVideosQuery,
    useGetMedicationCommentsQuery,
    useCreateMedicationMutation,
    useCreateMedicationCommentMutation,
} = medicationRTK;
