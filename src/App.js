import React from "react";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact.js";

import "./js/animations";

function App() {
  return (
   <>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
   </>
  );
}

export default App;
