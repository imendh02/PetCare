import React from 'react'
import NavBar from "../NavBar";
import '../Boarding/HeroService.css';

const HeroVeterinary = () => {
  return (
    <section id='VeterinaryCover'>
      <NavBar />
      <div className='ServiceHero'>
        <h1>Online Veterinary</h1>
        <p style={{fontWeight :'lighter',fontSize:'30px'}}>Keeping your pet as happy and healthy as possible.</p>
        <button className="Service-btn">Schedule Veterinary</button>
      </div>
    </section>
  )
}

export default HeroVeterinary