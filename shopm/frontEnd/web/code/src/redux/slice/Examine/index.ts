import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/Examine/type';
import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

const initialState: state_props = {
    isLoading: false,
    createPatientRecordDialog: {
        isShow: false,
    },
    dialogPatientSend: {
        isShow: false,
    },
    dialogMyVideo: {
        isShow: false,
    },
    dialogMyImage: {
        isShow: false,
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
        setShow_dialogPatientSend: (state, action: PayloadAction<boolean>) => {
            state.dialogPatientSend.isShow = action.payload;
        },
        setShow_dialogMyVideo: (state, action: PayloadAction<boolean>) => {
            state.dialogMyVideo.isShow = action.payload;
        },
        setShow_dialogMyImage: (state, action: PayloadAction<boolean>) => {
            state.dialogMyImage.isShow = action.payload;
        },
        setData_toastMessage: (state, action: PayloadAction<ToastMessage_Data_Props>) => {
            state.toastMessage.data = action.payload;
        },
    },
});

export const {
    setShow_createPatientRecordDialog,
    setShow_dialogPatientSend,
    setShow_dialogMyVideo,
    setShow_dialogMyImage,
    setData_toastMessage,
} = ExamineSlice.actions;
export default ExamineSlice.reducer;
