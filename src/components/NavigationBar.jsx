import React, { Component, useState, useEffect } from "react";

class NavigationBar extends Component {

    constructor() {
        super()
        this.state = { view: false, style: { bottom: '100%' } }
        this.colors = ['red', 'orange', '#37bcae', 'blue', '#E75480']

    }

    showSettings() {
        if (this.state.view) return this.setState({ view: false, style: { bottom: '100%' } })
        return this.setState({ view: true, style: { bottom: '0' } })
    }

    render() {
        return (
            <nav>
                <div className="profile_container">
                    <div className="settings_wrapper">
                        <div className="settings_icon">
                            <button onClick={() => this.showSettings()}>
                                <span className="material-icons-round">
                                    settings
                                </span>
                            </button>
                        </div>
                        <div style={this.state.style} className="theme_colors_wrapper">
                            <div className="theme_content">
                                <h4>Theme Colors</h4>
                                <div className="theme_colors">
                                    {this.colors.map(color => <button key={color} style={{ backgroundColor: color }}></button>)}
                                </div>
                            </div>
                        </div>
                    </div>

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
