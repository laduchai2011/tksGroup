import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'src/screen/Home';
// import NotFoundPage from 'src/screen/NotFoundPage';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    // { path: '*', element: <NotFoundPage /> }, // Trang 404
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
