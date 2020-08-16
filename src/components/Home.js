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
            loggedIn: false
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            })
        }).then(async response => {
            const data = await response.json();
            if (response.ok) {
                alert("User successfully logged in!");
                this.setState({
                    loggedIn: true
                })
                this.props.history.push('/home');
            }
        });
    }

    handleSignup = (event) => {
        event.preventDefault();
        fetch('/signup', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
                zip: event.target.zip.value,
                number: event.target.number.value
            })
        }).then(async response => {
            const data = await response.json();
            if (response.ok) {
                alert("User successfully created!");
                this.handleSwitch();
            }
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
                <NavBar loggedIn={this.state.loggedIn} history={this.props.history}/>
                <Info/>
                {this.state.showLogin ?
                    <Login login={this.handleLogin} signup={this.handleSwitch}/> :
                    <Signup signup={this.handleSignup} login={this.handleSwitch}/>}
            </div>
        );
    }
}

export default Home;