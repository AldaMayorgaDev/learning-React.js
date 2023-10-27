
// ** Hooks React
import { useEffect, useState } from 'react';
// ** React-big-calendar
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from "date-fns";
// ** Custom Components 
import { CalendarEventBox, CalendarModal, NavBar, FabAddNewEvent, FabDeleteEvent } from "../components/"
import { localizer, getMessagesES } from '../../../helpers';


// ** Custom Hooks
import { useUiStore, useCalendarStore, useAuthStore } from '../../../hooks';




export const CalendarPage = () => {
    const {user}= useAuthStore()
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {

        const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.id);


        const style = {
            backgroundColor: isMyEvent ?'#347CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return {
            style
        }

    }

    const onDoubleClick = (event) => {
        //console.log("🚀 ~ onDoubleClick ~ event:", event)
        openDateModal()
    }

    const onSelect = (event) => {
        //console.log("🚀 ~ onSelect ~ event:", event)
        setActiveEvent(event);
    }
    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView(event)
    }

    useEffect(() => {
        startLoadingEvents()
    }, [])

    return (
        <>
            <NavBar />

            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEventBox
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />

            <CalendarModal />
            <FabAddNewEvent />
            <FabDeleteEvent />

        </>
    )
}