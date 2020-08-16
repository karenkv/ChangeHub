import React, {useState} from "react";
import Modal from "react-modal";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const SignPetitions = (props) => {
    const dCategories = ["BlackLivesMatter","Yemen Crisis","Save USPS",
        "Help Lebanon","Free Palestine", "Stand with Hong Kong","Junk Terror Bill"];

    const categories = props.categories;

    const [selectedCategories, setCategories] = useState([]);
    const [signed, setSigned] = useState(false);

    const handleChange = (event) => {
        setCategories(event.target.value);
    }

    const handleSignPetition = (event) => {
        event.preventDefault();
        fetch("/signPetitions", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                categories: selectedCategories
            })
        }).then(async response => {
            const data = await response.json();
            if (response.ok) {
                setSigned(true);
            }
        })
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
                {signed ?
                    <h1>Petition signed!</h1> :
                    <h1>Petition Signing Form</h1>
                }
                {signed ?
                    <p>You may now close this popup</p> :
                    <form onSubmit={handleSignPetition}>
                        <p>Select all petition categories you'd like to sign:</p>
                        <FormControl className="category-select">
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                multiple
                                value={selectedCategories}
                                onChange={handleChange}
                                input={<Input id="category"/>}
                                renderValue={(selected) => (
                                    <div className="chips">
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className="chip"/>
                                        ))}
                                    </div>
                                )}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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
                }
            </div>
        </Modal>
    )
}
export default SignPetitions;