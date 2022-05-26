import React from 'react'
import Hero from "./HeroBoarding";
import About from "./AboutBoarding";
import HowBoardingWorks from "./HowBoardingWorks";
import Benefits from "./BenefitsBoarding";
import Footer from "../../Components/Home/Footer";

const Boarding = () => {
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

export default Boarding