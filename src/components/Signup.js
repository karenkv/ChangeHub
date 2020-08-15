import React from "react";

const Signup = (props) => {
    return (
        <div className="home-form-parent">
            <div className="home-form-child">
                <form onSubmit={props.signup}>
                    <input type="text" id="name" name="name" placeholder="Name"/><br/>
                    <input type="email" id="email" name="email" placeholder="Email"/><br/>
                    <input type="text" pattern="[0-9]{10-11}" id="number" name="number" placeholder="Phone Number"/><br/>
                    <input type="password" id="password" name="password" placeholder="Password"/><br/>
                    <input type="text" pattern="[0-9]{5}" id="zip" name="zip" placeholder="Zip Code"/><br/>
                    <div className="terms-parent">
                        <div className="terms-child">
                            <input type="checkbox" id="terms" name="terms"/>
                            <p>✓</p>
                            <label htmlFor="terms"><span>I agree to the Terms and Conditions and Privacy Policy.</span></label>
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Have an account? <a onClick={props.login}>Login</a></p>
            </div>
        </div>
    )
}

export default Signup;