// ** React Router Dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
// ** Custom Components
import { CheckingAuth } from './ui';
// ** Custom Hooks
import { useCheckAuth } from "./hooks";


export const JournalApp = () => {
    const status = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <RouterProvider router={router} />
    );
};