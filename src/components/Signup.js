import React from "react";

const Signup = (props) => {
    return (
        <div className="home-form-parent">
            <div className="home-form-child">
                <form onSubmit={props.signup}>
                    <input type="text" id="name" name="name" placeholder="Name"/><br/>
                    <input type="email" id="email" name="email" placeholder="Email"/><br/>
                    <input type="password" id="password" name="password" placeholder="Password"/><br/>
                    <input type="text" pattern="[0-9]{5}" id="zip" name="zip" placeholder="Zip Code"/><br/>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Have an account? <a onClick={props.login}>Login</a></p>
            </div>
        </div>
    )
}

export default Signup;