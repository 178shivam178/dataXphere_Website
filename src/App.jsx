import "./App.css";
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsSection from "./components/Statsection";
import AboutSection from "./components/AboutSection";
import SuccessStories from "./components/Success";
import SolutionsSection from "./components/SolutionsSection";
import Footer from "./components/Footer";
import HiringSection from "./components/HiringSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Careers from "./pages/Careers";

function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />

      <section id="solution">
        <SolutionsSection />
      </section>
      <section id="success">
        <SuccessStories />
      </section>
      <section id="insight">
        <BlogSection />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
