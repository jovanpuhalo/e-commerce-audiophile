import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import MainMenu from "../Menues/MainMenu/MainMenu";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="orange-line">
        <div></div>
      </div>

      <MainMenu hideCartIcon={true} className="footer-menu" />

      <div className="footer">
        <div className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
          <span> Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="footer__social">
          <ul>
            <li>
              <a href="https://facebook.com">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
