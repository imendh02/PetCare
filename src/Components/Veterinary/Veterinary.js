import React from 'react'
import Hero from "./HeroVeterinary";
import About from "./AboutVeterinary";
import HowBoardingWorks from "./HowVeterinaryWorks";
import Benefits from "./BenefitsVeterinary";
import Footer from "../../Components/Home/Footer";

const Veterinary = () => {
  return (
    <>
    <Hero />
        <About />
        <HowBoardingWorks />
        <Benefits />
        <Footer />
    </>
  )
}

export default Veterinary