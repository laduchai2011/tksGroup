import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@src/screen/Home';
// import NotFoundPage from '@src/screen/NotFoundPage';

const router = createBrowserRouter(
    [
        { path: '/', element: <Home /> },
        // { path: '*', element: <NotFoundPage /> }, // Trang 404
    ],
    {
        future: {
            v7_startTransition: true, // Bật cờ v7_startTransition
        } as any,
    }
);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
