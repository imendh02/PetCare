import React, { useEffect, useState } from 'react'
import NavbarLoginSignUp from './NavbarLoginSignUp';
import './LoginSignup.css';
import {Link, useNavigate} from "react-router-dom";
import {auth,logInWithEmailAndPassword,registerWithEmailAndPassword,} from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useNavigate();
    const navigate = useNavigate();
    const register = () => {
        if (password !== confirmPassword) {alert("Confirm Password is invalide");}
        else {
        registerWithEmailAndPassword(name, email, password);}
        if (!name) alert("Name is required !");
        if (!email) alert("Email is required !");
        if (!password) alert("Password is required !");
        if (!confirmPassword) alert("Confirm Password is required !");
        if ((name) && (email) && (password) && (confirmPassword)) {
            registerWithEmailAndPassword(name, email, password);
        }
      };
    useEffect(() => {
      if (loading) return;
      if (user) history("/");
    }, [user, loading]);
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/");
      }, [user, loading]);
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
                            <input type="text" class="form__input" placeholder="Username or Email adress" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label for="name" class="form__label">Username or Email adress</label>
                        </div>
                        <div class="form__group">
                            <input type="password" class="form__input" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <button className="btn third" onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
                        <Link to="/ForgotPassword"><span>Forgot Password?</span></Link>
                    </form>
                </div>
                <div class="signup">
                        <label for="chk" className="label" aria-hidden="true">Sign Up</label>
                        <div class="form__group">
                            <input type="text" class="form__input" placeholder="Username" required="" value={name} onChange={(e) => setName(e.target.value)}/>
                            <label for="name" class="form__label">Username</label>
                        </div>
                        <div class="form__group">
                            <input type="email" class="form__input" placeholder="Email adress" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label for="name" class="form__label">Email adress</label>
                        </div>
                        <div class="form__group">
                            <input type="password" class="form__input" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <div class="form__group">
                            <input type="password" class="form__input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required=""/>
                            <label for="name" class="form__label">Confirm Password</label>
                        </div>
                        <div className="confirmation">
                        <label class="checkbox bounce">
                            <input type="checkbox" />
                            <svg className="svg" viewBox="0 0 21 21">
                                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                            </svg>
                        </label>
                        <label className="agree" required>I agree to the Terms of Service and Privacy Policy</label>
                        </div>
                        <button className="btn third" onClick={register}>Sign up</button>
                </div>
            </div>
  </div>
    </div>
  )
}

export default LoginSignup