import React from "react";
import Home from "./components/Home";
import MoreProjects from "./components/Projects/MoreProjects";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/react-portfolio/" exact element={<Home />} />
          <Route path="/more-projects" exact element={<MoreProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
