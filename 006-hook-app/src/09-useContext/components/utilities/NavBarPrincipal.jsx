import { Link, NavLink } from "react-router-dom";

export const NavBarPrincipal = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-4">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                About
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
