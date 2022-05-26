import React from 'react'
import Tick from '../../images/tick.svg';

const BenefitsVeterinary = () => {
  return (
    <section id='VeterinaryBenefits'>
    <div className='Benefits-text'>
        <h1 style={{fontSize:'40px', marginBottom: '70px'}}>Benefits of online veterinary</h1>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Early Detection of Disease</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Preventative Health Care</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Find an effective treatment for your pet from the comfort of your own home</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Inexpensive</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>No location barriers</p>
        </div>
     </div>
</section> 
  )
}

export default BenefitsVeterinary