import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state_props } from '@src/component/CommentBox/type';

const initialState: state_props = {
    id: undefined,
    isShow: false,
};

const CommentBoxSlice = createSlice({
    name: 'CommentBoxSlice',
    initialState,
    reducers: {
        set_id: (state, action: PayloadAction<string>) => {
            if (state.id !== action.payload || state.isShow !== true) {
                state.id = action.payload;
            }
        },
        set_isShow: (state, action: PayloadAction<boolean>) => {
            if (state.isShow !== action.payload) {
                state.isShow = action.payload;
            }
        },
    },
});

export const { set_id, set_isShow } = CommentBoxSlice.actions;
export default CommentBoxSlice.reducer;
