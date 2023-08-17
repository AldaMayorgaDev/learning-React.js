import {Navigate, createBrowserRouter} from "react-router-dom";
import {AboutPage, HomePage, LoginPage} from '../pages';
import { MainApp } from "../MainApp";


//Definiendo rutas
export const router = createBrowserRouter([
/* Esta forma tambien funciona pero este codigo es cuando mainapp y los demas son hermanos    
{
        path: "/",
        element:  <HomePage/>
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/*",
        element: <Navigate to ='/' />
    }
    */

    {
        path: "/",
        element: <MainApp />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "login",
            element: <LoginPage />
          },
          {
            path: "about",
            element: <AboutPage />,
        },
        {
            path: "/*",
            element: <Navigate to ='/' />
        }
        ]
      },
]);