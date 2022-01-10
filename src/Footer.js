import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-heading">Explore</p>
                    <p>Browse Articles</p>
                    <p>Browse Tags</p>
                    <p>Random Article</p>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Overview</p>
                    <p>What is Dreamy.io?</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Terms of Use</p>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Additional Info</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimers</p>
                    <p>Patreon</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
