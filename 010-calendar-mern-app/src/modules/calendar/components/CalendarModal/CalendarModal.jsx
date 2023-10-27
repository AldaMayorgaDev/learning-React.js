// ** React Hooks
import { useState } from 'react';

// ** React Modal
import Modal from 'react-modal';

// ** Style Custom Modal
import './CalendarModal.css';
import { FormModal } from './FormModal/FormModal';

// ** Custom Hooks
import { useUiStore } from '../../../../hooks';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();

    const onCloseModal = () => {
        closeDateModal()
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className={'modal'}
            overlayClassName={'modal-fondo'}
            closeTimeoutMS={200}

        >

            <FormModal />
        </Modal>
    )
}