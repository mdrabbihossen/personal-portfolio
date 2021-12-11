import React from "react";
import Header from "../../Shared/Header/Header";

import "./Home.css";
import Banner from "../../Shared/Banner/Banner";
import About from "../../Shared/About/About";
import Skills from "../Skills/Skills";
import Projects from "../../Shared/Projects/Projects";
import Contact from "../../Shared/Contact/Contact";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
