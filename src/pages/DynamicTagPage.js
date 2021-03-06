import React, {useEffect} from 'react';
import { useArticleFetch } from '../components/ArticleFetch';
import { useParams } from 'react-router-dom';
import FeaturedBlurb from '../components/FeaturedBlurb';
import './DynamicTagPage.css';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import Banner from '../components/Banner';

const DynamicTagPage = () => {
    let params = useParams();

    // Grabs all articles from DB.
    const fetch = useArticleFetch()

    function Randomize(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
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
    fetch.allArticles.forEach((article) => {
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
        })

    // Show relevant articles in random order.
    let randArticles = Randomize(fetch.allArticles);

    return (
        <>
        <Banner name={params.id} link={params.id} />
        <div className="tags-page">
            <h1>"{params.id}"</h1>
            {randArticles.map((article, i) => {
                if (article.tags.includes(params.id)) {
                    return (
                        <div key={i}>
                            <FeaturedBlurb 
                            heading={null}
                            title={<a href={`/articles/${article.route}`}>{article.title}</a>}
                            triggered={article.triggered}
                            image={article.image}
                            text={article.overview}
                            link={`/article/${article.route}`}
                            />
                        </div>
                    )
                } else {
                   return null;
                }
            })}
        </div>
        </>
    )
    }

export default DynamicTagPage;
