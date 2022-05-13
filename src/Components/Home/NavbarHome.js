import React from 'react'
import {RiSearchLine} from "react-icons/ri";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import "./NavbarHome.css";
const NavbarHome = () => {
  return (
    <nav id="nav">
      <Link to="/"><img src={logo} alt='logo'/></Link>
      <div className="NavMenu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/">Services Request</a></li>
        <li><a href="#Service">Services</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      </div>
      <div  className="NavBtn">
        <RiSearchLine size='2.5em'/>
        <div>
        <Link to="/LoginSignup"><button className="SignUp">Sign Up</button></Link>
        <Link to="/LoginSignup"><button className="Login">Login</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarHome