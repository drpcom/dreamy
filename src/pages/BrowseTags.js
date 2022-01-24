import React from 'react';
import { useEffect, useState } from 'react';
import allTags from '../components/allTags';
import './BrowseTags.css';
import { useDispatch } from 'react-redux';
import { add } from '../features/tagsList';
import { remove } from '../features/tagsList';
import Banner from '../components/Banner';
import { db } from '../backend/firebase_config';

const BrowseTags = () => {

    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true-awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
        })
    
    const [everyTag, setEveryTag] = useState([]);
        useEffect(() => {
            
            const retrieveAll = async () => {
                try {
                    const tagRef = db.collection("Tags").doc('9mbewr5gGihaX2sefiOG');
                    const document = await tagRef.get();

                    const data = document.data().tags;
                    setEveryTag(data)
                    console.log('data is:', everyTag)
                    
                } catch (error) {
                    console.log("Unable to grab tags :(")
                }
            }
            
            retrieveAll();
            
        },[])


    // This chunk of code alphabetizes the array of all tags. 
    let arr = [];
    everyTag.forEach((tag) => {
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
