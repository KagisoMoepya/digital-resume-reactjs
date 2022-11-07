import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="home_details_container">
          <h1>
            Hello !
            <br />
            I'M <span>Kagiso Moepya</span>
          </h1>

          <br />

          <p>
            A Final year Software Development Student at WeThinkCode_ and an
            aspiring Full Stack Developer. Programming has become a major part
            of my life and in that I have become more eager to venture into
            different challenges within the Tech Field.
            <br/>
            <br/>
            I am Interested in working for SovTech because I believe that there
            is a lot of room for growth available for young developers and
            the company allows for upcoming developers to explore themselves
            in their profession, through many opportunities that are 
            available...
          </p>

          <br />

          <a href="#about">
            About <span className="material-icons-round">person</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Home;
