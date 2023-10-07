import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/context/AuthContext';

export const LoginPage = () => {

  //acceso al context
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {

    //recuperar la ultima ruta
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Aldahir Mayorga');
    navigate(lastPath, {
      replace: true
    });
  }
  return (
    <>

      <div className="container mt-5">
        <h2>LoginPage</h2>
        <hr />

        <button className="btn btn-primary"
          onClick={onLogin}>
          Login
        </button>
      </div>

    </>

  )
}
