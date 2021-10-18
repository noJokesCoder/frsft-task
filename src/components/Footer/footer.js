/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";

//social media icons

import FB from "./../../images/facebook_ic.png";
import TWTR from "./../../images/twitter_ic.png";
import LN from "./../../images/linkedin_ic.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__copy">
            <p>© 2018-2021 FREYSOFT. All rights reserved</p>
          </div>
          <div className="footer__nav">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy policy</a>
            <a href="#">Site Map</a>
          </div>
          <div className="footer__social">
            <div className="footer__social-fb">
              <img src={FB} alt="facebook icon" />
            </div>
            <div className="footer__social-twtr">
              <img src={TWTR} alt="twitter icon" />
            </div>
            <div className="footer__social-ln">
              <img src={LN} alt="LinkedIn icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
