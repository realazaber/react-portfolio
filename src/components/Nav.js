import React from "react";

import Slide from 'react-reveal/Slide';

function Nav () {
    return (
        <Slide right>
                    <nav id="navbar">
            <a href="#wave1">
                Home
            </a>
            <a href="#wave2">
                About me
            </a>
            <a href="#wave3">
                My Projects
            </a>
            <a href="#wave4">
                Contact me
            </a>
        </nav> 
        </Slide>
    );
}

export default Nav;