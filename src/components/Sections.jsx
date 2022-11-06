import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Home from "./Home";

class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <Home />
        <About />
        <Education />
      </div>
    );
  }
}

export default Sections;
