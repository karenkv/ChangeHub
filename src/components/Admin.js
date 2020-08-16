import React, {Component} from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import admin from "../assets/admin.svg";
import adminLogin from '../assets/adminLogin.svg';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    handleLogin = (event) => {
        event.preventDefault()
        this.setState({
            loggedIn: true
        })
    }

    handleLogout = () => {
        this.props.history.push("/")
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div className={"App"}>
                    <NavBar loggedIn={true} action={this.handleLogout}/>
                    <div className={"header"}>
                        <img alt={"Admin Portal"} src={admin}/>
                    </div>
                    <div className="petitions">
                        <div className="petition">
                            <Card name={"Save the USPS"}
                                  description="The United States Postal Service employs over 500,000 people and is the #1 employer of veterans."/>
                            <div className="decision">
                                <button className={"approve"}>Approve</button>
                                <button className={"reject"}>Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={"App"}>
                    <NavBar loggedIn={false}/>
                    <img src={adminLogin} className={"admin-login-svg"}/>
                    <div className={"modal-form"}>
                        <h1>ChangeHub</h1>
                        <h2><i>Admin Portal</i></h2>
                        <form onSubmit={this.handleLogin}>
                            <input type={"text"} placeholder={"Username"}/>
                            <input type={"password"} placeholder={"Password"}/>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default Admin;