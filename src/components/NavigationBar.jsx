import React, { Component, useState, useEffect } from "react";

class NavigationBar extends Component {

    constructor() {
        super()
        this.colors = ['#DC143C', 'orange', '#37bcae', '#4169E1', '#E75480']
        this.state = { themeView: false, style: { bottom: '100%' }, primary_color: this.colors[2] }
    }

    showSettings(state) {
        console.log(this.props);
        if (state.themeView) {
            this.setState({ themeView: false, style: { bottom: '100%' }, primary_color: state.primary_color })
        } else {
            this.setState({ themeView: true, style: { bottom: '0' }, primary_color: state.primary_color })
        }
    }

    changeTheme(color) {
        document.documentElement.style.setProperty('--primary_color', color)
        this.setState({ themeView: this.state.themeView, style: this.state.style, primary_color: color })
    }

    render() {
        return (
            <nav>
                <div className="profile_container">
                    <div className="settings_wrapper">
                        <div className="settings_icon">
                            <button onClick={() => this.showSettings(this.state)}>
                                <span className="material-icons-round">
                                    settings
                                </span>
                            </button>
                        </div>
                        <div style={this.state.style} className="theme_colors_wrapper">
                            <div className="theme_content">
                                <h4>Theme Colors</h4>
                                <div className="theme_colors">
                                    {this.colors.map(color => <button key={color} value={color} style={{ backgroundColor: color }} onClick={() => this.changeTheme(color)}></button>)}
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
