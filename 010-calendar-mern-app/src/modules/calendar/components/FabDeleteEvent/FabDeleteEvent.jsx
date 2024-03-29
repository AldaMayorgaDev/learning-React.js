
import { useCalendarStore, useUiStore } from "../../../../hooks"

export const FabDeleteEvent = () => {

    const { isDateModalOpen } = useUiStore();
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();
    }
    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
            style={{ display: (hasEventSelected && !isDateModalOpen) ? '' : 'none' }}
        >
            <i className="fas fa-trash-alt" />
        </button>
    )
}