import { useContext } from 'react';
import { userContext } from '../context/userContext';

export const LoginPage = () => {
  const {usuario} = useContext(userContext);
    console.log("🚀 ~ LoginPage ~ usuario:", usuario)
    
    return (
      <>
          <h1>LoginPage</h1>
          <hr />
          <pre>{JSON.stringify(usuario, null, 3)}</pre>
      </>
    )
  }