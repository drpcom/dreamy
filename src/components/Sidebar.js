import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from './tagSearch.js';
import allTags from './allTags';

const Sidebar = () => {

    const tagsList = useSelector(state => state.tagsList.value)
    console.log(tagsList.tags)

    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <h2>Tags</h2>
            </div>
            <div className="sidebar-search">
                <SearchBar allTags={allTags} />
            </div>
            <div className="sidebar-content">
                {tagsList.tags ? tagsList.tags.map((item, i) => {
                    return (
                            <Link to={item} key={i}>{item}</Link>
                    )
                }) : null }
            </div>
        </div>
    )
}

export default Sidebar
    