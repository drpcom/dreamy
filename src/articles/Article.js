import React from 'react';
import './Article.css';
import LatestBlurb from '../LatestBlurb';

const Article = ({title, image, tags, overview, interpretation}) => {
    return (
        <div className="article-container">
            <div className="article-header">
                <div className="article-header__header-section"></div>
                <div className="article-header__buttons-container">
                    <button className="article-button">Top 5</button>
                    <button className="article-button">again</button>
                    <button className="article-button">friend of a friend</button>
                    <button className="article-button">i knew you were</button>
                </div>
            </div>
            <div className="article-title">
                <h1>{title}</h1>
            </div>
            <div className="article-content">
                <div className="article-content__section-one">
                    <div className="section-one__image">
                        <img src={image} alt={image} />
                        <div className="image-subheading-container">
                            <p>Hello again friend of a friend I knew you were. Hello again friend of a friend I knew you were. Hello again friend of a friend I knew you were. Hello again friend of a friend I knew you were. Hello again friend of a friend I knew you were. Hello again friend of a friend I knew you were.</p>
                        </div>
                    </div>

                    <p>{overview}</p>
                </div>
                <div className="article-content__section-two">
                    <h2>Possible Interpretation</h2>
                    <img src={image} alt={image} />
                    <p>{interpretation}</p>
                </div>
                <div className="article-content__section-three">
                    <LatestBlurb heading="Related Articles" titles={["dunsparce", "blaziken", "dusklops", "tropius", "metagross", "lugia"]} />
                </div>
            </div>
        </div>
    )
}

export default Article
