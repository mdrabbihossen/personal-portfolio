import React from "react";
import {
  FaFacebook,
  TiSocialLinkedinCircular,
  AiFillGithub,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer text-center py-1 py-md-3 ">
      <div className="social-icon py-3 py-md-4">
        <a href="https://web.facebook.com/noman.apparel.4003/" className="mr-3">
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/md-abdulla-al-noman-0701171ba/"
          className="mr-3"
        >
          <TiSocialLinkedinCircular />
        </a>
        <a href="https://github.com/mdabdullaalnoman" className="mr-3">
          <AiFillGithub />
        </a>
      </div>
      <p> All rised reserved &copy; MD Rabbi Hossen @2021</p>
    </div>
  );
};

export default Footer;
