import React, {useEffect} from 'react'
import './BrowseArticles.css';
import { useArticleFetch } from '../components/ArticleFetch';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const BrowseArticles = () => {

    // Grabs all articles from DB.
    const fetch = useArticleFetch()
    console.log(fetch.allArticles)

    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true-awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']

    const dispatch = useDispatch();

    // Puts article array into alphabetical order.
    const sortArray = (x,y) => {
        return x.title.localeCompare(y.title);
    }
    fetch.allArticles.sort(sortArray);

    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
        })

    return (
        <>
        <Banner name="Articles" link="/articles" />
        <div className="browse-container">
            {fetch.allArticles.map((article, i) => {
                return (
                    <div key={i} className="mini-article-container">
                        <div className="mini-image-container">
                            <Link to={article.route}><img src={article.image} alt={article.image} /></Link>
                        </div>
                        <div className="mini-title-container">
                            <div className="mini-title">
                                <Link to={article.route}>{article.title}</Link>
                                {article.triggered ? <sup className="t-w">[TW]</sup> : null}
                            </div>                       
                        </div>
                        <div className="mini-desc-container">
                            <p className="mini-desc">{article.overview}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default BrowseArticles;
