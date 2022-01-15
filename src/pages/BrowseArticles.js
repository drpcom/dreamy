import React, {useEffect} from 'react'
import './BrowseArticles.css';
import allArticles from '../articles/allArticles';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import Banner from '../components/Banner';

const BrowseArticles = () => {

    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
        })

    return (
        <>
        <Banner name="Articles" link="/browse-articles" />
        <div className="browse-container">
            {allArticles.map((article, i) => {
                return (
                    <div key={i} className="mini-article-container">
                        <div className="mini-image-container">
                            <img src={article.imageOne} alt={article.id} />
                        </div>
                        <div className="mini-title">
                            <a href={article.route}>{article.title}</a>
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
