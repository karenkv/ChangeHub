import React from "react";

const Login = (props) => {
    return (
        <div className="home-form-parent">
            <div className="home-form-child">
                <form onSubmit={props.login}>
                    <input type="email" id="email" name="email" placeholder="Email"/><br/>
                    <input type="password" id="password" name="password" placeholder="Password"/><br/>
                    <button type="submit" >Login</button>
                </form>
                <p>Don't have an account? <a onClick={props.signup}>Sign up</a></p>
            </div>
        </div>
    )
}

export default Login;