import React, { Component } from "react";

class NavigationBar extends Component {
    render() {
        return (
            <nav>
                <div className="profile_container">
                    <div className="profile_pic"></div>

                    <div className="profile_text">
                        <h2>Kagiso Moepya</h2>
                        <h4>WeThinkCode_Student <br /> (Final Year)</h4>
                    </div>
                </div>

                <ul>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;
