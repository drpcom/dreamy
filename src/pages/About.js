import React from 'react'
import Banner from '../components/Banner';
import './Boh.css';

const About = () => {
    return (
        <>
        <Banner name="About" link="/about" />
        <div className="boh-container">
            <h1 className="boh-title">What is Dreamy?</h1>
            <h3 className="boh-content">Have you ever woken up in the middle of the night with a strange dream and wondered what it meant? <strong>Well, you've come to the right place.</strong></h3>
            <h3 className="boh-content">Dreamy is an encyclopedia of dreams and their interpretations. Just use the search box and start digging! Alternatively, you can <a href="/articles">browse articles</a> and <a href="browse-tags">tags.</a> ⁕</h3>
        </div>
        </>
    )
}

export default About;
