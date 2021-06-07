import React from 'react'
import './Team.css';

const Team = props => {
    return (
        <div className="team">
            <div className="peop">
              <img className="peop-img" src={`/images/${props.img}.jpg`} alt="Product Image" width="300px"></img>
            </div> 
            <h1>{props.name}</h1>
            <p className="grey">{props.position}</p>   
        </div>
    )
}

export default Team;