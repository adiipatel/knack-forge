import React, {useState} from 'react';
import './Vision.css';
import play2 from '../images/play.png';
import cross from '../images/cross.png';


const Vision = props => {

  const [play, setPlay] = useState(false);

  const url = play
    ? `https://www.youtube.com/embed/kR56wOsjgLo?autoplay=1`
    : `https://www.youtube.com/embed/kR56wOsjgLo`;

    return (
        
        <div className="vision">
                <button id="btn-play" onClick={() => setPlay(true)}>
                    <img className="vision-image" src={play2} alt="Play" width="300px"></img>
                </button>

            <h2>{props.text}</h2>
             
            {
                play? <div className="video" id="video-play">
                        <iframe width="850" height="450" 
                            src={url} 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <button id="btn-close" onClick={() => setPlay(false)}>
                            <img className="vision-cross" src={cross} alt="Play" width="150px"></img>
                        </button>
                    </div>: null
            }

        </div>
           
    )
}

export default Vision;