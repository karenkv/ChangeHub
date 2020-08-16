import React from "react";

const Signup = (props) => {
    return (
        <div className="home-form-parent">
            <div className="home-form-child">
                <form onSubmit={props.signup}>
                    <input type="text" id="name" name="name" placeholder="Name" required="required"/><br/>
                    <input type="email" id="email" name="email" placeholder="Email" required="required"/><br/>
                    <input type="text" pattern="[0-9]{10}" id="number" name="number"
                           placeholder="Phone Number" required="required"
                           title="Phone number must be 10 digits with no space or dashes"/><br/>
                    <input type="password" id="password" name="password" placeholder="Password"
                           pattern="[a-zA-Z0-9-_\.]{6,}" required="required"
                           title="Password must be at least 6 characters"/><br/>
                    <input type="text" pattern="[0-9]{5}" id="zip" name="zip" placeholder="Zip Code"
                           required="required"/><br/>
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