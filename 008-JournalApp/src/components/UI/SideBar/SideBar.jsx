import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Typography, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component={'nav'}
            sx={{
                width: {
                    sm: drawerWidth
                },
                flexShrink: {
                    sm: 0
                }
            }}
        >
            <Drawer
                variant="permanent" //temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        Aldahir Mayorga
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febero', 'Marzo', 'Abril'].map((mes) => {
                            return (
                                <ListItem key={mes} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>


                                        <Grid container>
                                            <ListItemText primary={mes} />
                                            <ListItemText secondary={'Duis ipsum occaecat eiusmod Lorem sint esse dolore.'} />


                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>

            </Drawer>

        </Box>
    )
}