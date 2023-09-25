import React from "react";
import { useTheme } from "../contexts/theme"; // Import the useTheme hook
import "../styles/home.css"; // Import a CSS file for custom styling
// import placeholderImage from "../assets/profile1.jpg"; // Import your placeholder image

// Import the Font Awesome icons you need
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function HomeSection() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`home-section ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="square-image-wrapper">
                <img
                    // src={placeholderImage}
                    alt="Placeholder"
                    className="home-image"
                />
            </div>
            <h2>Developer | Researcher</h2>
            <div className="icon-container">
                <a href="https://github.com/SV592/SV592" target="_blank" className="icon-link" rel="noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/shaquille-pearson-47bb5a208/" target="_blank" className="icon-link" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>

        </div>
    );
}

export default HomeSection;