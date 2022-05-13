import React from 'react'
import './Contact.css';
import {GrLocation} from 'react-icons/gr';
import {FiPhone} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
const Contact = () => {
  return (
    <section id="Contact" className="contact">
        <div className="form">
        <div className="col1">
            <form>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="text" id="adr" name="adr" placeholder="Email Adress" /><br/>
                <textarea rows="3" cols="50" name="message" form="usrform">Write your message here</textarea><br/>
                <input type="submit" value="Send"/>
            </form>
        </div>
        <div class="line"></div>
        <div className="col2">
           <h3>Get In Touch</h3> 
           <div className="contacter"><GrLocation size="24px"/><span>07 Street Habib Bougatfa Megrine,Tunis</span></div>
           <div className="contacter"><FiPhone size="24px"/><span>(+216) 56 480 824</span></div>
           <div className="contacter"><HiOutlineMail size="24px"/><span>imendhaoui02@gmail.com</span></div>
        </div>
        </div>
    </section>
  )
}

export default Contact