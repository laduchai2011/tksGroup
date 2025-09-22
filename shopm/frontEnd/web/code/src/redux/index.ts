import { configureStore } from '@reduxjs/toolkit';
import CommentBoxReducer from '@src/redux/slice/CommentBox';
import ExamineReducer from '@src/redux/slice/Examine';
import VideoPlayBoxReducer from '@src/redux/slice/VideoPlayBox';
import { accountRTK } from './query/accountRTK';

export const store = configureStore({
    reducer: {
        CommentBoxSlice: CommentBoxReducer,
        ExamineSlice: ExamineReducer,
        VideoPlayBoxSlice: VideoPlayBoxReducer,
        [accountRTK.reducerPath]: accountRTK.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountRTK.middleware),
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
