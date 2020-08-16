import React from "react";
import quill from '../assets/quill.png';

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-img">
                <img alt="quill icon" src={quill} height="32px" width="32px"/>
            </div>
            <div className="nav-bar-text">
                <p onClick={() => {props.loggedIn ? props.history.push("/home") : props.history.push("")}}>Home</p>
                <p>About</p>
                {props.loggedIn ?
                    <p onClick={props.action}>Logout</p>:
                    <p onClick={() => props.history.push("/admin")}>Admin</p>
                }
            </div>
        </div>
    )
}

export default NavBar;