import React from 'react';
import { useEffect } from 'react';
import allTags from './articles/allTags';
import './BrowseTags.css';
import { useDispatch } from 'react-redux';
import { add } from './features/tagsList';
import { remove } from './features/tagsList';

const BrowseTags = () => {

    const baseTags = ['anxiety', 'exhilarating', 'fear', 'true awakening', 'recurring', 'super powers', 'death', 'frustration', 'bruh',  'childhood', 'funny', 'phobia', 'woke up mad', 'sex', 'pre-human']

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(add({ tags: baseTags}));
        return () => {
            dispatch(remove());
        }
        })

    return (
        <div className="browse-container">
            <div className="browse-header">
                <div className="browse-bar"></div>
                <div className="browse-title">Tags</div>
            </div>
            <div className="tags-content">
                {allTags.map((tag) => {
                    return (
                        <div className="lonely-tag">
                            <a href={tag.id}>{tag.id}</a>
                            <p className="dashes">-</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrowseTags
