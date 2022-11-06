import React, { Component } from "react";
import About from "./About";
import Home from "./Home";

class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <Home />
        <About />
      </div>
    );
  }
}

export default Sections;
