import React from 'react'
import './Footer.css'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import emailjs from 'emailjs-com';

export default function Footer() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'knack_forge', e.target, 'user_QNCYi67amNscF0sPuoXsC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div className="footer">
            <div className="footer-left">
                <div className="logo2">
                    <h3>Get In Touch</h3>
                </div>

                <div className="form">
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="name" />
                        <input type="email" placeholder="Email Address" name="email" />
                        <textarea cols="30" rows="3" placeholder="Your message" name="message" />
                        <input type="submit" value="Send" />
                    </form>        
                </div>

            </div>

            <div className="footer-right">
                <div className="contact-info">
                    <h1>Contact Info</h1>
                    <p>
                        CANADA <br />
                        435 W. Avenue <br />
                        Suite 1011 . Aditya <br />
                        Kitchner . N2C 2R9
                    </p>
                </div>
                <div className="social-media">
                    <div className="social-icons">
                        <AiOutlineTwitter size={20}/>
                        <FaLinkedinIn size={20}/>
                        <FaFacebookF size={20}/>
                    </div>    
                </div>    
            </div>    
        </div>
    )
}
