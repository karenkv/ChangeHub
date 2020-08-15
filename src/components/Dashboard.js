import React from "react";
import SignPetitions from "./SignPetitions";
import SubmitPetition from "./SubmitPetition";
import Card from "./Card.js"
import NavBar from "./NavBar.js"

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
                <NavBar/>
                <div className="header">
                    <div className="actions">
                        <h1 className="whole-flex">ChangeHub</h1>
                        <div className="buttons">
                            <button onClick={this.handleOpenSignPetitions}>Sign Petitions</button>
                            <button onClick={this.handleOpenSubmitPetition}>Submit a Petition</button>
                            <SignPetitions isOpen={this.state.signPetitionsIsOpen} action={this.handleCloseSignPetitions}/>
                            <SubmitPetition isOpen={this.state.submitPetitionIsOpen} action={this.handleCloseSubmitPetition}/>
                        </div>
                    </div>
                    <h1>Signed Petitions</h1>
                </div>
                <div className="petitions">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>   
            </div>
        )
    }
}

export default Dashboard;