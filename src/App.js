import './App.css';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Home from './Home.js';
import Browse from './Browse.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
        <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;