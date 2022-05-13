import React from 'react'
import NavbarLoginSignUp from './NavbarLoginSignUp';
import './LoginSignup.css';
import {Link} from "react-router-dom";
const LoginSignup = () => {
  return (
    <div className="log">
        <NavbarLoginSignUp />
        <div className="loginsignup">
            <div class="main">  	
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div class="login">
                    <form>
                        <label for="chk" className="label" aria-hidden="true">Login</label>
                        <div class="form__group">
                            <input type="text" class="form__input" id="name" placeholder="Username or Email adress" required="" />
                            <label for="name" class="form__label">Username or Email adress</label>
                        </div>
                        <div class="form__group">
                            <input type="password" class="form__input" id="name" placeholder="Password" required="" />
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <button className="btn third">Login</button>
                        <Link to="/ForgotPassword"><span>Forgot Password?</span></Link>
                    </form>
                </div>
                <div class="signup">
                    <form>
                        <label for="chk" className="label" aria-hidden="true">Sign Up</label>
                        <div class="form__group">
                            <input type="text" class="form__input" id="name" placeholder="Username" required="" />
                            <label for="name" class="form__label">Username</label>
                        </div>
                        <div class="form__group">
                            <input type="email" class="form__input" id="name" placeholder="Email adress" required="" />
                            <label for="name" class="form__label">Email adress</label>
                        </div>
                        <div class="form__group">
                            <input type="password" class="form__input" id="name" placeholder="Password" required="" />
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <div class="form__group">
                            <input type="password" class="form__input" id="name" placeholder="Confirm Password" required="" />
                            <label for="name" class="form__label">Confirm Password</label>
                        </div>
                        <div className="confirmation">
                        <label class="checkbox bounce">
                            <input type="checkbox" />
                            <svg className="svg" viewBox="0 0 21 21">
                                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                            </svg>
                        </label>
                        <label className="agree">I agree to the Terms of Service and Privacy Policy</label>
                        </div>
                        <button className="btn third">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup