import { Link as RouterLink } from 'react-router-dom'
// ** Custom Componentes
import { AuthLayout } from '../layout/AuthLayout';

// ** Componentes Material-ui
import { Grid, Typography, TextField, Button, Link } from '@mui/material'

// ** Iconos de Material-icons
import { Google, Login } from '@mui/icons-material';


export const LoginPage = () => {
    return (
        <>
            <AuthLayout title="Login">
                <form >
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                id="correo-textfield"
                                type='email'
                                label="Correo"
                                placeholder='Correo@correo'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                id="password-textfield"
                                type='password'
                                label="Contraseña"
                                fullWidth
                            />
                        </Grid>
                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button variant='contained' fullWidth>
                                    <Login />
                                    <Typography sx={{ ml: 1 }}>
                                        Login
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant='contained' fullWidth>
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