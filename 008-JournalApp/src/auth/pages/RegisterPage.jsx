// ** React imports
import { useMemo, useState } from 'react';

// ** react redux
import { useDispatch, useSelector } from 'react-redux';

// ** react-router-dom import
import { Link as RouterLink } from 'react-router-dom'

// ** Layouts imports
import { AuthLayout } from "../layout/AuthLayout"

// ** Components Material-ui
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';

import { Person } from '@mui/icons-material';


// ** Custom Hooks
import { useForm } from '../../hooks/useForm';

// ** thunks
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';



const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
    password: [value => value.length >= 6, 'El password debe tener más de 6 caracteres'],
    displayName: [value => value.length >= 3, 'El nombre es obligatorio y debe tenr al menos 3 letras'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    // ** Implementacion useForm()
    const { displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    //console.log(displayNameValid)
    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return
        console.log("🚀 ~ onSubmit ~ formState:", formState);
        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title='Registro'>
            <form onSubmit={(e) => onSubmit(e)} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            id="nombre-textfield"
                            type='text'
                            label="Nombre Completo"
                            placeholder='Arthur Morgan'
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            id="correo-textfield"
                            type='email'
                            label="Correo"
                            placeholder='Correo@correo'
                            fullWidth
                            value={email}
                            name='email'
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            id="password-textfield"
                            type='password'
                            label="Contraseña"
                            fullWidth
                            value={password}
                            name='password'
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} >
                            <Button variant='contained' fullWidth type='submit' disabled={isCheckingAuthentication}>
                                <Person />
                                <Typography sx={{ ml: 1 }}>
                                    Crear Cuenta
                                </Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent={'end'}>
                        <Typography sx={{ mr: 1, fontWeight: 'bold' }}>
                            ¿Ya tienes cuenta?
                        </Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login' sx={{ textDecoration: 'none' }}>
                            <Typography >
                                Ingresar
                            </Typography>
                        </Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}