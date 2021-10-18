import React from "react";
import "./Perks.scss";

//Carousel for tablet and mobile layouts
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//icons
import teamIcon from "./../../images/team.png";
import remoteIcon from "./../../images/remote.png";
import internationalIcon from "./../../images/International.png";
import favorableIcon from "./../../images/Fav.png";
import stimIcon from "./../../images/stim.png";
import notIcon from "./../../images/not.png";

export const Perks = () => {
  return (
    <section className="perks-section">
      <div className="container">
        <div className="perks">
          <h3>Our superb perks</h3>
          <div className="perks__grid">
            <div className="grid-card">
              <img src={teamIcon} alt="" />
              <h4>Young motivated team</h4>
              <p>
                Over the last year, our team has grown from 2 to 40 employees,
                and we keep searching for the smartest minds to join us.
              </p>
            </div>
            <div className="grid-card">
              <img src={internationalIcon} alt="" />
              <h4>International clients </h4>
              <p>
                Though we are only one year on market, the diversified
                international clients, from small and mid-market business
                sectors to big-scale corporations and enterprises apply for our
                services.{" "}
              </p>
            </div>
            <div className="grid-card">
              <img src={favorableIcon} alt="" />
              <h4>Favorable working processes</h4>
              <p>
                Starting from the interview, you will feel simple process
                company (only 3 stages on recruitment, could get offer in a
                week), and after – bureaucracy-free environment inside the
                company.
              </p>
            </div>
            <div className="grid-card">
              <img src={stimIcon} alt="" />
              <h4>Stimulating projects of multidirectional industries</h4>
              <p>
                The projects, we work on, concern domains in Fintech,
                e-commerce, automotive, hospitality & travel, security,
                healthcare - you get the excellent opportunity to brace yourself
                for new challenges and up-to-date technologies, bringing value
                into the market.
              </p>
            </div>
            <div className="grid-card">
              <img src={remoteIcon} alt="" />
              <h4>Working remotely or in the office</h4>
              <p>
                We give our employees the opportunity to choose the way to work
                - remotely, in our office in the center of Kyiv, or combining
                both options.{" "}
              </p>
            </div>
            <div className="grid-card">
              <img src={notIcon} alt="" />
              <h4>Not all about work!</h4>
              <p>
                We regularly inspire our talented developers to create and
                innovate via corporate going-outs, active mini-activities, and
                outdoor events
              </p>
            </div>
          </div>
          <div className="perks__carousel">
            <Carousel>
              <div className="grid-carousel-card">
                <div className="grid-carousel-card-img">
                  <img src={teamIcon} alt="" />
                </div>
                <h4>Young motivated team</h4>
                <p>
                  Over the last year, our team has grown from 2 to 40 employees,
                  and we keep searching for the smartest minds to join us.
                </p>
              </div>
              <div className="grid-carousel-card">
                <div className="grid-carousel-card-img">
                  <img src={internationalIcon} alt="" />
                </div>
                <h4>International clients </h4>
                <p>
                  Though we are only one year on market, the diversified
                  international clients, from small and mid-market business
                  sectors to big-scale corporations and enterprises apply for
                  our services.{" "}
                </p>
              </div>
              <div className="grid-carousel-card">
                <div className="grid-carousel-card-img">
                  <img src={favorableIcon} alt="" />
                </div>
                <h4>Favorable working processes</h4>
                <p>
                  Starting from the interview, you will feel simple process
                  company (only 3 stages on recruitment, could get offer in a
                  week), and after – bureaucracy-free environment inside the
                  company.
                </p>
              </div>
              <div className="grid-carousel-card">
                <div className="grid-carousel-card-img">
                  <img src={stimIcon} alt="" />
                </div>
                <h4>Stimulating projects of multidirectional industries</h4>
                <p>
                  The projects, we work on, concern domains in Fintech,
                  e-commerce, automotive, hospitality & travel, security,
                  healthcare - you get the excellent opportunity to brace
                  yourself for new challenges and up-to-date technologies,
                  bringing value into the market.
                </p>
              </div>
              <div className="grid-carousel-card">
                <div className="grid-carousel-card-img">
                  <img src={remoteIcon} alt="" />
                </div>
                <h4>Working remotely or in the office</h4>
                <p>
                  We give our employees the opportunity to choose the way to
                  work - remotely, in our office in the center of Kyiv, or
                  combining both options.{" "}
                </p>
              </div>
              <div className="grid-carousel-card">
                <div className="grid-carousel-card-img">
                  <img src={notIcon} alt="" />
                </div>
                <h4>Not all about work!</h4>
                <p>
                  We regularly inspire our talented developers to create and
                  innovate via corporate going-outs, active mini-activities, and
                  outdoor events
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
