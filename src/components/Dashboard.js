import React from "react";
import SignPetitions from "./SignPetitions";
import SubmitPetition from "./SubmitPetition";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signPetitionsIsOpen: false,
            submitPetitionIsOpen: false
        }
    }

    handleOpenSignPetitions = () => {
        this.setState({
            signPetitionsIsOpen: true
        })
    }

    handleCloseSignPetitions = () => {
        this.setState({
            signPetitionsIsOpen: false
        })
    }

    handleOpenSubmitPetition = () => {
        this.setState({
            submitPetitionIsOpen: true
        })
    }

    handleCloseSubmitPetition = () => {
        this.setState({
            submitPetitionIsOpen: false
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleOpenSignPetitions}>Sign Petitions</button>
                <button onClick={this.handleOpenSubmitPetition}>Submit a Petition</button>
                <SignPetitions isOpen={this.state.signPetitionsIsOpen} action={this.handleCloseSignPetitions}/>
                <SubmitPetition isOpen={this.state.submitPetitionIsOpen} action={this.handleCloseSubmitPetition}/>
            </div>
        );
    }
}

export default Dashboard;