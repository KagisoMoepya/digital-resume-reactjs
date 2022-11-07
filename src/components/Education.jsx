import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section id="education">
        <div className="education_wrapper">
          <h1>
            My <span>Education</span>
          </h1>

          <div className="qualifications">
            <div className="qualification">
              <div className="pole_wrapper">
                <div className="graduate_hat_wrapper">
                  <span className="material-icons-round">school</span>
                </div>
                <div className="pole"></div>
              </div>

              <div className="education_details">
                <div className="year">2020</div>
                <h2>
                  Bachelor of Commerce
                  <br />
                  (Information Systems)
                </h2>

                <p>
                  Status: <span>Completed</span>
                </p>
                <p>
                  Institution: <span>University of The Western Cape</span>
                </p>
              </div>
            </div>

            <div className="qualification">
              <div className="pole_wrapper">
                <div className="graduate_hat_wrapper">
                  <span className="material-icons-round">school</span>
                </div>
                <div className="pole"></div>
              </div>

              <div className="education_details">
                <div className="year">2022</div>
                <h2>Computer Software Engineering (NQF 5)</h2>

                <p>
                  Status: <span>Final Year</span>
                </p>
                <p>
                  Institution: <span>WeThinkCode_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
