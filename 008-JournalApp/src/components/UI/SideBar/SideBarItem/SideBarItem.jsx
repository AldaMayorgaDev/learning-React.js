// ** React Hooks
import { useMemo } from "react";
// ** Redux
import { useDispatch } from "react-redux";
// ** Thunks
import { setActiveNote } from "../../../../store/journal";
// ** Components Material
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
// ** Icons Material
import { TurnedInNot } from "@mui/icons-material";
export const SideBarItem = ({ note, imagesUrls = [] }) => {
    const { body, date, title, id } = note;
    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch(setActiveNote({ ...note, imagesUrls }))
    }
    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);


    return (
        <ListItem disablePadding onClick={onClickNote}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                    <ListItemText secondary={date} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}