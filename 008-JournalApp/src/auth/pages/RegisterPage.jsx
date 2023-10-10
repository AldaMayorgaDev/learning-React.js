import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

// ** Componentes Material-ui
import { Grid, Typography, TextField, Button, Link } from '@mui/material';

import { Person } from '@mui/icons-material';
export const RegisterPage = () => {
    return (
        <AuthLayout title='Registro'>
            <form >
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            id="nombre-textfield"
                            type='text'
                            label="Nombre Completo"
                            placeholder='Arthur Morgan'
                            fullWidth
                        />
                    </Grid>

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
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>
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