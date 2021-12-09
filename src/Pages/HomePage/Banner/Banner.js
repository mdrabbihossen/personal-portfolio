import React from "react";
import "./Banner.css";
import Typical from "react-typical";
const Banner = () => {
  return (
    <div>
      <div className="banner-title">
        <p>Hello! I'm</p>
        <h1>MD Rabbi Hossen</h1>
        <h2>
          <span className="text-white">I'm a</span>{" "}
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
        </h2>

        <div className="banner-btn">
          <a
            href="https://drive.google.com/file/d/1OeTuIXa20elDcsGYLnqW_j20HqDRtE2X/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="get-resume-btn">Get Resume</button>
          </a>
          <button className="about-btn">About</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
