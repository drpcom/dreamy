import './App.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Content from './Content.js';
import BrowseArticles from './BrowseArticles.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import BrowseTags from './BrowseTags.js'
import EachTagPage from './EachTagPage';
import allTags from './articles/allTags';
import Falling from './articles/falling';
import YouKilledKenny from './articles/you-killed-kenny';
import DreamArguing from './articles/dream-arguing';
import PlanetHopping from './articles/planet-hopping';
import WhyAmIAlwaysInSchool from './articles/why-am-i-always-in-school';
import ConfusionIllusion from './articles/confusion-illusion';

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
                <Route path="/browse-articles" element={<BrowseArticles />} />
                <Route path="/browse-tags" element={<BrowseTags />} />
                <Route path="/classic-fall-dream" element={<Falling />} />
                <Route path="/you-killed-kenny" element={<YouKilledKenny />} />
                <Route path="/dream-arguing" element={<DreamArguing />} />
                <Route path="/planet-hopping" element={<PlanetHopping />} />
                <Route path="/why-am-i-always-in-school" element={<WhyAmIAlwaysInSchool />} />
                <Route path="/confusion-illusion" element={<ConfusionIllusion />} />
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