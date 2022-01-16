import React from 'react'
import Banner from '../components/Banner';

const PrivacyPolicy = () => {
    return (
        <>
        <Banner name="Privacy Policy" link="/privacy-policy" />
        <div className="boh-container">
            <h1 className="boh-title">Privacy Policy</h1>
            <h3 className="boh-content">Privacy policy tells how i am using your personal information. this website uses cookies to store emoji clicks on articles. that is all.</h3>
        </div>
        </>
    )
}

export default PrivacyPolicy;