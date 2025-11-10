import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/Profile/type';
import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

const initialState: state_props = {
    isLoading: false,
    dialogLoading: {
        isShow: false,
    },
    toastMessage: {
        data: { type: undefined, message: '' },
    },
};

const ProfileSlice = createSlice({
    name: 'ProfileSlice',
    initialState,
    reducers: {
        setData_toastMessage: (state, action: PayloadAction<ToastMessage_Data_Props>) => {
            state.toastMessage.data = action.payload;
        },
        setShow_dialogLoading: (state, action: PayloadAction<boolean>) => {
            state.dialogLoading.isShow = action.payload;
        },
    },
});

export const { setData_toastMessage, setShow_dialogLoading } = ProfileSlice.actions;
export default ProfileSlice.reducer;
