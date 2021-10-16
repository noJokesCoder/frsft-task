/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//import styles and image
import "./Nav-bar.scss";
import logoAndtext from "./../../images/freysoft-text-logo.png";
import contactIcon from "./../../images/Contact.png";
import menuIcon from "./../../images/menu.png";

export const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src={logoAndtext} alt="company's logo" />
          </div>
          <div className="header__nav">
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#s">Blog</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className="header__contact-icon">
            <img src={contactIcon} alt="" />
          </div>
          <button className="header__button">Contact Us</button>
          <div className="header__menu-icon">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
