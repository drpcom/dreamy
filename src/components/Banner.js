import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({name, link}) => {
    return (
        <div className="banner-container">
            <div className="banner">
                <p className="slashAndHome"><Link to="/">Home</Link></p>
                <p className="slashAndLink">/ <a href={link}>{name}</a></p>
            </div>
        </div>
    )
}

export default Banner
