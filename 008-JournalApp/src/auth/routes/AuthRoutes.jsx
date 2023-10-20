/* import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = [
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
]; */

import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../../hooks";


export const AuthRoutes = () => {

    const { status } = useCheckAuth();
    if (status === 'authenticated') {
        return <Navigate to='/*' />
    }
    return <Outlet />;
};
