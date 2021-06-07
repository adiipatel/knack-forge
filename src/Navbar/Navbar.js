import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {

    return (
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h3>KnackForge</h3>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Process</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">News</a></li>
                    </ul>       
                </div>
                <div className="icons">
                    <ul>
                        <li><a href="#"><FaRegEnvelope /></a></li>
                        <li><a href="#"><FaPhoneAlt /></a></li>
                    </ul>
                </div>        
            </div>

    )
};
