import { configureStore } from '@reduxjs/toolkit';
import CommentBoxReducer from '@src/redux/slice/CommentBox';

export const store = configureStore({
    reducer: {
        CommentBoxSlice: CommentBoxReducer,
    },
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
