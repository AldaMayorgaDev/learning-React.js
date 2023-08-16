import { Fragment, useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Aldahir',
        email: 'Aldahir@gmail.com',
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {value, name} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    //Este useEffect solo se ejecuta una vez, cuando se renderiza el componente por 1ra vez
    useEffect(() => {
            //console.log('useEffect called')
        },[]
    );

    //Este useEffect se ejecuta cada vez que el estado del formulario cambia.
    useEffect(() => {
        //console.log('formState Changed')
    }, [formState]);


    //Este useEffect solo se ejecuta cuando el estado de email cambia.
    useEffect(() => {
       // console.log('email changed')
    }, [email]);
    
    
  return (
   <Fragment>
        <h1>Formulario Simple</h1>
        <hr />
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

        {
            //Si esl username es igual a Aldahir, si la condicion se cumple debe mostrar Message
           (username === 'Aldahir') && <Message/>
        }
   </Fragment>
  )
}
