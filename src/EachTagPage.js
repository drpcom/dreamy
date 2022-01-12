import React from 'react';
import allArticles from './articles/allArticles';
import { useParams } from 'react-router-dom';
import FeaturedBlurb from './FeaturedBlurb';
import './EachTagPage.css';

const EachTagPage = () => {
    let params = useParams();

    return (
        <div className="tags-page">
            <h1>"{params.id}"</h1>
            {allArticles.map((article, i) => {
                if (article.tags.includes(params.id)) {
                    return (
                        <div key={i}>
                        <FeaturedBlurb 
                        heading={null}
                        title={<a href={article.route}>{article.title}</a>}
                        image={article.imageOne}
                        text={article.overview}
                        link={article.route}
                        />
                        </div>
                    )
                } else {
                   return null;
                }
            })}
        </div>
    )
    }

export default EachTagPage;
