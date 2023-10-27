import { useSelector, useDispatch } from "react-redux"
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } from "../store";
import { calendarApi } from '../apis/'
import { convertEventsToDateEvents } from "../helpers";
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {



        try {
            if (calendarEvent.id) {
                //Actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);

                dispatch(onUpdateEvent({ ...calendarEvent, user }))
                return;

            }

            //creando
            const { data } = await calendarApi.post('/events', calendarEvent)
            //console.log("🚀 ~ startSavingEvent ~ data:", data)
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }))
            //console.log("🚀 ~ startSavingEvent ~ calendarEvent:", calendarEvent)
        } catch (error) {
            //console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }



    }

    const startDeletingEvent = async () => {


        try {

            //elimiando
            await calendarApi.delete(`/events/${activeEvent.id}`);

            dispatch(onDeleteEvent())


        } catch (error) {
            //console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }


    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));
            console.log("🚀 ~ startLoadingEvents ~ events:", events)

        } catch (error) {
            console.log('ERROR cargando eventos', error)
        }

    }
    return {
        // * Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent?.id,

        // * Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}