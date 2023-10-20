// ** Redux
import { useDispatch } from "react-redux";
// ** Thunks Auth
import { startLogout } from "../../../store/auth/thunks";
// ** Components Material
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
// ** Icons Material
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

export const NavBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>
                <Grid container
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography variant="h6" noWrap component={'div'}>
                        JournalApp
                    </Typography>
                    <IconButton color='secondary' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}