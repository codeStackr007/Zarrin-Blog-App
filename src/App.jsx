import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext";

import LandingPage from "./pages/LandingPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route path="/single-blog" element={<SingleBlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <DarkModeToggle />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
