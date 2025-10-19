import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from '@src/screen/Signup';
import Signin from '@src/screen/Signin';
import Home from '@src/screen/Home';
import Medications from '@src/screen/Medications';
import Medication from '@src/screen/Medication';
import CreateMedication from '@src/screen/CreateMedication';
import Doctors from '@src/screen/Doctors';
import NotFoundPage from '@src/screen/NotFoundPage';
import Profile from '@src/screen/Profile';
import Examine from '@src/screen/Examine';
import Patient_Record from '@src/screen/Patient_Record';
import { route_enum } from './type';

const router = createBrowserRouter(
    [
        { path: route_enum.SIGNUP, element: <Signup /> },
        { path: route_enum.SIGNIN, element: <Signin /> },
        { path: route_enum.HOME, element: <Home /> },
        { path: route_enum.MEDICATIONS, element: <Medications /> },
        { path: route_enum.MEDICATION, element: <Medication /> },
        { path: route_enum.CREATE_MEDICATION, element: <CreateMedication /> },
        { path: route_enum.DOCTORS, element: <Doctors /> },
        { path: route_enum.PROFILE, element: <Profile /> },
        { path: route_enum.PATIENT_RECORD, element: <Patient_Record /> },
        { path: route_enum.EXAMINE, element: <Examine /> },
        { path: '*', element: <NotFoundPage /> }, // Trang 404
    ],
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        future: { v7_startTransition: true } as any,
    }
);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
