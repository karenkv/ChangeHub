import React, {Component} from "react";
import NavBar from "./NavBar";
import Card from "./Card";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className="header">
                    <div className="actions">
                        <h1 className="whole-flex">ChangeHub</h1>
                        <div className="buttons">
                            <button>Sign Petitions</button>
                            <button>Submit Petitions</button>
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
        );
    }
}

export default Dashboard;