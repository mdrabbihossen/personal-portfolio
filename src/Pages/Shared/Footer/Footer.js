import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer text-center py-1 py-md-3 ">
      <div className="social-icon py-3 py-md-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/fazleybinmahbub26"
          className="mr-3"
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fazleybinmahbub26/"
          className="mr-3"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/FazleyBin-Mahbub"
          className="mr-3"
        >
          <FaGithub />
        </a>
      </div>
      <p> &copy; All rised reserved @MD Rabbi Hossen 2021</p>
    </div>
  );
};

export default Footer;
