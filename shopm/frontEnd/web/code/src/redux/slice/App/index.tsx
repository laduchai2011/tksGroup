import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/App/type';

const initialState: state_props = {
    screen: {
        header: {
            top_isShow: false,
            left_isShow: false,
        },
    },
};

export const AppSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        set_top_isShow: (state, action: PayloadAction<boolean>) => {
            state.screen.header.top_isShow = action.payload;
        },
    },
});

export const { set_top_isShow } = AppSlice.actions;
export default AppSlice.reducer;
