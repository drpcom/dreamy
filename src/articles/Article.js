import React, {useEffect} from 'react';
import './Article.css';
import LatestBlurb from '../LatestBlurb';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import { useSelector } from 'react-redux';
import { 
    incrementFlames, 
    incrementLove, 
    incrementSexy, 
    incrementNeutral,
    incrementFunny,
    incrementScary,
    incrementMindblowing,
    incrementSad } from '../features/counters';

const Article = ({title, triggerWarning, image, imageSubheading, tags, overview, interpretation, relatedArticles}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        let newArr = dispatch(add({ tags: tags}));
        console.log(newArr)
        return () => {
            dispatch(remove());
        }
        }, [dispatch, tags])

        const counters = useSelector(state => state.counters.value)
        console.log(counters)

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
                    <img src={image} alt={image} />
                    <p>{interpretation}</p>
                </div>
                <div className="article-content__section-three">
                    <LatestBlurb heading="Related Articles" titles={relatedArticles} />
                </div>
            </div>
        </div>
    )
}

export default Article
