import React from 'react'
import './Cover.css';
import NavBar from "../../Components/NavBar";

const Cover = () => {
  return (
    <div id="petsitter-cover">
        <NavBar />
        <div className="petsitter-hero">
        <h1>Looking for cuddles?</h1>
        <p>Become a Pet Sitter and Earn money doing something you love.</p>
        <button class="btn draw-border">Apply Now!</button>
        </div>
    </div>
  )
}

export default Cover
