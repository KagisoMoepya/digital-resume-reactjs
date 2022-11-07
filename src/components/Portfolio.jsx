import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="portfolio_wrapper">
          <h1>
            My <span>Portfolio</span>
          </h1>

          <div className="portfolio_projects">
            <div className="project">
              <a
                href="https://kagisomoepya.github.io/Color%20Gallery/"
                target="_blank"
              >
                Colour Gallery
                <span className="material-icons-round">palette</span>
              </a>
            </div>

            <div className="project">
              <a
                href="https://kagisomoepya.github.io/Todo%20List/"
                target="_blank"
              >
                To Do List
                <span className="material-icons-round">fact_check</span>
              </a>
            </div>

            <div className="project">
              <a
                href="https://kagisomoepya.github.io/Digital%20Resume/"
                target="_blank"
              >
                Digital Resume
                <span className="material-icons-round">description</span>
              </a>
            </div>

            <div className="project">
              <a
                href="https://kagisomoepya.github.io/Basic%20Finance/"
                target="_blank"
              >
                Basic Finance
                <span className="material-icons-round">account_balance</span>
                <p>Desktop View Only</p>
                <p>
                  (Under Construction{" "}
                  <span className="material-icons-round">engineering</span>)
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
