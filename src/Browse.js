import React from 'react'
import './Browse.css';
import allArticles from './articles/allArticles';

const Browse = () => {
    return (
        <div className="browse-container">
            <div className="browse-header">
                <div className="browse-bar"></div>
                <div className="browse-title">Articles</div>
            </div>
            {allArticles.map((article, i) => {
                return (
                    <div key={i} className="mini-article-container">
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

export default Browse
