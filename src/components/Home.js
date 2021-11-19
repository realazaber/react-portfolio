import React from 'react';
import Nav from "./Nav.js";
import Welcome from "./Welcome.js";
import About from "./About.js";
import Projects from "./Projects/Projects.js";
import Contact from "./Contact.js";
import wave1 from "../imgs/waves/1.png";


function Home() {
    return (
        <div>
              <img src={wave1} width="100%" alt="wave" id="wave1" />
              <Nav />
              <Welcome/>
              <About/>
              <Projects/>
              <Contact/>
        </div>
    )
}

export default Home
