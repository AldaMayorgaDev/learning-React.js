// ** Redux
import { useSelector } from "react-redux";
// ** Components Material
import { Box, Drawer, Typography, Toolbar, Divider, List, } from "@mui/material";
// ** Custom Components
import { SideBarItem } from "../index";
export const SideBar = ({ drawerWidth = 240 }) => {
    const { notes } = useSelector(state => state.journal);
    const { displayName } = useSelector(state => state.auth);
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
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map((note) => (
                            <SideBarItem note={note} key={note.id} imagesUrls={note.imagesUrls} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}