import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useContext } from 'react';

export const Navbar = () => {

    // ** Utilizando contexto
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true  //remplaza la rutay evita que se pueda volver atras
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className={`nav-item nav-link text-info`}>
                        {user?.name} {/* el ?. sirve para indicar que si la propiedad es null no continue */}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}>
                        LogOut
                    </button>
                </ul>
            </div>
        </nav>
    )
}