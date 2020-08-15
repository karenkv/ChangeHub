import React from "react";
import balance from "../assets/balance.svg";
const Info = () => {
    return (
        <div className="info">
            <img alt="balance line drawing" src={balance}/>
            <h1>ChangeHub</h1>
            <p>Sign petitions, email your representatives, <br/>and text to petitions all in one place</p>
        </div>
    )
}

export default Info;