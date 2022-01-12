import React, {useEffect} from 'react';
import allArticles from './articles/allArticles';
import { useParams } from 'react-router-dom';
import FeaturedBlurb from './FeaturedBlurb';
import './EachTagPage.css';
import { useDispatch } from 'react-redux';
import { add } from './features/tagsList';
import { remove } from './features/tagsList';

const EachTagPage = () => {
    let params = useParams();

    let tagsOnTags = [];
    let newArr = [];
    // let tagsOnTags = ['exhilarating', 'fear', 'true awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh', 'anxiety', 'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']
    allArticles.forEach((article) => {
        if (article.tags.includes(params.id)) { 
            newArr.push(article.tags)
            let merged = [].concat.apply([], newArr);
            let uniqueTags = [...new Set(merged)]; // array of unique tags based on relevant articles.
            tagsOnTags = uniqueTags;
        }
    })
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(add({ tags: tagsOnTags}));
        return () => {
            dispatch(remove());
        }
        }, [dispatch, tagsOnTags])

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
