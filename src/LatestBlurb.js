import React from 'react';
import './LatestBlurb.css';

const LatestBlurb = ({heading, titles}) => {
    return (
        <div className="latest-container">
            <div className="latest-heading">
                <p>{heading}</p>
            </div>
            <div className="latest-content">
                {titles.map((title, i) => {
                    return (
                        <p key={i}>{title}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default LatestBlurb
