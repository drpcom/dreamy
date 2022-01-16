import React, {useEffect} from 'react';
import './Home.css';
import FeaturedBlurb from '../components/FeaturedBlurb.js';
import { Link } from 'react-router-dom';
import allArticles from '../articles/allArticles';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';

const Home = () => {
    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
        })

    const lastFive = allArticles.slice(-5);

    return (
        <div className="home-container">
            <div className="welcome-banner">
                <div className="welcome-title">
                    <p>dreamy.io</p>
                </div>
                <div className="welcome-subtitle">
                    <p>You up?</p>
                </div>
            </div>
            <div className="section-one">
                <FeaturedBlurb 
                heading="Featured Entry" 
                title={<Link to={allArticles[0].route}>{allArticles[0].title}</Link>}
                image={allArticles[0].imageOne}
                text={allArticles[0].overview}
                link={allArticles[0].route}
                />
                <FeaturedBlurb 
                heading="Newest Entry" 
                title={<Link to={allArticles[1].route}>{allArticles[1].title}</Link>}
                image={allArticles[1].imageOne}
                text={allArticles[1].overview}
                link={allArticles[1].route}
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
                                <Link to={item.route}>{item.title}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="section-three">
                <FeaturedBlurb 
                heading="Discover" 
                title={<Link to={allArticles[3].route}>{allArticles[3].title}</Link>}
                image={allArticles[3].imageOne}
                text={allArticles[3].overview}
                link={allArticles[3].route}
                />
            </div>
        </div>
    )
}

export default Home
