import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-heading">Explore</p>
                    <NavLink to="/browse-articles"><p>Browse Articles</p></NavLink>
                    <NavLink to="/browse-tags"><p>Browse Tags</p></NavLink>
                    <p>Random Article</p>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Overview</p>
                    <NavLink to="/about"><p>What is Dreamy.io?</p></NavLink>
                    <NavLink to="/contact"><p>Contact Us</p></NavLink>
                    <NavLink to="/terms"><p>Terms of Use</p></NavLink>
                </div>
                <div className="footer-section">
                    <p className="footer-heading">Additional Info</p>
                    <NavLink to="/privacy-policy"><p>Privacy Policy</p></NavLink>
                    <NavLink to="/disclaimers"><p>Disclaimers</p></NavLink>
                    <p>Patreon</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
