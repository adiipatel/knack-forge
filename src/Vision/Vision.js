import React from 'react';
import './Vision.css';
import banner2 from '../images/banner2.jpg';

const Vision = props => {
    return (
        <div className="vision">
            <img className="vision-image" src={banner2} alt="Banner Image" width="300px"></img>
            <h2>{props.text}</h2>
        </div>
    )
}

export default Vision;