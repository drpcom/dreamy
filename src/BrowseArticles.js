import React from 'react'
import './BrowseArticles.css';
import allArticles from './articles/allArticles';

const BrowseArticles = () => {
    return (
        <div className="browse-container">
            <div className="browse-header">
                <div className="browse-bar"></div>
                <div className="browse-title">Articles</div>
            </div>
            {allArticles.map((article, i) => {
                return (
                    <div key={i} className="mini-article-container">
                        <div className="mini-image-container">
                            <img src={article.imageOne} alt={article.id} />
                        </div>
                        <div className="mini-title">
                            <a href={article.route}>{article.title}</a>
                        </div>
                        <div className="mini-desc">{article.overview}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default BrowseArticles;
