import React from "react";
import Modal from "react-modal";
import Select from "react-select";

const SignPetitions = (props) => {
    const dCategories = [
            {value: "blm", label: "BlackLivesMatter"},
            {value: "yemen", label:"Yemen Crisis"},
            {value: "usps", label: "Save USPS"},
            {value: "lebanon", label: "Help Lebanon"},
            {value: "palestine", label: "Free Palestine"},
            {value: "hk", label: "Stand with Hong Kong"},
            {value: "philippines", label: "Junk Terror Bill"}
        ];

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.action}
            shouldCloseOnOverlayClick={false}
            className="modal"
        >
            <h3 onClick={props.action} className="close-button">X</h3>
            <div className="modal-form">
                <h1>Petition Signing Form</h1>
                <form>
                    <p>Select all petition categories you'd like to sign:</p>
                    <div className="category-select">
                        <Select isMulti options={dCategories}/>
                    </div>
                    <p>Select all petition categories you'd like to sign:</p>
                    <div className="type-select">
                        <div>
                            <input type="checkbox" id="text" name="text"/>
                            <label htmlFor="text">Text</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="online">Online</label>
                        </div>
                    </div>
                    <div className="confirmation">
                        <div>
                            <input type="checkbox"/>
                            <label>I confirm that the user submitting this form is myself.</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>By clicking “Sign,” I grant ChangeHub permission to sign on my behalf.</label>
                        </div>
                    </div>
                    <button type="submit">Sign</button>
                </form>
            </div>
        </Modal>
    )
}
export default SignPetitions;