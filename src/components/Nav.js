import React from "react";

import Slide from 'react-reveal/Slide';

function Nav () {

    const openMenu = () => {
        document.getElementById("mobileNav").style.width = "200px";
    }

    const closeMenu = () => {
        document.getElementById("mobileNav").style.width = "0px";
    }

    return (
        <Slide right>
            <nav id="navbar">
                <a href="#wave1">
                    Home
                </a>
                <a href="#wave2">
                    About me
                </a>
                <a href="#projects">
                    My Projects
                </a>
                <a href="#wave4">
                    Contact me
                </a>
            </nav>

            <button id="mobileMenu"  onClick={openMenu}>
                ☰
            </button>
            <div id="mobileNav">
                <a href="#wave1" onClick={closeMenu}>
                    Home
                </a>
                <a href="#wave2" onClick={closeMenu}>
                    About me
                </a>
                <a href="#projects" onClick={closeMenu}>
                    My Projects
                </a>
                <a href="#wave4" onClick={closeMenu}>
                    Contact me
                </a>
            </div>
        </Slide>
    );
}

export default Nav;