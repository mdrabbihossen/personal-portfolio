import React from "react";
import "./Banner.css";
import Typical from "react-typical";
import image from "../../../images/banner.png";
const Banner = () => {
  return (
    <div id="home" className="banner">
      <div className="banner-title">
        <p>Hello! I'm</p>
        <h1>MD Rabbi Hossen</h1>
        <span>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Front End Developer",
              500,
              "React JS Developer",
              500,
              "Web Developer",
              500,
            ]}
          />
        </span>

        <div className="banner-btn">
          <a
            href="https://drive.google.com/file/d/1OeTuIXa20elDcsGYLnqW_j20HqDRtE2X/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="get-resume-btn fw-bolder">Get Resume</button>
          </a>
          <button className="about-btn fw-bolder">About</button>
        </div>
      </div>
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-center"
        data-aos-easing="ease-in-out"
        src={image}
        alt="fazley"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
