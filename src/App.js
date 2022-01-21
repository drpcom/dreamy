import React, {useLayoutEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import BrowseArticles from './pages/BrowseArticles.js';
import BrowseTags from './pages/BrowseTags.js';
import Create from './pages/Create.js';
import NewArticle from './pages/NewArticle.js';
import Home from './pages/Home.js';
import DynamicTagPage from './pages/DynamicTagPage';
import Freefallin from './articles/freefallin';
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
import WowImBald from './articles/wow-im-bald';
import IMetLiamNeeson from './articles/i-met-liam-neeson';
import SloMo from './articles/slo-mo';
import Spiders from './articles/spiders';
import Succubus from './articles/succubus';
import TakingExams from './articles/taking-exams';
import ArticleHome from './pages/ArticleHome';
import DynamicArticle from './pages/DynamicArticle';

function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  return (
    <Router>
    <Wrapper>
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
              <Route path="/articles" element={<BrowseArticles />} />
              <Route path="/browse-tags" element={<BrowseTags />} />
              <Route path="/create" element={<Create />} />
              <Route path="/new-article" element={<NewArticle />} />
              <Route path=":id" element={<DynamicTagPage />} />
              <Route path="/freefallin" element={<Freefallin />} />
              <Route path="/you-killed-kenny" element={<YouKilledKenny />} />
              <Route path="/dream-arguing" element={<DreamArguing />} />
              <Route path="/planet-hopping" element={<PlanetHopping />} />
              <Route path="/why-am-i-always-in-school" element={<WhyAmIAlwaysInSchool />} />
              <Route path="/confusion-illusion" element={<ConfusionIllusion />} />
              <Route path="/wow-im-bald" element={<WowImBald />} />
              <Route path="/i-met-liam-neeson" element={<IMetLiamNeeson />} />
              <Route path="/slo-mo" element={<SloMo />} />
              <Route path="/spiders" element={<Spiders />} />
              <Route path="/succubus" element={<Succubus />} />
              <Route path="/taking-exams" element={<TakingExams />} />
              <Route path="/article-home" element={<ArticleHome />} />
              <Route path="/articles/:id" element={<DynamicArticle />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;