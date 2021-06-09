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
                <label className="ham" for="toggle-open">&#9776;</label>
                <input type="checkbox" id="toggle-open"/> 
                <div className="menu"> 
                    <ul>
                        <li><a href="#product">Products &amp; People</a></li>
                        <li><a href="#solution">Solutions &amp; Tech</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#news">News</a></li>
                    </ul>       
                </div>
                <div className="icons">
                    <ul>
                        <li><a href="/"><FaRegEnvelope /></a></li>
                        <li><a href="/"><FaPhoneAlt /></a></li>

                    </ul>
                </div>        
            </div>

    )
};
