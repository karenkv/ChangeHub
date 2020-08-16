import React, {useState} from "react";
import Modal from 'react-modal';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

const SubmitPetition = (props) => {
    const dCategories = ["BlackLivesMatter","Yemen Crisis","Save USPS",
    "Help Lebanon","Free Palestine", "Stand with Hong Kong","Junk Terror Bill"];
    const categories = props.categories;

    const [petitionType, setPetitionType] = useState(null);
    const [typeSelected, setTypeSelected] = useState(false);
    const [category, setCategory] = useState(null);
    const [submitted, setSubmitted] = useState(false);

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

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    const categorySelectComponent = () => {
        return (
            <FormControl className="category-select">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                    labelId="category-label"
                    id="category"
                    value={category}
                    onChange={handleChange}
                    input={<Input id="category" />}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
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
                {typeSelected ?
                    <div>{submitted ?
                        <h1>Petition Submitted!</h1> :
                        <h3 onClick={handleGoBack}>←</h3>
                        }</div> :
                    <div>
                        {submitted ?
                            <h1>Petition Submitted!</h1> :
                            <h1>Petition Submission Type</h1>
                        }
                    </div>
                }
                {submitted ? <p>You may now close this popup</p> :
                    <div>{typeSelected ?
                        <div>
                            {petitionType === "text" ?
                                <div>
                                    <h1>Text Petition</h1>
                                    <p><i>Example: text “JUSTICE” to 668366</i></p>
                                    <form onSubmit={handleSubmit}>
                                        {categorySelectComponent()}
                                        <input type="text" placeholder={"Number"}/>
                                        <input type="text" placeholder={"Message"}/>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div> :
                                <div>{petitionType === "email" ?
                                    <div>
                                        <h1>Email Petition</h1>
                                        <p><i>Example: email template to senator</i></p>
                                        <form onSubmit={handleSubmit}>
                                            {categorySelectComponent()}
                                            <input type="text" placeholder="Email"/>
                                            <input type="text" placeholder="Subject"/>
                                            <input type="text" placeholder="Message"/>
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div> :
                                    <div>
                                        <h1>Online Petition</h1>
                                        <p><i>Example: change.org link</i></p>
                                        <form onSubmit={handleSubmit}>
                                            {categorySelectComponent()}
                                            <input type="text" placeholder={"Link"}/>
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                }</div>
                            }</div> :
                        <div>
                            <button onClick={handleSelectText}>Text</button>
                            <button onClick={handleSelectEmail}>Email</button>
                            <button onClick={handleSelectOnline}>Online</button>
                        </div>
                    }</div>
                }
            </div>
        </Modal>
    )
}
export default SubmitPetition;