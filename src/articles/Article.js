import React, {useEffect} from 'react';
import './Article.css';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import allArticles from './allArticles';

const Article = ({title, triggerWarning, image, imageSubheading, imageTwo, tags, overview, interpretation, relatedArticles}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(add({ tags: tags}));
        return () => {
            dispatch(remove());
        }
        }, [dispatch, tags])

    const lastFive = allArticles.slice(-5);

    return (
        
        <div className="article-container">
            <div className="article-title">
                <h1>{title}</h1>
                {triggerWarning ? <h4 className="trigger">[trigger warning]</h4> : null}
            </div>
            <div className="article-content">
                <div className="article-content__section-one">
                    <div className="section-one__image">
                        <img src={image} alt={image} />
                        <div className="image-subheading-container">
                            <p>{imageSubheading}</p>
                        </div>
                    </div>

                    <p>{overview}</p>
                </div>
                <div className="article-content__section-two">
                    <h2>Possible Interpretation</h2>
                    <img src={imageTwo} alt={imageTwo} />
                    <p>{interpretation}</p>
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
    )
}

export default Article
