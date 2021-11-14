import React from "react";

import wave2 from "../imgs/waves/2.png";

import Bounce from 'react-reveal/Bounce';


function Home() {

    return (
        <>
            
            <div id="home">
            
                <Bounce right>
                <h1 id="welcomeText">
                    Hello there, I am Alex 
                    
                        <i id="handWave" role="img" aria-label="handWave" alt="hand">
                            <span role="img" aria-label="hand">
                                👋
                            </span>
                        </i>
                    
                    <br /> a software developer in Melbourne 
                </h1>
                </Bounce>
                
                <img className="wave wave1" src={wave2} width="100%" alt="wave" id="wave2" />
            </div>
        </>
    )
}

export default Home;