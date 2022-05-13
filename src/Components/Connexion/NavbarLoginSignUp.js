import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const NavbarLoginSignUp = () => {
  return (
    <nav id="nav">
    <Link to="/"><img src={logo} alt='logo'/></Link>
    <div  className="NavBtn">
      <Link to="/LoginSignup"><button className="SignUp">Sign Up</button></Link>
      <Link to="/LoginSignup"><button className="Login">Login</button></Link>
      </div>
  </nav>
  )
}

export default NavbarLoginSignUp
