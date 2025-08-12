import "./App.css";
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsSection from "./components/Statsection";
import SuccessStories from "./components/Success";
import SolutionsSection from "./components/SolutionsSection";
import Footer from "./components/Footer";
import HiringSection from "./components/HiringSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SuccessStories />
      <BlogSection />
      <SolutionsSection />
      <HiringSection />
      <Footer />
    </>
  );
}

export default App;
