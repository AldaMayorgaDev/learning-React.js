import PropTypes from 'prop-types';
import { userContext } from "./userContext"
import { useState } from 'react';


/* const user = {
  id: 1213123,
  name: 'Aldahir Mayorga',
  email: 'aldahir.mayorga@gmail.com'
} */
export const UserProvider = ({children}) => {
  const [usuario, setUsuario] = useState()
  return (
    <userContext.Provider value={{/* hola: 'Mundo', usuario: user */usuario, setUsuario}}>
        {children}
    </userContext.Provider>
  )
}

UserProvider.propTypes ={
  children: PropTypes.array.isRequired
}