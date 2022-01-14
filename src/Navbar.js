import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import dice from './images/dice.png';
import SearchBar from './SearchBar.js';
import allArticles from './articles/allArticles';
import allTags from './articles/allTags';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        console.log(click)
    }

    const Close = () => {
        setClick(false);
    }

    return (
        <>
        <nav className="nav-container">
            <div className="nav-left">
                <div className="nav-logo">
                    <Link to="/" className="nav-logo__img">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                    </Link>
                    <Link to="/" className="nav-logo__title">dreamy.io</Link>
                </div>
                <Link to="/browse-articles" className="nav-link">Articles</Link>
                <p className="nav-divider">|</p>
                <Link to="/browse-tags" className="nav-link">Tags</Link>
            </div>
            <div className="nav-right">
                <div className="nav-search">
                    <SearchBar allArticles={allArticles} allTags={allTags} />
                </div>
                <Link to="/random" className="nav-link"><img src={dice} alt="dice" /></Link>
                <div className="nav-menu" onClick={() => handleClick()}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>
            </div>
        </nav>
        <div className={click ? "dropdown-open" : "dropdown-closed"}>
            <Link to="/browse-articles" className="nav-link__burgered" onClick={() => Close()}>Articles</Link>
            <Link to="/browse-tags" className="nav-link__burgered" onClick={() => Close()}>Tags</Link>
            <Link to="/random" className="nav-link__burgered" onClick={() => Close()}>Random</Link>
        </div>
        </>
    )
}

export default Navbar
