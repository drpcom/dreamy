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

    function Randomize(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    let tagsOnTags = [];
    let newArr = [];
    allArticles.forEach((article) => {
        if (article.tags.includes(params.id)) { 
            newArr.push(article.tags)
            let merged = [].concat.apply([], newArr);
            let uniqueTags = [...new Set(merged)]; // Array of unique tags based on relevant articles.
            let trueTags = Randomize(uniqueTags); // Randomize array
            tagsOnTags = trueTags.slice(0,20); // Show max 20 results.
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
