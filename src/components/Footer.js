import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { useArticleFetch } from './ArticleFetch';

const Footer = () => {

    // Grabs all articles from DB.
    const fetch = useArticleFetch()
    console.log(fetch.allArticles)

    // Logic for the random article button.
    let routeArray = [];
        fetch.allArticles.forEach((article) => {
            const wholeRoute = "/articles/" + article.route
            routeArray.push(wholeRoute);
        })
        let random = Math.floor(Math.random() * routeArray.length)

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-heading">Explore</p>
                    <NavLink to="/articles"><p>Browse Articles</p></NavLink>
                    <NavLink to="/browse-tags"><p>Browse Tags</p></NavLink>
                    <a href={routeArray[random]}><p>Random Article</p></a>
                {/* invisible until auth    <NavLink to="/create"><p>Create New</p></NavLink>  */}
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
                </div>
            </div>
        </div>
    )
}

export default Footer
