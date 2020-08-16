import React from "react";
import SignPetitions from "./SignPetitions";
import SubmitPetition from "./SubmitPetition";
import Card from "./Card.js"
import NavBar from "./NavBar.js"
import dashboard from '../assets/dashboard.svg';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signPetitionsIsOpen: false,
            submitPetitionIsOpen: false,
            categories: []
        }
    }

    componentDidMount() {
        this.handleGetCategories();
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

    handleLogout = () => {
        fetch('/logout', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            const data = await response.json();
            if (response.ok) {
                alert("User successfully logged out!");
                this.props.history.push("/");
            }
        });
    }

    handleGetCategories = () => {
        fetch('/categories', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            const data = await response.json();
            if (response.ok) {
                this.setState({
                    categories: data.categories
                })
            }
        })
    }

    render() {
        return (
            <div className="App">
                <NavBar loggedIn={true} history={this.props.history} action={this.handleLogout}/>
                <div className="header">
                    <img alt="ChangeHub Dashboard" src={dashboard}/>
                    <div className="buttons">
                        <button onClick={this.handleOpenSignPetitions}>Sign Petitions</button>
                        <button onClick={this.handleOpenSubmitPetition}>Submit a Petition</button>
                        <SignPetitions isOpen={this.state.signPetitionsIsOpen}
                                       action={this.handleCloseSignPetitions}
                                       categories={this.state.categories}
                        />
                        <SubmitPetition isOpen={this.state.submitPetitionIsOpen}
                                        action={this.handleCloseSubmitPetition}
                                        categories={this.state.categories}
                        />
                    </div>
                    <div className="header-text">
                        <h1>ChangeHub</h1>
                        <h1>Signed Petitions</h1>
                    </div>
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