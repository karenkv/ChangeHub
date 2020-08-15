import React, {Component} from "react";
import NavBar from "./NavBar";
import Info from "./Info";
import Login from "./Login";
import Signup from "./Signup";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            loggedIn: false,
            signedUp: false
        }
    }

    handleLogin = () => {
        this.setState({
            loggedIn: true
        })
    }

    handleSignup = () => {
        this.setState({
            signedUp: true
        })
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