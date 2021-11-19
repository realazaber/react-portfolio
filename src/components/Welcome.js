import React from "react";

import wave2 from "../imgs/waves/2.png";

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


function Home() {

    return (
        <div>
            
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
                <Fade bottom cascade>
                    <div id="socials">
                        <a href="https://www.linkedin.com/in/alexander-zaborski-a7b7951a4/" target="_blank">
                            <button className="btnSocial">
                                LinkedIn
                            </button>
                        </a> 

                        <a href="https://github.com/therealcoolpup" target="_blank">
                            <button className="btnSocial">
                                Github
                            </button>
                        </a>
                        
                        <a href="https://www.fiverr.com/thecoderdragon?up_rollout=true" target="_blank">
                            <button target="_blank" className="btnSocial">
                                Fiverr
                            </button>   
                        </a>
                    </div>
                </Fade>


                
                <img className="wave wave1" src={wave2} width="100%" alt="wave" id="wave2" />
            </div>
        </div>
    )
}

export default Home;