// ** react
import { useMemo } from 'react';
// ** Redux
import { useDispatch, useSelector } from 'react-redux'

// ** React-Router-Dom
import { Link as RouterLink } from 'react-router-dom';

// ** Custom Componentes
import { AuthLayout } from '../layout/AuthLayout';

// ** Componentes Material-ui
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'

// ** Iconos de Material-icons
import { Google, Login } from '@mui/icons-material';
import { useForm } from '../../hooks/useForm';

// ** Thunks
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth/thunks';


const formData = {
    email: '',
    password: ''
}
export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    // ** Dispatchs
    const dispatch = useDispatch();


    // ** Implementacion useForm()
    const { email, password, onInputChange, formState } = useForm(formData);

    const isLoading = useMemo(() => status === 'checking', [status])
    const onSubmit = (e) => {

        e.preventDefault();
        console.log("🚀 ~ onSubmit ~ formState:", formState);

        dispatch(startLoginWithEmailPassword(formState));
    }

    const onGoogleSignIn = () => {
        console.log("🚀 ~ onGoogleSignIn ~ onGoogleSignIn:");
        dispatch(startGoogleSingIn())
    }

    return (
        <>
            <AuthLayout title="Login">
                <form onSubmit={(e) => { onSubmit(e) }} className='animate__animated animate__fadeIn animate__faster'>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                id="correo-textfield"
                                type='email'
                                label="Correo"
                                placeholder='Correo@correo'
                                fullWidth
                                name='email'
                                value={email}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                id="password-textfield"
                                type='password'
                                label="Contraseña"
                                autoComplete="current-password"
                                fullWidth
                                name='password'
                                value={password}
                                onChange={onInputChange}
                            />
                        </Grid>

                        <Grid container sx={{ mt: 1 }} display={!!errorMessage ? '' : 'none'}>
                            <Grid item xs={12} >
                                <Alert severity='error'>{errorMessage}</Alert>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    disabled={isLoading}
                                    variant='contained'
                                    fullWidth
                                    type='submit'
                                >
                                    <Login />
                                    <Typography sx={{ ml: 1 }}>
                                        Login
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isLoading}>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' justifyContent={'end'}>
                            <Link component={RouterLink} color='inherit' to='/auth/register' sx={{ textDecoration: 'none' }}>
                                <Typography >
                                    Crear una cuenta
                                </Typography>
                            </Link>

                        </Grid>
                    </Grid>
                </form>

            </AuthLayout>



        </>
    )
}