import React from "react";
import { Carousel } from "react-responsive-carousel";

//images
import youGet from "./../../images/you-get.png";
import youDont from "./../../images/you-dont.png";
import check from "./../../images/tick.png";
import unCheck from "./../../images/cross.png";
//styles
import "./Cards.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Cards = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards__headline">
          <h2>Within our recruitment process, as a candidate…</h2>
        </div>
        <div className="cards__wrapper">
          <div className="card-do">
            <img
              src={youGet}
              className="card-do-img"
              alt="icon with a green tick"
            />
            <h3>You will get</h3>
            <ul>
              <li>
                <img src={check} alt="" />
                <p>The fast feedback on every stage of the recruitment</p>
              </li>
              <li>
                <img src={check} />
                <p>Timesaving productive interviews</p>
              </li>
              <li>
                <img src={check} />
                <p>
                  Opportunity to get acquainted with the future project, your
                  team colleagues, and CEO in advance chance of receiving the
                  job offer on the same day of your interview
                </p>
              </li>
            </ul>
          </div>
          <div className="card-dont">
            <img
              src={youDont}
              className="card-dont-img"
              alt="icon with a red cross"
            />
            <h3>You will not get</h3>
            <ul>
              <li>
                <img src={unCheck} alt="" />
                <p>Huge exhausted free tests</p>
              </li>
              <li>
                <img src={unCheck} alt="" />
                <p>
                  Long-awaited pauses in communication with us multiple
                  interviews from our side
                </p>
              </li>
              <li>
                <img src={unCheck} alt="" />
                <p>Bullshit</p>
              </li>
              <li>
                <img src={unCheck} alt="" />
                <p>Harassment</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel-cards-wrap">
          <Carousel>
            <div className="carousel-card">
              <div className="carousel-card-img">
                <img src={youGet} />
              </div>
              <h3>You will get</h3>
              <ul>
                <li>The fast feedback on every stage of the recruitment</li>
                <li>Timesaving productive interviews</li>
                <li>
                  Opportunity to get acquainted with the future project, your
                  team colleagues, and CEO in advance chance of receiving the
                  job offer on the same day of your interview
                </li>
              </ul>
            </div>
            <div className="carousel-card">
              <div className="carousel-card-img">
                <img src={youDont} />
              </div>
              <h3>You will not get</h3>
              <ul>
                <li>Huge exhausted free tests</li>
                <li>
                  Long-awaited pauses in communication with us multiple
                  interviews from our side
                </li>
                <li>Bullshit</li>
                <li>Harassment</li>
              </ul>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
