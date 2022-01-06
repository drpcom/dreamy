import React from 'react';
import './LatestBlurb.css';

const LatestBlurb = ({heading, titleOne, titleTwo, titleThree, titleFour, titleFive}) => {
    return (
        <div className="latest-container">
            <div className="latest-heading">
                <p>{heading}</p>
            </div>
            <div className="latest-content">
                <p>{titleOne}</p>
                <p>{titleTwo}</p>
                <p>{titleThree}</p>
                <p>{titleFour}</p>
                <p>{titleFive}</p>
            </div>
        </div>
    )
}

export default LatestBlurb
