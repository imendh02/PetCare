import React from 'react'
import NavBar from "../NavBar";
import '../Boarding/HeroService.css';

const HeroDW = () => {
  return (
    <section id='DWCover'>
    <NavBar />
    <div className='ServiceHero'>
      <h1>Dog Walking</h1>
      <p style={{fontWeight :'lighter',fontSize:'30px'}}>Local, experienced dog walkers you can trust.</p>
      <button className="Service-btn">Schedule Dog Walking</button>
    </div>
</section>
  )
}

export default HeroDW