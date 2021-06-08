import React from 'react';
import './Tech.css';


const Tech = props => {
    return (
        <div className="tech">
            <div className="red-icon">{props.icon}</div>
            <h1>{props.head}</h1>
            <p className="grey">{props.para}</p>
        </div>
    )
}

export default Tech;

