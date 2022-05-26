import React from 'react'
import Match from '../../images/Match.png';
import meet from '../../images/meet.png';
import relax from '../../images/relax.png';

const HowVeterinaryWorks = () => {
  return (
    <section id="HowServiceWorks">
    <h1>How Online Veterinary Works</h1>
    <div className="card-HowServiceWorks">
        <div className="cardHSW">
            <div className="cardHSW-icon"><img src={Match} alt=""/></div>
            <div className="cardHSW-text">
                <h4>Match</h4>
                <p>Find the right online veterinary for your pet.</p>
            </div>
        </div>
        <div className="cardHSW">
            <div className="cardHSW-icon"><img src={meet} alt=""/></div>
            <div className="cardHSW-text">
                <h4>Meet</h4>
                <p>You talk with the veterinary by either video or text to decide if they are right for you.</p>
            </div>
        </div>
        <div className="cardHSW">
            <div className="cardHSW-icon"><img src={relax} alt=""/></div>
            <div className="cardHSW-text">
                <h4>Relax</h4>
                <p>Relax and get answers to all your questions.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default HowVeterinaryWorks