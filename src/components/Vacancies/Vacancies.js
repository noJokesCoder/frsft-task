import React from "react";
import "./Vacancies.scss";

import Search from "./../../images/search.png";

export const Vacancies = () => {
  return (
    <section className="vacancies">
      <div className="container">
        <div className="vacancies-nav">
          <h2>Open vacancies</h2>
          <form action="#" id="data">
            <input type="text" placeholder="Use keyword: Java, Figma etc." />
            <select
              form="data"
              name="vacancies"
              id="vacancies"
              placeholder="Choose category"
            >
              <optgroup label="Development">
                <option value="Automation QA Engineer">
                  Automation QA Engineer
                </option>
                <option value="Front-end developer">Front-end developer</option>
                <option value="Back-end developer (Go, Kotlin, C++)">
                  Back-end developer (Go, Kotlin, C++)
                </option>
              </optgroup>
              <optgroup label="Design">
                <option value="junior UI designer">UI designer</option>
                <option value="junior UX designer">UX designer</option>
                <option value="senior UX designer">senior UX designer</option>
                <option value="senior UI designer">senior UI designer</option>
                <option value="Product designer">Product designer</option>
                <option value="trainee Product designer">
                  trainee Product designer
                </option>
              </optgroup>
              <optgroup label="Human Resources">
                <option value="senior HR">senior HR</option>
                <option value="middle HR">middle HR</option>
                <option value="People partner">People partner</option>
              </optgroup>
            </select>
            <select name="office" id="office" form="data">
              <option value="UA">Ukraine</option>
              <option value="UK">United Kingdom</option>
              <option value="Remote">Remote</option>
            </select>
            <button type="submit" className="btnSubmit">
              <img src={Search} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="departments--wrap">
        <div className="container">
          <div className="departments">
            <div className="departments__dev">
              <h3 className="departments__headline">Development</h3>
              <div className="departments__cards">
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
              </div>
            </div>
            <div className="departments__design">
              <h3 className="departments__headline">Design</h3>
              <div className="departments__cards">
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
              </div>
            </div>
            <div className="departments__hr">
              <h3 className="departments__headline">Human resources</h3>
              <div className="departments__cards">
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
                <div className="card">
                  <h4>Automation QA Engineer</h4>
                  <p>Fintech UK , UA Team</p>
                </div>
              </div>
            </div>
            <button className="departments__btn">Load More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
