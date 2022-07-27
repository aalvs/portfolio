import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        André Alves
      </a>
      <ul className="footer_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/aalvs/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/aalvs" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/aalvds/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; André Alves. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
