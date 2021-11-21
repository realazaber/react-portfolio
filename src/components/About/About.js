import React from "react";
import Profile from "../../imgs/me.png";

import TechStack from "./TechStack";

import wave3 from "../../imgs/waves/3.png";


import Bounce from 'react-reveal/Bounce'; 

function About() {

    return (
        <div>
            <div id="about">
                <h1 className="sectionTitleSecondary">
                    About me
                </h1>
                <div id="mainInfo">
                    <Bounce left>
                        <img id="profileImg" src={Profile} alt="Me" />
                    </Bounce>

                    <Bounce right>
                        <div id="aboutMe">
                            <h1 id="aboutMeText">
                                I have graduated from RMIT in 2021 with an associate degree in IT. I am passionate about all fields of IT 
                                with my favourite being software developement. Everyday I strive to learn more.
                            </h1>
                            <TechStack />
                        </div>
                        
                    </Bounce>
                </div>
            </div>
            <br />
            <img className="upsideDown" src={wave3} width="100%" alt="wave" id="wave3" />
        
        </div>
    )
}

export default About;