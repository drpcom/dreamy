import React from 'react';
import allTags from './articles/allTags';
import './BrowseTags.css';

const BrowseTags = () => {
    return (
        <div className="browse-container">
            <div className="browse-header">
                <div className="browse-bar"></div>
                <div className="browse-title">Tags</div>
            </div>
            <div className="tags-content">
                {allTags.map((tag) => {
                    return (
                        <div className="lonely-tag">
                            <a href={tag.id}>{tag.id}</a>
                            <p className="dashes">-</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrowseTags
