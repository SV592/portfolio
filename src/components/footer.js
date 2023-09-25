import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../styles/footer.css"; // Import a CSS file for custom styling

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MyFooter() {
    return (
        <Navbar bg="dark" variant="dark" className="footer-custom">
            <Container fluid className="d-flex justify-content-center align-items-center">
                <Navbar.Text className="footer-text">
                    &copy; 2023 Shaquille Pearson
                </Navbar.Text>

            </Container>
        </Navbar>
    );
}

export default MyFooter;
