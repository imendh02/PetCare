import React from 'react'
import Match from '../../images/Match.png';
import meet from '../../images/meet.png';
import relax from '../../images/relax.png';
import './HowServiceWorks.css';
const HowBoardingWorks = () => {
  return (
    <section id="HowServiceWorks">
        <h1>How boarding Pet Care Works</h1>
        <div className="card-HowServiceWorks">
            <div className="cardHSW">
                <div className="cardHSW-icon"><img src={Match} alt=""/></div>
                <div className="cardHSW-text">
                    <h4>Match</h4>
                    <p>Browse profiles of sitters near you who offer overnight pet boarding.</p>
                </div>
            </div>
            <div className="cardHSW">
                <div className="cardHSW-icon"><img src={meet} alt=""/></div>
                <div className="cardHSW-text">
                    <h4>Meet</h4>
                    <p>You meet with the local sitter virtually or in-person (your choice) to decide if they are right for you.</p>
                </div>
            </div>
            <div className="cardHSW">
                <div className="cardHSW-icon"><img src={relax} alt=""/></div>
                <div className="cardHSW-text">
                    <h4>Relax</h4>
                    <p>Relax as you receive written, photo, and video updates on your pet’s care.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowBoardingWorks