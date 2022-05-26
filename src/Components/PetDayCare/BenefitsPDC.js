import React from 'react'
import '../Boarding/BenefitsService.css';
import Tick from '../../images/tick.svg';

const BenefitsPDC = () => {
  return (
    <section id='PDCBenefits'>
    <div className='Benefits-text'>
        <h1 style={{fontSize:'40px', marginBottom: '70px'}}>Benefits of pet day care</h1>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Peace of Mind</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Safety</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Socialization</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Flexible Schedule</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Plenty of exercise & daily fun</p>
        </div>
     </div>
</section>  
  )
}

export default BenefitsPDC