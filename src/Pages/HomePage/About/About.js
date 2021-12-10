import React from "react";
import "./About.css";
import aboutImg from "../../../images/about-img.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h3>About</h3>
        <div className="about-bar"></div>
      </div>
      <div className="about-content">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="about-text"
        >
          <p>
            Hello! I'm MD Rabbi Hossen, a passionate React JS developer. I
            develop web applications. My core skill is based on JavaScript and I
            love to do most of the things using JavaScript and React. I love to
            make the web more open to the world.I'm studying Diploma in Computer
            Engineering at Gazipur Ideal Polytechnic Institute. I am available
            for any kind of job opportunity that suits my interests.
          </p>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <button className="get-resume-btn">Get Resume</button>
            <button className="skills-btn">Skills</button>
          </div>
        </div>
        <img
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="about-img"
          src={aboutImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
