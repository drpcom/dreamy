import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import allArticles from '../articles/allArticles';

const Footer = () => {

    // Logic for the random article button.
    let routeArray = [];
        allArticles.forEach((article) => {
            routeArray.push(article.route);
        })
        let random = Math.floor(Math.random() * routeArray.length)

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-heading">Explore</p>
                    <NavLink to="/browse-articles"><p>Browse Articles</p></NavLink>
                    <NavLink to="/browse-tags"><p>Browse Tags</p></NavLink>
                    <a href={routeArray[random]}><p>Random Article</p></a>
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
