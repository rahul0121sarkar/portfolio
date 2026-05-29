import React from "react";
import Navbar from "./sections/Navbar";
import Herobanner from "./sections/Herobanner";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Herobanner />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
};

export default App;
