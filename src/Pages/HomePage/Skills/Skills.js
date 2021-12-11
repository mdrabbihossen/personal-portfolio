import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h3>Skills</h3>
        <div className="bar"></div>
      </div>
      <div className="skills-content container">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>React JS</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={70}
            max={100}
            label={"70%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>React Router</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={80}
            max={100}
            label={"80%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>React Bootstrap</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={95}
            max={100}
            label={"95%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>Material UI</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={50}
            max={100}
            label={"50%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>Node JS</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={50}
            max={100}
            label={"50%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>Express JS</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={50}
            max={100}
            label={"50%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>MongoDB</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={60}
            max={100}
            label={"60%"}
          />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          data-aos-easing="ease-in-out"
          className="progress-content"
        >
          <h4>Firebase Authentication</h4>
          <ProgressBar
            striped
            variant="success"
            animated
            now={60}
            max={100}
            label={"60%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
