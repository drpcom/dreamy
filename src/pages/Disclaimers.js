import React from 'react'
import Banner from '../components/Banner';

const Disclaimers = () => {
    return (
        <>
        <Banner name="Disclaimers" link="/disclaimers" />
        <div className="boh-container">
            <h1 className="boh-title">Disclaimers</h1>
            <h3 className="boh-content">Articles on Dreamy.io are crafted on a purely volunteer basis for the sole purpose of entertainment and should not be considered a source of scientific information. All information including dream interpretations are not guaranteed to be accurate or reliable.</h3>
            <h3 className="boh-content">Dreamy.io may contain content you find objectionable or triggering. We have attempted to mark articles on more risque topics but objectionable content may be marked or unmarked. Use Dreamy.io at your own risk.</h3>
        </div>
        </>
    )
}

export default Disclaimers;
