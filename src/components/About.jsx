import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="about_content">
          <h1>
            <span>About</span> Me
          </h1>

          <div className="about_details_wrapper">
            <div className="about_info about_text">
              <div className="text_details">
                <p>
                  Name: <span>Kagiso Moepya</span>
                </p>
                <p>
                  Age: <span>22</span>
                </p>
                <p>
                  Highest Qualification:{" "}
                  <span>Bachelor of Commerce (Information Systems)</span>
                </p>
                <p>
                  Post: <span>Full Stack Developer</span>
                </p>
                <p>
                  Language: <span>English</span>
                </p>
                <p>
                  Programming Languages:{" "}
                  <span>Python, Java, Javascript, TypeScript, React, Node-Js, Dart, Flutter, HTML, CSS, SCSS, SQL</span>
                </p>
                <p>
                  Version Control: <span>Github & Gitlab</span>
                </p>
                <p>
                  Project Design Tools: <span>Figma, Miro-board</span>
                </p>

                <a
                  href="src/components/documents/Kagiso's Resume.pdf"
                  download="Kagiso's Resume"
                >
                  Download <span className="material-icons-round">download</span>
                </a>
              </div>
            </div>

            <div className="about_info about_cards">
              <div className="about_card">
                <span>1+</span> <br /> Years of Experience
              </div>
              <div className="about_card">
                <span>2</span> <br /> Varsity Bursaries Acquired
              </div>
              <div className="about_card">
                <span>5+</span> <br /> Personal Projects
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
