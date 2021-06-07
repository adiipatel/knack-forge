import React from 'react';
import './Platform.css';
import platform from '../images/platform.jpg';


export default function Platform() {
    return (
    <div className="platform">
        <div className="plat-left">
            <h1>Doing things <br/>differently</h1>
            <p className="grey">We employ a full team of development and <br/>
               management talent to complete work that always<br/>
               meets and exceeds your expectations. We use <br/>
               open source platforms that ensure you retain <br/>
               ownership of every aspect of your project.</p>
            <button className="btn-plat">Details</button>   
        </div>
        <div className="plat-right">
            <img className="platform-image" src={platform} alt="Team work"></img>
        </div>  
    </div>      
    )
}
