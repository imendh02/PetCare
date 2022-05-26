import React from 'react'
import Tick from '../../images/tick.svg';

const BenefitsTraining = () => {
  return (
    <section id='TrainingBenefits'>
    <div className='Benefits-text'>
        <h1 style={{fontSize:'40px', marginBottom: '70px'}}>Benefits of pet training</h1>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Safer for your home</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Provides Important Stimulation.</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Closer bond with your pet</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Easy Management</p>
        </div>
        <div className='row'>
            <img src={Tick} alt=""/>
            <p style={{fontWeight :'lighter',fontSize:'25px'}}>Improve Intelligence</p>
        </div>
     </div>
</section>  
  )
}

export default BenefitsTraining