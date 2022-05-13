import React from 'react'
import {BiChevronRightCircle} from 'react-icons/bi';
import NavbarHome from "./NavbarHome";
import {Link} from "react-router-dom";
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero'>
    <NavbarHome />
    <div className="slide first">
    <div id="cover">
      <h1>Make your pet feel Safe and Happy</h1>
      <p>Find a verified and reviewed sitter who'll keep your pets company and give them al the time, care and attention in the world.</p>
      <Link to="/PetSitter"><button className="search">Find a pet sitter</button></Link>
    </div>
    <div className="icon"><BiChevronRightCircle size="60px"/></div>
    </div> 
    </section>
  )
}

export default Hero