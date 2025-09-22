import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/Examine/type';

const initialState: state_props = {
    isLoading: false,
    createPatientRecordDialog: {
        isShow: true,
    },
};

const ExamineSlice = createSlice({
    name: 'ExamineSlice',
    initialState,
    reducers: {
        // set_isLoading: (state, action: PayloadAction<boolean>) => {
        //     state.isLoading = action.payload;
        // },
        setShow_createPatientRecordDialog: (state, action: PayloadAction<boolean>) => {
            state.createPatientRecordDialog.isShow = action.payload;
        },
    },
});

export const { setShow_createPatientRecordDialog } = ExamineSlice.actions;
export default ExamineSlice.reducer;
