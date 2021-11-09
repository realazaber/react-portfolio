import React from "react";
import Profile from "../imgs/me.png";

import Bounce from 'react-reveal/Bounce'; 

function About() {

    return (
        <>
            <div id="about">
            <h1 className="sectionTitleSecondary">
                About me
            </h1>
            <div id="mainInfo">

                <Bounce left>
                    <img id="profileImg" src={Profile} alt="Me" />
                </Bounce>

                <Bounce right>
                    <h1 id="aboutMe">
                        I have graduated from RMIT in 2021 with an associate degree in IT. I am passionate about all fields of IT 
                        with my favourite being software developement. I have experience in web development in frontend with HTML, 
                        CSS and JavaScript and backend with PHP and SQL. I also have experience in application programming with Java.
                        <br />
                        Everyday I strive to learn more.
                    </h1>
                </Bounce>
            </div>
        </div>
        <svg id="aboutEndWave" className="wave upsideDown" viewBox="0 0 1440 250" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(61, 122, 243, 1)" offset="0%"></stop><stop stop-color="rgba(0, 255, 203.172, 1)" offset="100%"></stop></linearGradient></defs><path className="wavePath" fill="url(#sw-gradient-0)" d="M0,175L60,158.3C120,142,240,108,360,87.5C480,67,600,58,720,75C840,92,960,133,1080,154.2C1200,175,1320,175,1440,150C1560,125,1680,75,1800,79.2C1920,83,2040,142,2160,145.8C2280,150,2400,100,2520,87.5C2640,75,2760,100,2880,112.5C3000,125,3120,125,3240,120.8C3360,117,3480,108,3600,112.5C3720,117,3840,133,3960,154.2C4080,175,4200,200,4320,195.8C4440,192,4560,158,4680,154.2C4800,150,4920,175,5040,191.7C5160,208,5280,217,5400,220.8C5520,225,5640,225,5760,204.2C5880,183,6000,142,6120,120.8C6240,100,6360,100,6480,108.3C6600,117,6720,133,6840,137.5C6960,142,7080,133,7200,141.7C7320,150,7440,175,7560,170.8C7680,167,7800,133,7920,104.2C8040,75,8160,50,8280,62.5C8400,75,8520,125,8580,150L8640,175L8640,250L8580,250C8520,250,8400,250,8280,250C8160,250,8040,250,7920,250C7800,250,7680,250,7560,250C7440,250,7320,250,7200,250C7080,250,6960,250,6840,250C6720,250,6600,250,6480,250C6360,250,6240,250,6120,250C6000,250,5880,250,5760,250C5640,250,5520,250,5400,250C5280,250,5160,250,5040,250C4920,250,4800,250,4680,250C4560,250,4440,250,4320,250C4200,250,4080,250,3960,250C3840,250,3720,250,3600,250C3480,250,3360,250,3240,250C3120,250,3000,250,2880,250C2760,250,2640,250,2520,250C2400,250,2280,250,2160,250C2040,250,1920,250,1800,250C1680,250,1560,250,1440,250C1320,250,1200,250,1080,250C960,250,840,250,720,250C600,250,480,250,360,250C240,250,120,250,60,250L0,250Z"></path></svg>
        
        </>
    )
}

export default About;