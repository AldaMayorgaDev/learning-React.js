import { useSelector, useDispatch } from 'react-redux';
import { onOpenDateModal, onCloseDateModal } from '../store';
export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isDateModalOpen } = useSelector(state => state.ui);


    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }


    return {
        //* Properties
        isDateModalOpen,

        //* Methods 
        openDateModal,
        closeDateModal,

    }
}