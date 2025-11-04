import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/Medication/type';
import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

const initialState: state_props = {
    isLoading: false,
    dialogMyVideo: {
        isShow: false,
        data: [],
    },
    dialogMyImage: {
        isShow: false,
        data: [],
    },
    dialogCreateShoppingCart: {
        isShow: false,
    },
    toastMessage: {
        data: { type: undefined, message: '' },
    },
};

const MedicationSlice = createSlice({
    name: 'MedicationSlice',
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
        setData_dialogMyVideo: (state, action: PayloadAction<string[]>) => {
            state.dialogMyVideo.data = action.payload;
        },
        setData_dialogMyImage: (state, action: PayloadAction<string[]>) => {
            state.dialogMyImage.data = action.payload;
        },
        setShow_dialogCreateShoppingCart: (state, action: PayloadAction<boolean>) => {
            state.dialogCreateShoppingCart.isShow = action.payload;
        },
    },
});

export const {
    setData_toastMessage,
    setShow_dialogMyVideo,
    setShow_dialogMyImage,
    setData_dialogMyVideo,
    setData_dialogMyImage,
    setShow_dialogCreateShoppingCart,
} = MedicationSlice.actions;
export default MedicationSlice.reducer;
