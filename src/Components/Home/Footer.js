import React from 'react';
import './Footer.css';
import {FiFacebook} from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import {FiYoutube} from 'react-icons/fi';

const Footer = () => {
  return (
    <section id="Footer" className="footer">
        <div className="foot">
        <div className="description">
            <h1>PetCare</h1>
            <p>Find trusted pet sitters near you who offer dog walking,boarding and more pet care for your lovely furry friends.</p>
            <ul class="wrapper">
                <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <span><FiFacebook /></span>
                </li>
                <li class="icon twitter">
                    <span class="tooltip">Twitter</span>
                    <span><FiTwitter /></span>
                </li>
                <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span><FiInstagram /></span>
                </li>
                <li class="icon linkedin">
                    <span class="tooltip">Linkedin</span>
                    <span><FiLinkedin /></span>
                </li>
                <li class="icon youtube">
                    <span class="tooltip">Youtube</span>
                    <span><FiYoutube /></span>
                </li>
            </ul>
        </div>
        <div class="sections">
            <ul>
                <li>Home</li>
                <li>Services Request</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li>Services</li>
                <li>Pet Sitting</li>
                <li>Pet Walking</li>
                <li>Training</li>
                <li>Veterinary</li>
            </ul>
            <ul>
                <li>Store</li>
                <li>Search</li>
                <li>Help</li>
                <li>Lists</li>
                <li>Category</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Footer