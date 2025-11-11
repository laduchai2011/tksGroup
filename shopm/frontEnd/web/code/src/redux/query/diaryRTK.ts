import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DiaryField, CreateDiaryBodyField, PagedDiaryField, DiaryBodyField } from '@src/dataStruct/diary';
import { DIARY_API } from '@src/const/api/diary';
import { MyResponse } from '@src/dataStruct/response';

export const diaryRTK = createApi({
    reducerPath: 'diaryRTK',
    baseQuery: fetchBaseQuery({ baseUrl: '', credentials: 'include' }),
    tagTypes: ['Diary'],
    endpoints: (builder) => ({
        getDiarys: builder.query<MyResponse<PagedDiaryField>, DiaryBodyField>({
            query: (body) => ({
                url: DIARY_API.GET_DIARYS,
                method: 'POST',
                body,
            }),
        }),
        // Mutation
        createDiary: builder.mutation<MyResponse<DiaryField>, CreateDiaryBodyField>({
            query: (body) => ({
                url: DIARY_API.CREATE_DIARY,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Diary'],
        }),
    }),
});

export const { useGetDiarysQuery, useCreateDiaryMutation } = diaryRTK;
