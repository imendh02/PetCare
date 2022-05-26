import React,{useContext} from 'react'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import NavBar from "../NavBar";
import Footer from "../../Components/Home/Footer";
import {Stepper,StepLabel,Step} from '@material-ui/core';
import { multiStepContext } from './StepContext';

const RequestService = () => {
    const {currentStep} = useContext(multiStepContext);
    function showStep(step) {
        switch(step) {
            case 1 : 
                return <FirstStep />
            case 2 : 
                return <SecondStep />
            case 3 : 
                return <ThirdStep />
        }
    }
    const steps = [
        'Informations',
        'Service',
        'Confirmation',
      ];
  return (
    <>
    <NavBar />
    <div className='center-stepper'>
        <Stepper style={{width:'55%'}} activeStep={currentStep - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
        </Stepper>
    </div>
    {showStep(currentStep)}
    </>
  )
}

export default RequestService