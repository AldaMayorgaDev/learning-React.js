import { Fragment } from 'react'
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook  = () => {

    const {/* formState, */onResetForm, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const {username, email, password} = formState;

    
    
  return (
   <Fragment>
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <form >
            <input 
                type="text" 
                className="form-control mt-2" 
                placeholder='Nombre de Usuario'
                name="username" 
                id="inputUserName"
                value= {username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder='tucorreo@correo.com'
                name="email" 
                id="inputUserEmail"
                value= {email}
                onChange={onInputChange}
            />

            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder='Contraseña'
                name="password" 
                id="inputUserPassword"
                value= {password}
                onChange={onInputChange}
            />
            <button onClick ={onResetForm} className="btn btn-primary mt-3">Borrar</button>
        </form>
   </Fragment>
  )
}
