import React from 'react'
import Banner from '../components/Banner';

const Terms = () => {
    return (
        <>
        <Banner name="Terms of Use" link="/terms" />
        <div className="boh-container">
            <h1 className="boh-title">Terms of Use</h1>
            <h3 className="boh-content">Articles and content on Dreamy.io (excluding photos, all of which are provided by Unsplash) are the exclusive property of Dreamy.io and are protected by copyright and intellectual property laws, all rights reserved.</h3>
            <h3 className="boh-content">Any reproduction of this site's content should be allowed only with the expressed permission of the <a href="/contact">webmaster</a>.</h3>
        </div>
        </>
    )
}

export default Terms;