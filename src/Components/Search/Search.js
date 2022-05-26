import React from 'react'
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Home/Footer";
import '../Search/Search.css';
import dog from '../../images/black-dog.png';
import cat from '../../images/black-cat.png';
import {ReactComponent as Boarding} from '../../images/icon_house.svg';
import {ReactComponent as Dogwalking} from '../../images/walking-the-dog-svgrepo-com.svg';
import {ReactComponent as Training} from '../../images/dog_training.svg';
import {ReactComponent as Veterinary} from '../../images/Icon veterinary-care.svg';
import {ReactComponent as Petdaycare} from '../../images/sun.svg';
import {FiSearch} from "react-icons/fi";

const Search = () => {
  return (
    <>
    <Navbar />
    <div id="search">
        <h1>Find a pet sitter near you.</h1>
        <div class="container">
            <div class="right">
                <div class="city">
                    <h3>City</h3>
                    <div class="list-choice">
                        <div class="list-choice-title">Tunisie</div>
                        <div class="list-choice-objects">
                            <label><input type="radio" name="month"/><span>January</span></label>
                            <label><input type="radio" name="month"/><span>February</span></label>
                        </div>
                    </div>
                </div>
                <div class="dates">
                    <h3>Which dates do you need?</h3>
                    <input type="datetime-local" placeholder="Drop off : &ensp;"/><br/>
                    <input type="datetime-local" placeholder="Pick up : &ensp;"/>
                </div>
                <div class="butt">
                <button class="search_button">
                    <div class="icon"><FiSearch class="svg"/></div>
                    <p>Search</p>
                </button>
                </div>
            </div>
            <div class="left">
                <div class="pets">
                    <h3>I'm looking for service for my:</h3>
                    <div>
                        <div class="pet">
                            <img src={dog} alt="" />
                            <h3>Dog</h3>
                        </div>
                        <div class="pet">
                            <img src={cat} alt="" />
                            <h3>Cat</h3>
                        </div>
                    </div>
                </div>
                <div class="services">
                    <h3>Which service do you want:</h3>
                    <div>
                    <div class="search_service">
                        <Boarding/>
                        <h3>Boarding</h3>
                    </div>
                    <div class="search_service">
                        <Training/>
                        <h3>Training</h3>
                    </div>
                    <div class="search_service">
                        <Veterinary/>
                        <h3>Online Veterinary</h3>
                    </div>
                    <div class="search_service">
                        <Dogwalking/>
                        <h3>Dog walking</h3>
                    </div>
                    <div class="search_service">
                        <Petdaycare/>
                        <h3>Pet Day Care</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Search