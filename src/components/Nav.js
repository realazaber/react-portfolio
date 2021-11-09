import React from "react";

import Slide from 'react-reveal/Slide';

function Nav () {
    return (
        <Slide right>
                    <nav id="navbar">
            <a href="#home">
                Home
            </a>
            <a href="#about">
                About me
            </a>
            <a href="#projects">
                My Projects
            </a>
            <a href="#contact">
                Contact me
            </a>
        </nav> 
        </Slide>
    );
}

export default Nav;