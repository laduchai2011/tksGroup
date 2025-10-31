import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/Medications/type';
import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

const initialState: state_props = {
    isLoading: false,
    dialogMyVideo: {
        isShow: false,
    },
    dialogMyImage: {
        isShow: false,
    },
    dialogLoading: {
        isShow: false,
    },
    toastMessage: {
        data: { type: undefined, message: '' },
    },
};

const MedicationsSlice = createSlice({
    name: 'MedicationsSlice',
    initialState,
    reducers: {
        setData_toastMessage: (state, action: PayloadAction<ToastMessage_Data_Props>) => {
            state.toastMessage.data = action.payload;
        },
        setShow_dialogMyVideo: (state, action: PayloadAction<boolean>) => {
            state.dialogMyVideo.isShow = action.payload;
        },
        setShow_dialogMyImage: (state, action: PayloadAction<boolean>) => {
            state.dialogMyImage.isShow = action.payload;
        },
        setShow_dialogLoading: (state, action: PayloadAction<boolean>) => {
            state.dialogLoading.isShow = action.payload;
        },
    },
});

export const { setData_toastMessage, setShow_dialogMyVideo, setShow_dialogMyImage, setShow_dialogLoading } =
    MedicationsSlice.actions;
export default MedicationsSlice.reducer;
