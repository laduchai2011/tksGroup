import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from '@src/screen/Signup';
import Home from '@src/screen/Home';
import NotFoundPage from '@src/screen/NotFoundPage';
import Profile from '@src/screen/Profile';
import Patient_Record from '@src/screen/Patient_Record';

const router = createBrowserRouter(
    [
        { path: '/signup', element: <Signup /> },
        { path: '/', element: <Home /> },
        { path: '/profile', element: <Profile /> },
        { path: '/patient_record', element: <Patient_Record /> },
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
