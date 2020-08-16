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
            categories: [],
            signed: []
        }
    }

    componentDidMount() {
        this.handleGetSignedPetitions();
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
        this.handleGetSignedPetitions();
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

    handleGetSignedPetitions = () => {
        fetch('usersPetitions', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            const data = await response.json();
            if (response.ok) {
                if(data !== undefined) {
                    this.setState({
                        signed: Object.keys(data).map((petition) =>
                            <Card name={data[petition].name} description={data[petition].description}/>)
                        })
                }
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
                    {/*<Card name={"Tell Congress: Pass the COVID-19 Compassion " +*/}
                    {/*    "and Martha Wright Prison Phone Justice Act."}*/}
                    {/*    description={"Keep incarcerated people and their families " +*/}
                    {/*    "connected, now and forever."}*/}
                    {/*/>*/}
                    {this.state.signed}
                </div>
            </div>
        )
    }
}

export default Dashboard;