import WebSlider from "../WebSlider/WebSlider";
import HomepageMapSection from "../Homepage-Map-Section/Homepage-Map-Section";
import HeroSection from "../HeroSection/HeroSection";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";

const Homepage = () => {
  return (
    <>
      {/* <Routes>
        <Route path="./about" element={<About />} />
      </Routes> */}
      <WebSlider />
      <HomepageMapSection />
      <HeroSection />
    </>
  );
};

export default Homepage;
