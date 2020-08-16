import React from "react";
import quill from '../assets/quill.png';

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-img">
                <img alt="quill icon" src={quill} height="32px" width="32px"/>
            </div>
            <div className="nav-bar-text">
                <p>Home</p>
                <p>About</p>
                {props.loggedIn ?
                    <p><a>Logout</a></p>:
                    <p><a>Admin</a></p>}
            </div>
        </div>
    )
}

export default NavBar;