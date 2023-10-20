// ** React Router Dom
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
// ** Pages
import { LoginPage, RegisterPage } from "../auth/pages";
import { JournalPage } from "../journal/pages";
// ** Routes
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const router = createBrowserRouter([
    {
        path: '/auth/*',
        element: <AuthRoutes />,
        children: [
            {
                index: true,
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: '*',
                element: <Navigate to="/auth/login" />
            }
        ]
    },
    {
        path: '/',
        element: <JournalRoutes />,
        children: [
            {
                index: true,
                element: <JournalPage />
            },
            {
                path: '/*',
                element: <Navigate to={"/"} />
            }
        ],
    },
    {
        path: '/*',
        element: <Navigate to={'/'} />
    },
]);
