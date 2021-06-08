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
                <div className="logo">
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
                        USA <br />
                        102 N. College <br />
                        Suite 404 . Tyler <br />
                        Texas . 75702
                    </p>
                </div>
                <div className="social-media">
                    <div className="social-icons">
                        <AiOutlineTwitter />
                        <FaLinkedinIn />
                        <FaFacebookF />
                    </div>    
                </div>    
            </div>    
        </div>
    )
}
