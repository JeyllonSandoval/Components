import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <section className="footer-title">
                <h2>Components</h2>
            </section>
            <section className="footer-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/components">Components</a></li>
                <li><a href="/about">About</a></li>
            </section>
            <section className="footer-social">
                <a target="_blank" href="https://github.com/JeyllonSandoval/Components" ><button>GitHub <i className="lni lni-github"></i></button></a>
            </section>

        </footer>
    );
}

export default Footer;