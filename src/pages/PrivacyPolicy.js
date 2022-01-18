import React from 'react'
import Banner from '../components/Banner';

const PrivacyPolicy = () => {
    return (
        <>
        <Banner name="Privacy Policy" link="/privacy-policy" />
        <div className="boh-container">
            <h1 className="boh-title">Privacy Policy</h1>
            <h3 className="boh-content">Through the use of cookies, Dreamy.io records clicks to the various 'emojji buttons' at the top of each article.</h3>
            <h3 className="boh-content">Cookies are small text files placed in device browsers to store your preferences, and facilitate and otherwise enhance your experience. Most browsers allow you to block and delete cookies, if you wish.</h3>
        </div>
        </>
    )
}

export default PrivacyPolicy;