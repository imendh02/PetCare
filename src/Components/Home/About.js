import React from 'react'
import './About.css';

const About = () => {
  return (
    <section id="About" className="about">
        <div class="header">
            <h2>About<span> Us</span></h2>
            <hr className="ligne"/>
        </div>
        <div className="text">
        <p className="parag1">Welcome to the <span>1st network</span> of pet sitters, trainers and veterinaries in Tunisia.</p>
        <p className="parag2">We believe everyone deserves the unconditional love of a pet—and at PetCare, our mission is to make it easier to experience that love.
        We empower our community of trusted services to run their own pet care businesses on PetCare with the tools and security of a global company to back them.</p>
        </div>
    </section>
  )
}

export default About