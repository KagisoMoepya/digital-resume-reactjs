import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Home from "./Home";
import Portfolio from "./Portfolio";
class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <Home />
        <About />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Sections;
