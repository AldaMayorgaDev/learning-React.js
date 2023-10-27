import { addHours, differenceInSeconds } from "date-fns"
import { useEffect, useMemo, useState } from "react"

// ** Date-picker
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

// ** SweetAlert 2
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// ** Style 
import './FormModal.css'

// ** Custom Hook
import { useCalendarStore, useUiStore } from "../../../../../hooks";


registerLocale('es', es);
export const FormModal = () => {

    const { activeEvent, startSavingEvent } = useCalendarStore();
    const { closeDateModal } = useUiStore();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const titleClass = useMemo(() => {
        if (!formSubmitted) return '';
        //console.log("🚀 ~ titleClass ~ formValues.title.length:", formValues.title.length)
        return (formValues.title.trim().length > 0) ? 'is-valid' : 'is-invalid';


    }, [formValues.title, formSubmitted]);

    useEffect(() => {
        if (activeEvent !== 'null') {
            setFormValues({ ...activeEvent });
        }

    }, [activeEvent])

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,

            [target.name]: target.value,
        })
        //console.log("🚀 ~ onInputChanged ~ formValues:", formValues)
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event,
        })
    }

    const onSubmit = async (e) => {

        e.preventDefault();
        setFormSubmitted(true)
        //console.log('formValues', formValues);
        const difference = differenceInSeconds(formValues.end, formValues.start);

        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas Incorrectas', 'Revisar las fechas ingresadas', 'error')
            return;
        }
        if (formValues.title.trim().length <= 0) return;

        //console.log('formValues', formValues);

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmitted(false);


        //TODO: Remover errores
    }
    return (
        <>
            <h1 className="text-right"> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label className="form-label">Fecha y hora inicio</label>
                    <div className="customDatePickerWidth">
                        <DatePicker
                            selected={formValues.start}
                            onChange={(event) => onDateChanged(event, 'start')}
                            className="form-control"
                            dateFormat={'Pp'}
                            showTimeSelect
                            locale={'es'}
                            timeCaption="Hora"
                        />
                    </div>

                </div>

                <div className="form-group mb-2">
                    <label className="form-label">Fecha y hora fin</label>
                    <div className="customDatePickerWidth">
                        <DatePicker
                            minDate={formValues.start}
                            selected={formValues.end}
                            onChange={(event) => onDateChanged(event, 'end')}
                            className="form-control"
                            dateFormat={'Pp'}
                            showTimeSelect
                            locale={'es'}
                            timeCaption="Hora"
                        />
                    </div>
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label className="form-label">Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form >
        </>
    )
}