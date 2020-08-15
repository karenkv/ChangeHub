import React from "react";
import Modal from 'react-modal';

const SubmitPetition = (props) => {

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.action}
        >
            <button onClick={props.action}>Close</button>
            <h1>Submit a Petition</h1>
        </Modal>
    )
}
export default SubmitPetition;