import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/component/VideoPlayBox/type';

const initialState: state_props = {
    id: undefined,
    isShow: false,
    isShowComponent: false,
};

const VideoPlayBoxSlice = createSlice({
    name: 'VideoPlayBoxSlice',
    initialState,
    reducers: {
        set_id: (state, action: PayloadAction<string>) => {
            if (state.id !== action.payload || state.isShowComponent !== true) {
                state.id = action.payload;
            }
        },
        set_isShow: (state, action: PayloadAction<boolean>) => {
            if (state.isShow !== action.payload || state.isShowComponent !== true) {
                state.isShow = action.payload;
            }
        },
        set_isShowComponent: (state, action: PayloadAction<boolean>) => {
            if (state.isShowComponent !== action.payload) {
                state.isShowComponent = action.payload;
            }
        },
    },
});

export const { set_id, set_isShow, set_isShowComponent } = VideoPlayBoxSlice.actions;
export default VideoPlayBoxSlice.reducer;
