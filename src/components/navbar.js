import React, { useState } from "react";
import "../styles/navbar.css"; // Import a CSS file for custom styling

// Import Bootstrap components
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Import the useTheme hook from the theme context
import { useTheme } from "../contexts/theme"; // Import the useTheme hook

function MyNavbar() {

    const { isDarkMode, toggleTheme } = useTheme();
    const [themeClass, setThemeClass] = useState("");

    const handleThemeToggle = () => {
        toggleTheme();
        console.log("Theme toggled");
        setThemeClass(isDarkMode ? "" : "theme-dark-mode");
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#timeline">Timeline</Nav.Link>
                        <Nav.Link href="#papers">Papers</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link>
                            <button onClick={handleThemeToggle} className="theme-toggle-button">
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="2x" />
                            </button>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;