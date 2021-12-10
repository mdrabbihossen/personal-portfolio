import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import "./Home.css";
import About from "../About/About";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
