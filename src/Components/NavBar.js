import React from 'react'
import {RiSearchLine} from "react-icons/ri";
import logo from "../images/logo2.svg";
import {Link} from "react-router-dom";
import "../Components/NavBar.css"
const NavBar = () => {
  return (
    <nav id="navbar">
    <div className="NavbarMenu">
    <ul>
      <li className="logo2"><Link to="/"><img src={logo} alt='logo'/></Link></li>
      <li><a href="/">Our Services</a></li>
      <li><a href="/">Become a Pet Sitter</a></li>
      <li><a href="/">Request Service</a></li>
    </ul>
    </div>
    <div  className="NavbarBtn">
      <RiSearchLine size='2.5em' color="#4589EF"/>
      <div>
      <Link to="/LoginSignup"><button className="SignUp">Sign Up</button></Link>
      <Link to="/LoginSignup"><button className="Login">Login</button></Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar