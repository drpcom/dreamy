import './App.css';
import Navbar from './Navbar.js';
import Tags from './Tags.js';
import Home from './Home.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tags />
      <div className="main-container">
        <div className="main-content">
          <Home />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
