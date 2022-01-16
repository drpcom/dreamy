import React from 'react'
import Banner from '../components/Banner';
import './Boh.css';

const About = () => {
    return (
        <>
        <Banner name="About" link="/about" />
        <div className="boh-container">
            <h1 className="boh-title">What is Dreamy.io?</h1>
            <h3 className="boh-content">A hustler's paradise. An encyclopedia of dreams. I'm honestly surprised this hasn't been done before. Wait, this has definitely been done. But I'm gonna do it in STYLE. Join me in my journey. ⁕</h3>
        </div>
        </>
    )
}

export default About;
