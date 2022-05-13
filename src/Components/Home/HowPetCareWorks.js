import React from 'react'
import GroupeAbout from '../../images/GroupeAbout.png';
import './HowPetCareWorks.css';

const HowPetCareWorks = () => {
  return (
    <section id="hpcw" className="hpcw">
    <h2>How <span>PetCare</span> Work</h2><hr className="ligne" />
    <div className="main">
        <div className="col1"><img src={GroupeAbout} alt="" /></div>
        <div className="col2">
            <div className="">
                <div className="head">
                    <div className="circle"><span>1</span></div>
                    <h3>Tell us your needs</h3>
                </div>
                <p>Help us understand what you're looking for by answering a few simple questions.</p>
            </div>
            <div className="">
                <div className="head">
                    <div className="circle"><span>2</span></div>
                    <h3>Browse your top matches</h3>
                </div>
                <p>Compare pet sitters near you for their flexibility, pricing,and experience.Then, talk to the ones you like.</p>
            </div>
            <div className="">
                <div className="H">
                    <div className="circle"><span>3</span></div>
                    <h3>Hire the best pet sitter</h3>
                </div>
                <p>Schedule a time with the pet sitter of your choice and you're good to go! It's that easy .</p>
            </div>
            <button className="animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Find a pet Sitter Now</button>
        </div>
    </div>
</section>
  )
}

export default HowPetCareWorks