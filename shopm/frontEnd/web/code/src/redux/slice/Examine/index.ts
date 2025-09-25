import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/Examine/type';
import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

const initialState: state_props = {
    isLoading: false,
    createPatientRecordDialog: {
        isShow: true,
    },
    toastMessage: {
        data: { type: undefined, message: '' },
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
        setData_toastMessage: (state, action: PayloadAction<ToastMessage_Data_Props>) => {
            state.toastMessage.data = action.payload;
        },
    },
});

export const { setShow_createPatientRecordDialog, setData_toastMessage } = ExamineSlice.actions;
export default ExamineSlice.reducer;
