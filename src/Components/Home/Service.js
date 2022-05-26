import React from 'react'
import './Service.css';
import house from '../../images/icon_house.svg';
import dogwalking from '../../images/walking-with-dog.svg';
import training from '../../images/dog_training.svg';
import veterinary from '../../images/Icon veterinary-care.svg';
import petdaycare from '../../images/sun.svg';
import {Link} from "react-router-dom";

const Service = () => {
  return (
    <section id="Service" className="service">
    <h2>Our<span> Services</span></h2>
    <hr className="ligne"/>
    <div class="card">
    <div className="cardService">
        <div className="cardService-icon"><img src={house} alt=""/></div>
        <div className="cardService-text">
            <h4>Boarding</h4>
            <p>Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a comfortable environment.</p>
            <Link to="./Boarding"><button className="button">Read More</button></Link>
        </div>
    </div>
    <div className="cardService">
        <div className="cardService-icon"><img src={dogwalking} alt=""/></div>
        <div className="cardService-text">
            <h4>Dog Walking</h4>
            <p>Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.</p>
            <Link to="/DogWalking"><button className="button">Read More</button></Link>
        </div>
    </div>
    <div className="cardService">
        <div className="cardService-icon"><img src={training} alt=""/></div>
        <div className="cardService-text">
            <h4>Training</h4>
            <p>Train your pet for better health and better experiment .</p>
            <Link to="/Training"><button className="button">Read More</button></Link>
        </div>
    </div>
    <div className="cardService">
        <div className="cardService-icon"><img src={veterinary} alt=""/></div>
        <div className="cardService-text">
            <h4>Online Veterinary</h4>
            <p>Your pet feels comfortable and safe throughout the experience.</p>
            <Link to="/Veterinary"><button className="button">Read More</button></Link>
        </div>
    </div>
    <div className="cardService">
        <div className="cardService-icon"><img src={petdaycare} alt="" /></div>
        <div className="cardService-text">
            <h4>Pet Day Care</h4>
            <p>Your Pet spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.</p>
            <Link to="/PetDayCare"><button className="button">Read More</button></Link>
        </div>
    </div>
    </div>
</section>
  )
}

export default Service