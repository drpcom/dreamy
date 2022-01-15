import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BrowseArticles from './pages/BrowseArticles.js';
import BrowseTags from './pages/BrowseTags.js';
import Home from './pages/Home.js';
import DynamicTagPage from './pages/DynamicTagPage';
import ClassicFallDream from './articles/classic-fall-dream';
import YouKilledKenny from './articles/you-killed-kenny';
import DreamArguing from './articles/dream-arguing';
import PlanetHopping from './articles/planet-hopping';
import WhyAmIAlwaysInSchool from './articles/why-am-i-always-in-school';
import ConfusionIllusion from './articles/confusion-illusion';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimers from './pages/Disclaimers';

function App() {

  return (
    <Router>
        <Navbar />
        <div className="main-container">
          <div className="main-content">
            <div className="template">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/disclaimers" element={<Disclaimers />} />
                <Route path="/browse-articles" element={<BrowseArticles />} />
                <Route path="/browse-tags" element={<BrowseTags />} />
                <Route path=":id" element={<DynamicTagPage />} />
                <Route path="/classic-fall-dream" element={<ClassicFallDream />} />
                <Route path="/you-killed-kenny" element={<YouKilledKenny />} />
                <Route path="/dream-arguing" element={<DreamArguing />} />
                <Route path="/planet-hopping" element={<PlanetHopping />} />
                <Route path="/why-am-i-always-in-school" element={<WhyAmIAlwaysInSchool />} />
                <Route path="/confusion-illusion" element={<ConfusionIllusion />} />
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