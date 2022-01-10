import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-heading">Explore</p>
                    <p>Browse</p>
                    <p>Tags</p>
                    <p>Random</p>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Overview</p>
                    <p>What is Dreamy.io?</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Terms of Use</p>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Info</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimers</p>
                    <p>Patreon</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
