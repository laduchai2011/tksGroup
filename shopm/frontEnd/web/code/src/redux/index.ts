import { configureStore } from '@reduxjs/toolkit';
import CommentBoxReducer from '@src/redux/slice/CommentBox';
import ExamineReducer from '@src/redux/slice/Examine';
import MedicationReducer from '@src/redux/slice/Medication';
import MedicationsReducer from '@src/redux/slice/Medications';
import CreateMedicationReducer from '@src/redux/slice/CreateMedication';
import DoctorsReducer from '@src/redux/slice/Doctors';
import VideoPlayBoxReducer from '@src/redux/slice/VideoPlayBox';
import { accountRTK } from './query/accountRTK';
import { medicationRTK } from './query/medicationRTK';

export const store = configureStore({
    reducer: {
        CommentBoxSlice: CommentBoxReducer,
        ExamineSlice: ExamineReducer,
        MedicationSlice: MedicationReducer,
        MedicationsSlice: MedicationsReducer,
        CreateMedicationSlice: CreateMedicationReducer,
        DoctorsSlice: DoctorsReducer,
        VideoPlayBoxSlice: VideoPlayBoxReducer,
        [accountRTK.reducerPath]: accountRTK.reducer,
        [medicationRTK.reducerPath]: medicationRTK.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(accountRTK.middleware, medicationRTK.middleware),
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
