import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useTheme } from "../contexts/theme"; // Import the useTheme hook
import "../styles/navbar.css"; // Import a CSS file for custom styling

function Navbar() {

    const { isDarkMode, toggleTheme } = useTheme();
    const [themeClass, setThemeClass] = useState("");

    const handleThemeToggle = () => {
        toggleTheme();
        setThemeClass(isDarkMode ? "" : "theme-dark-mode");
    };

    return (
        <Nav fill variant="tabs" defaultActiveKey="/home" className={`navbar-custom ${themeClass}`}>
            <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#timeline">Timeline</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#papers">Papers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>

            {/* Button to toggle the theme */}
            <Nav.Item>
                <button onClick={handleThemeToggle} className="theme-toggle-button">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
