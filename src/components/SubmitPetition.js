import React, {useState} from "react";
import Modal from 'react-modal';

const SubmitPetition = (props) => {
    const [petitionType, setPetitionType] = useState(null);
    const [typeSelected, setTypeSelected] = useState(false);

    const handleSelectText = () => {
        setPetitionType("text");
        setTypeSelected(true);
    }

    const handleSelectEmail = () => {
        setPetitionType("email");
        setTypeSelected(true);
    }

    const handleSelectOnline = () => {
        setPetitionType("online");
        setTypeSelected(true);
    }

    const handleGoBack = () => {
        setPetitionType(null);
        setTypeSelected(false);
    }

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.action}
            shouldCloseOnOverlayClick={false}
            className="modal"
        >
            <h3 onClick={props.action} className="close-button">X</h3>
            <div className="modal-form">
                {typeSelected ? <h3 onClick={handleGoBack}>←</h3> :
                    <h1>Petition Submission Type</h1>}
                {typeSelected ?
                    <div>
                        {petitionType === "text" ? <div>Text</div> :
                    <div>{petitionType === "email" ? <div>Email</div> :
                    <div>Online</div>}</div>}</div> :
                    <div>
                        <button onClick={handleSelectText}>Text</button>
                        <button onClick={handleSelectEmail}>Email</button>
                        <button onClick={handleSelectOnline}>Online</button>
                    </div>
                }
            </div>
        </Modal>
    )
}
export default SubmitPetition;