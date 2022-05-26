import React from 'react'
import '../Boarding/BenefitsService.css';
import Tick from '../../images/tick.svg';

const BenefitsDW = () => {
  return (
    <section id='DWBenefits'>
    <div className='Benefits-text'>
        <h1 style={{fontSize:'40px', marginBottom: '70px'}}>Benefits of dog walking</h1>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Expend Energy</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Promotes health and exercise</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Help eliminate destructive behavior</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Peace of Mind</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Socialization and Stimulation</p>
        </div>
     </div>
</section>  
  )
}

export default BenefitsDW