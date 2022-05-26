import React from 'react'
import NavBar from "../NavBar";
import '../Boarding/HeroService.css';

const HeroPDC = () => {
  return (
    <section id='PDCCover'>
    <NavBar />
    <div className='ServiceHero'>
      <h1>Pet Day Care</h1>
      <p style={{fontWeight :'lighter',fontSize:'30px'}}>Don't leave your pet friend at home alone.</p>
      <button className="Service-btn">Schedule Pet Day Care</button>
    </div>
    </section>
  )
}

export default HeroPDC