import React, {Component} from "react";
import NavBar from "./NavBar";
import Info from "./Info";
import Login from "./Login";
import Signup from "./Signup";
import history from "../history.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            loggedIn: false
        }
    }

    handleLogin = () => {
        this.setState({
            loggedIn: true
        });
        history.push("/home");
    }

    handleSignup = () => {
        this.handleSwitch();
    }

    handleSwitch = () => {
        this.state.showLogin ?
            this.setState({
                showLogin: false
            }) : this.setState({
                showLogin: true
            })
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <Info/>
                {this.state.showLogin ?
                    <Login login={this.handleLogin} signup={this.handleSwitch}/> :
                    <Signup signup={this.handleSignup} login={this.handleSwitch}/>}
            </div>
        );
    }
}

export default Home;