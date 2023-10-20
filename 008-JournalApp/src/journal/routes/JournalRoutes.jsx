/* import { Navigate } from "react-router-dom";
import { JournalPage } from "../pages";

export const JournalRoutes = [
    {
        index: true,
        element: <JournalPage />
    },
    {
        path: '/*',
        element: <Navigate to={"/"} />
    }
] */


import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../../hooks";

export const JournalRoutes = () => {
    const { status } = useCheckAuth();

    if (status === 'not-authenticated') {
        return <Navigate to='/auth/login' />
    }
    return <Outlet />;
};
