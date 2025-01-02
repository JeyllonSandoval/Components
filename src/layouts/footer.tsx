import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <section className="footer-title">
                <h2>Components</h2>
            </section>
            <section className="footer-menu">
                <li><a href="">Home</a></li>
                <li><a href="">Components</a></li>
                <li><a href="">About</a></li>
            </section>
            <section className="footer-social">
                <a target="_blank" href="https://github.com/JeyllonSandoval/Components" ><button>GitHub</button></a>
            </section>

        </footer>
    );
}

export default Footer;