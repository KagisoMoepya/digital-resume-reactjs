import React, { Component } from "react";
import About from "./About";
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
      </div>
    );
  }
}

export default Sections;
