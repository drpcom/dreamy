import React, {useEffect} from 'react';
import './Home.css';
import FeaturedBlurb from '../components/FeaturedBlurb.js';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import { useArticleFetch } from '../components/ArticleFetch';

const Home = () => {

    // Grabs all articles from DB.
    const fetch = useArticleFetch()
    console.log(fetch.allArticles)
    
    // Initialize tags and dispatch to store.
    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
        })

    const lastFive = fetch.allArticles.slice(-5);
    console.log(fetch.allArticles)

    return (
        <>
        {fetch.allArticles.length > 0 && (
        <div className="home-container">
            <div className="welcome-banner">
                <div className="welcome-title">
                    <a href="/about"><p>dreamy.io</p></a>
                </div>
                <div className="welcome-subtitle">
                    <p>You up?</p>
                </div>
            </div>
            <div className="section-one">
                <FeaturedBlurb 
                heading=":: Featured Entry ::" 
                title={<Link to={`/articles/${fetch.allArticles[0].route}`}>{fetch.allArticles[0].title}</Link>}
                triggered={fetch.allArticles[0].triggered}
                image={fetch.allArticles[0].image}
                text={fetch.allArticles[0].overview}
                link={`/articles/${fetch.allArticles[0].route}`}
                />
                <FeaturedBlurb 
                heading="::Newest Entry ::" 
                title={<Link to={`/articles/${fetch.allArticles[1].route}`}>{fetch.allArticles[1].title}</Link>}
                triggered={fetch.allArticles[1].triggered}
                image={fetch.allArticles[1].image}
                text={fetch.allArticles[1].overview}
                link={`/articles/${fetch.allArticles[1].route}`}
                />
            </div>
            <div className="section-two">
                <div className="latest-container">
                    <div className="latest-heading">
                        <p>Latest</p>
                    </div>
                    {lastFive.map((item, i) => {
                        return (
                            <div key={i} className="latest-content">
                                <Link to={`/articles/${item.route}`}>{item.title}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="section-three">
                <FeaturedBlurb 
                heading=":: Discover ::" 
                title={<Link to={`/articles/${fetch.allArticles[2].route}`}>{fetch.allArticles[2].title}</Link>}
                triggered={fetch.allArticles[2].triggered}
                image={fetch.allArticles[2].image}
                text={fetch.allArticles[2].overview}
                link={`/articles/${fetch.allArticles[2].route}`}
                />
            </div>
        </div>
        )
                }
        </>
    )
}

export default Home
