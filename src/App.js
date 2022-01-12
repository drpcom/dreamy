import './App.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Content from './Content.js';
import Browse from './Browse.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Falling from './articles/falling';
import YouKilledKenny from './articles/you-killed-kenny';
import EachTagPage from './EachTagPage';
import allTags from './articles/allTags';

function App() {

  return (
    <Router>
        <Navbar />
        {allTags.map((tag) => {
          <Link to={tag.id} />
        })}
        <div className="main-container">
          <div className="main-content">
            <div className="main">
              <Content />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/falling" element={<Falling />} />
                <Route path="/you-killed-kenny" element={<YouKilledKenny />} />
                <Route path=":id" element={<EachTagPage />} />
              </Routes>
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
    </Router>
  );
}

export default App;