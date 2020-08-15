import React from "react";
import Modal from "react-modal";

const SignPetitions = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.action}
        >
            <button onClick={props.action}>Close</button>
            <h1>Sign Petitions</h1>
        </Modal>
    )
}
export default SignPetitions;