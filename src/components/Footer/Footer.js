import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"; 
import { FaStackOverflow } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/santhosh140424" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://stackoverflow.com/users/yourid" target="_blank" rel="noreferrer">
          <FaStackOverflow />
        </a>
        <a href="https://linkedin.com/in/santhosh-kumar-9aa4ba382" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
      <p className="footer-copy">© Copyright 2026 Santhosh Kumar</p>
    </footer>
  );
};

export default Footer;
