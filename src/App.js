import React from "react";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact.js";
import wave1 from "./imgs/waves/1.png";

function App() {
  return (
   <>
   <img src={wave1} width="100%" alt="wave"  />
     <Nav />
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
   </>
  );
}

export default App;
