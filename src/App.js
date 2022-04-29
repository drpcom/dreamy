import React, { useLayoutEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import BrowseArticles from "./pages/BrowseArticles.js";
import BrowseTags from "./pages/BrowseTags.js";
import Create from "./pages/Create.js";
import Home from "./pages/Home.js";
import DynamicTagPage from "./pages/DynamicTagPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimers from "./pages/Disclaimers";
import DynamicArticle from "./pages/DynamicArticle";

function App() {
  // Forces scroll to top whenever pages refresh.
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

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
                <Route path=":id" element={<DynamicTagPage />} />
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
