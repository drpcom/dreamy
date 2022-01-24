import React from 'react';
import { useEffect } from 'react';
import './BrowseTags.css';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import Banner from '../components/Banner';
import { useTagsFetch } from '../components/TagsFetch';


const BrowseTags = () => {
    
    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true-awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
    })
    
    // Grabs all tags from DB.
    const fetchTags = useTagsFetch()
    console.log(fetchTags.everyTag)
    
    // This chunk of code alphabetizes the array of all tags. 
    let arr = [];
    fetchTags.everyTag.forEach((tag) => {
        arr.push(tag)
    })
    let alphabetizedTags = arr.sort((a,b) => a.localeCompare(b));
    console.log(alphabetizedTags)

    return (
        <>
        <Banner name="Tags" link="/browse-tags" />
        <div className="browse-container">
            <div className="tags-content">
                {alphabetizedTags.map((tag, i) => {
                    return (
                        <div key={i} className="lonely-tag">
                            <a href={tag}>{tag}</a>
                            <p className="dashes">-</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default BrowseTags
