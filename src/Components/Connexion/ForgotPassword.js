import React from 'react'
import NavbarLoginSignUp from './NavbarLoginSignUp';
import {FaLock} from 'react-icons/fa';
import './ForgotPassword.css';
import {Link} from "react-router-dom";
const ForgotPassword = () => {
  return (
      <>
    <div id="fp">
        <NavbarLoginSignUp />
        <div className="forgotpsw">
        <h1><FaLock/></h1>
            <h1>Forgot Password?</h1>
            <p>You can reset your password here.</p>
            <form>
                <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Email adress"/>
                    <label for="name" class="form__label">Email adress</label>
                </div>
                <Link to="/ForgotPasswordReset"><button className="btn third">Reset Password</button></Link>
            </form>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword