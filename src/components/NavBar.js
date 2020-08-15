import React from "react";
import quill from '../assets/quill.png';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-img">
                <img alt="quill icon" src={quill} height="32px" width="32px"/>
            </div>
            <div className="nav-bar-text">
                <p>Home</p>
                <p>About</p>
                <p>Admin</p>
            </div>
        </div>
    )
}

export default NavBar;