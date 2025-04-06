import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '@src/redux/slice/App';

export const store = configureStore({
    reducer: {
        counter: AppReducer,
    },
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
