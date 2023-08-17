import { Outlet } from "react-router-dom";
import {UserProvider} from './context/userProvider';
import { NavBarPrincipal } from "./components/utilities/NavBarPrincipal";


export const MainApp = () => {
  return (
    <UserProvider>

        <NavBarPrincipal/>
        <hr />

        <Outlet /> {/* Renderiza los hijos */}
    </ UserProvider>
  )
}
