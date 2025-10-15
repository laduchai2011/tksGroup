import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/screen/CreateMedication/type';
import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

const initialState: state_props = {
    isLoading: false,
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

const CreateMedicationSlice = createSlice({
    name: 'CreateMedicationSlice',
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
    },
});

export const { setData_toastMessage, setShow_dialogMyVideo, setShow_dialogMyImage } = CreateMedicationSlice.actions;
export default CreateMedicationSlice.reducer;
