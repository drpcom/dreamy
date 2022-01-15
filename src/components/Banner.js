import React from 'react';
import './Banner.css';

const Banner = ({name, link}) => {
    return (
        <div className="banner-container">
            <div className="banner">
                <p className="slashAndHome"><a href="/">Home</a></p>
                <p className="slashAndLink">/ <a href={link}>{name}</a></p>
            </div>
        </div>
    )
}

export default Banner
