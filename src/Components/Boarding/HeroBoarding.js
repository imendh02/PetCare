import React from 'react'
import NavBar from "../NavBar";
import './HeroService.css';
const HeroBoarding = () => {
  return (
    <section id='ServiceCover'>
      <NavBar />
      <div className='ServiceHero'>
        <h1>Boarding</h1>
        <p style={{fontWeight :'lighter',fontSize:'30px'}}>Leave your pet in the most caring of hands.</p>
        <button className="Service-btn">Schedule Pet Boarding</button>
      </div>
</section> 
  )
}

export default HeroBoarding