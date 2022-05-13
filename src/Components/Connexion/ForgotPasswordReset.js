import React from 'react'
import NavbarLoginSignUp from './NavbarLoginSignUp';
import {FaLock} from 'react-icons/fa';
import './ForgotPassword.css';

const ForgotPasswordReset = () => {
  return (
    <div id="fp">
    <NavbarLoginSignUp />
    <div className="forgotpsw">
    <h1><FaLock/></h1>
        <h1>Forgot Password?</h1>
        <p>You can reset your password here.</p>
        <form>
            <div class="form__group">
                <input type="password" class="form__input" id="name" placeholder="New Password"/>
                <label for="name" class="form__label">New Password</label>
            </div>
            <div class="form__group">
                <input type="password" class="form__input" id="name" placeholder="Confirm Password"/>
                <label for="name" class="form__label">Confirm Password</label>
            </div>
            <button className="btn third">Save</button>
        </form>
    </div>
</div>
  )
}

export default ForgotPasswordReset