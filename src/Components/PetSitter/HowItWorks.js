import React from 'react'
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="HowItWorks">
        <h1>How it works</h1>
        <div className="HIW">
            <div className="container">
                <ul className="progressbar">
                    <li><h4>Create your profile</h4><p>We guide you through building a profile<br />that showcases information pet owners <br /> care about.</p></li>
                    <li><h4>Accept requests</h4><p>Tell us the types of pets you want to <br />care for and the dates that work for you.<br />You make your own schedule.</p></li>
                    <li><h4>Get paid</h4><p>Payments will withdrawal after you have <br />completed a service.</p></li>
                </ul>
            </div>
            <button>Get started</button>
        </div>
    </section>
  )
}

export default HowItWorks