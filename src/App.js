import './App.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Content from './Content.js';
import Browse from './Browse.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="main-container">
          <div className="main-content">
            <div className="main">
              <Content />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
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