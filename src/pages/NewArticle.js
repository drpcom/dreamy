import React from 'react';
import { useArticleFetch } from '../components/ArticleFetch';
import FeaturedBlurb from '../components/FeaturedBlurb';
import Card from './Card';
import {Link} from 'react-router-dom';

const NewArticle = () => {

    // Grabs all articles from DB.
    const fetch = useArticleFetch()
    console.log(fetch.allArticles)

  return (
      <div className="container">
      <h1>articles:</h1>
      {fetch.allArticles.length > 0 ? (
          fetch.allArticles.map((article) => {
              return (
                  <>
                  <Card 
                  key={article.id}
                  title={article.title}
                  desc={article.overview}
                  link={`/article/${article.route}`}
                  />
                  <FeaturedBlurb 
                    title={<Link to={article.route}>{article.title}</Link>}
                    image={article.image}
                    text={article.overview}
                    link={`/article/${fetch.allArticles[3].route}`}
                  />
                  </>
              )
          })
      ) : (
          <h1>Error fetching the articles :(</h1>
        )}

      </div>
  )
};

export default NewArticle;
