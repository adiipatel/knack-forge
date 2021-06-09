import React from 'react'
import './Footer.css'
import logo from '../images/logo.png';
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="logo2">
                    <img src={logo} alt="logo"></img>
                    <h3>KnackForge</h3>
                </div>

                <ul>
                    <li><a href="#product">Products &amp; People</a></li>
                    <li><a href="#solution">Solutions &amp; Tech</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#news">News</a></li>
                </ul>

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
