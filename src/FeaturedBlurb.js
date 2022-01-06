import React from 'react';
import './FeaturedBlurb.css';

const FeaturedBlurb = ({heading, title, image, text, url}) => {
    return (
        <div className="featured-container">
            <div className="featured-heading">
                {heading}
            </div>
            <div className="featured-title">{title}</div>
            <div className="featured-content">
                <img src={image} alt={image} /><p>{text}</p>
            </div>
            <a href={url}>More...</a>
        </div>
    )
}

export default FeaturedBlurb
