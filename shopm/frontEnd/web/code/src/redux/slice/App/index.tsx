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

const AppSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        set_header_screen_top_isShow: (state, action: PayloadAction<boolean>) => {
            state.screen.header.top_isShow = action.payload;
        },
        set_header_screen_left_isShow: (state, action: PayloadAction<boolean>) => {
            state.screen.header.left_isShow = action.payload;
        },
    },
});

export const { set_header_screen_top_isShow, set_header_screen_left_isShow } = AppSlice.actions;
export default AppSlice.reducer;
