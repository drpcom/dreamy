import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import imgTwoPlaceholder from '../images/imgTwoPlaceholder1.jpg';
import { useArticleFetch } from '../components/ArticleFetch';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import './DynamicArticle.css';
import Banner from '../components/Banner';

const DynamicArticle = () => {
    
    let params = useParams();

    // Grabs all articles from DB.
    const fetch = useArticleFetch()

    // Finds single relevant article.
    const myArticle = [];
    fetch.allArticles.forEach((article) => {
        if (article.route === params.id) {
            myArticle.push(article)
        }
    })

    const dispatch = useDispatch();

    useEffect(() => {
            if (myArticle.length > 0) {
                dispatch(add({ tags: myArticle[0].tags}));
                return () => {
                    dispatch(remove());
                }
            }
        })

    // Grab the last five articles in the big array.
    const lastFive = fetch.allArticles.slice(-5);

  return (
      <>
      {myArticle.length > 0 && 
            <>
            <Banner name={myArticle[0].route} link="/browse-tags"/>
            <div className="article-container">
            <div className="article-title">
                <h1>{myArticle[0].title}</h1>
                {myArticle[0].triggered ? <h4 className="trigger">[trigger warning]</h4> : null}
            </div>
            <div className="article-content">
                <div className="article-content__section-one">
                    <div className="section-one__image">
                        <img src={myArticle[0].image} alt={myArticle[0].title} />
                        <div className="image-subheading-container-one">
                            <p>{myArticle[0].subheading}</p>
                        </div>
                        <div className="image-subheading-container-two">
                            <p>Credit: {myArticle[0].credit} <a href="http://Unsplash.com">Unsplash</a></p>
                        </div>
                    </div>

                    <p>{myArticle[0].overview}</p>
                </div>
                <div className="article-content__section-two">
                    <h2>Possible Interpretation</h2>
                    <img src={imgTwoPlaceholder} alt={imgTwoPlaceholder} />
                    <p>{myArticle[0].interpretation}</p>
                </div>
                <div className="article-content__section-three">
                <div className="latest-container">
                    <div className="latest-heading">
                        <p>Latest Articles</p>
                    </div>
                    {lastFive.map((item, i) => {
                        return (
                            <div key={i} className="latest-content">
                                <a href={item.route}>{item.title}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
            </div>
            </>
        }
      </>
    );
};

export default DynamicArticle;
