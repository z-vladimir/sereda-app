import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import StoreProvider from './providers/StoreProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <CalendarPage />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);

const App = () => {
    return (
        <StoreProvider>
            <RouterProvider router={router} />
        </StoreProvider>
    );
};

export default App;
