import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="contact_wrapper">
                    <h1>
                        <span>Contact</span> Me
                    </h1>

                    <div className="contact_content">
                        <div className="contact_info_wrapper contact_common_wrappers">
                            <div className="centered_info_wrapper">
                                <h2>CONTACT INFO</h2>

                                <p>
                                    <span className="material-icons-round">mail</span>{" "}
                                    kagisomoepya19@gmail.com
                                </p>
                                <p>
                                    <span className="material-icons-round">phone_enabled</span> +27 69
                                    547 3801
                                </p>
                                <p>
                                    <span className="material-icons-round">location_on</span> Cape
                                    Town, Western Cape, South Africa, 7441
                                </p>
                                <p>
                                    <span className="fa-brands fa-linkedin-in fa-xl"></span>{" "}
                                    <a href="https://www.linkedin.com/in/kagiso-moepya-87818015a/">
                                        Linkedin (Click){" "}
                                    </a>
                                </p>
                                <p>
                                    <span className="fa-brands fa-github fa-xl"></span>{" "}
                                    <a href="https://github.com/KagisoMoepya">Github (Click) </a>
                                </p>
                            </div>
                        </div>

                        <div className="contact_form_wrapper contact_common_wrappers">
                            <form>
                                <div className="input_wrapper">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="name">Name</label>
                                </div>

                                <div className="input_wrapper">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input_wrapper">
                                    <input
                                        type="text"
                                        name="company_name"
                                        id="company_name"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="company_name">Company Name</label>
                                </div>

                                <div className="input_wrapper textarea_wrapper">
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        required
                                    ></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>

                                <div className="input_wrapper">
                                    <button type="submit">
                                        Send <span className="material-icons-round">send</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
