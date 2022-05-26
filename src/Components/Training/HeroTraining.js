import React from 'react'
import NavBar from "../NavBar";
import '../Boarding/HeroService.css';
const HeroTraining = () => {
  return (
    <section id='TrainingCover'>
      <NavBar />
      <div className='ServiceHero'>
        <h1>Pet Training</h1>
        <p style={{fontWeight :'lighter',fontSize:'30px'}}>You're giving your pet the skills it needs to live peacefully among humans and other animals.</p>
        <button className="Service-btn">Schedule Pet Training</button>
      </div>
    </section> 
  )
}

export default HeroTraining