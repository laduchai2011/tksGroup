import { configureStore } from '@reduxjs/toolkit';
import CommentBoxReducer from '@src/redux/slice/CommentBox';
import ExamineReducer from '@src/redux/slice/Examine';
import MedicationReducer from '@src/redux/slice/Medication';
import MedicationsReducer from '@src/redux/slice/Medications';
import CreateMedicationReducer from '@src/redux/slice/CreateMedication';
import DoctorsReducer from '@src/redux/slice/Doctors';
import VideoPlayBoxReducer from '@src/redux/slice/VideoPlayBox';
import ProfileReducer from '@src/redux/slice/Profile';
import { accountRTK } from './query/accountRTK';
import { medicationRTK } from './query/medicationRTK';
import { diaryRTK } from './query/diaryRTK';
import { shoppingCartRTK } from './query/shoppingCartRTK';

export const store = configureStore({
    reducer: {
        CommentBoxSlice: CommentBoxReducer,
        ExamineSlice: ExamineReducer,
        MedicationSlice: MedicationReducer,
        MedicationsSlice: MedicationsReducer,
        CreateMedicationSlice: CreateMedicationReducer,
        DoctorsSlice: DoctorsReducer,
        VideoPlayBoxSlice: VideoPlayBoxReducer,
        ProfileSlice: ProfileReducer,
        [accountRTK.reducerPath]: accountRTK.reducer,
        [medicationRTK.reducerPath]: medicationRTK.reducer,
        [diaryRTK.reducerPath]: diaryRTK.reducer,
        [shoppingCartRTK.reducerPath]: shoppingCartRTK.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            accountRTK.middleware,
            medicationRTK.middleware,
            shoppingCartRTK.middleware,
            diaryRTK.middleware
        ),
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
