import React from 'react'
import freedom from '../../images/freedom.png';
import money from '../../images/money.png';
import heart from '../../images/heart.png';
import './WhyBecome.css';

const WhyBecome = () => {
  return (
    <section id="WhyBecome">
        <h1>Why Become a Pet Sitter?</h1>
        <div className="card-PetSitter">
            <div className="CardPS">
                <div className="CardPS-icon"><img src={freedom} alt=""/></div>
                <div className="CardPS-text">
                    <h4>Flexibility and Freedom</h4>
                    <p>Work to your own schedule and work as much, or little as you like. Accept only the Pets you want to mind, offer the services you want
                    to offer, for the prices you are willing to do it for.</p>
                </div>
            </div>
            <div className="CardPS">
                <div className="CardPS-icon"><img src={money} alt=""/></div>
                <div className="CardPS-text">
                    <h4>Earn Money</h4>
                    <p>if you really dedicate yourself to pet sitting, then you can earn a fair amount of money.
                    You will also get all the benefits of working for yourself.</p>
                </div>
            </div>
            <div className="CardPS">
                <div className="CardPS-icon"><img src={heart} alt=""/></div>
                <div className="CardPS-text">
                    <h4>Have fun</h4>
                    <p>Have fun doing something you love Isn’t it every kid’s dream to stay at home
                    with and play with pets all day and the fact that you also get paid to do it!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyBecome
