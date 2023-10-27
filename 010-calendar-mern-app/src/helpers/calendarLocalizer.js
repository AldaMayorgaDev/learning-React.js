
// ** React-big-calendar
import { dateFnsLocalizer } from 'react-big-calendar';
import { parse, startOfWeek, getDay } from "date-fns";
import format from 'date-fns/format'
import enUS from 'date-fns/locale/en-US'
import esES from 'date-fns/locale/es'


const locales = {
    'en-US': enUS,
    'es': esES,
}

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: locales,
});