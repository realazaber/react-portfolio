import React from "react";
import Profile from "../imgs/me.png";
import wave3 from "../imgs/waves/3.png";

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
                            CSS, JavaScript and React and I have backend experience with PHP and SQL. 
                            <br /> I also have experience in application programming with Java and C#. 
                            <br />
                            Everyday I strive to learn more.
                        </h1>
                    </Bounce>
                </div>
            </div>
            <img className="upsideDown" src={wave3} width="100%" alt="wave" />
        
        </>
    )
}

export default About;