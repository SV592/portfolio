// About.js
import React from "react";
import "../styles/about.css"; // Import a CSS file for custom styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faPython } from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                {/* Description section */}
                <div className="about-description">
                    <h2 className="sub-heading0">[About Me]</h2>
                    <p>
                        I am a passionate web developer with expertise in React and JavaScript.
                        I enjoy creating interactive and user-friendly web applications.
                    </p>
                </div>

                {/* Skills section */}
                <div className="about-skills">
                    <h2 className="sub-heading1">
                        [Programming Languages]
                    </h2>

                    <ul className="custom-bullet-list">
                        <li>React
                            <FontAwesomeIcon icon={faReact} className="icon" />
                        </li>
                        <li>JavaScript
                            <FontAwesomeIcon icon={faJs} className="icon" />
                        </li>
                        <li>Python
                            <FontAwesomeIcon icon={faPython} className="icon" />
                        </li>
                        {/* Add more skills/languages */}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default About;
