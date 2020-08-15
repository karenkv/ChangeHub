import React from "react";
import Modal from 'react-modal';

const SubmitPetition = (props) => {

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.action}
            shouldCloseOnOverlayClick={false}
            className="modal"
        >
            <h3 onClick={props.action} className="close-button">X</h3>
            <div className="modal-form">
                <h1>Petition Type</h1>
            </div>
        </Modal>
    )
}
export default SubmitPetition;