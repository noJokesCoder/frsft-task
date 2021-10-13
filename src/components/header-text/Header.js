import React from "react";
import "./Header.scss";

export const HeaderText = () => {
  return (
    <div className="header-text">
      <div className="container">
        <div className="header-text-wrap">
          <div className="header-text__headline">
            <h1>
              We’ve got the job for you<span>!</span>
            </h1>
          </div>
          <div className="header-text__paragraph">
            <p>
              We offer experienced IT specialists to be involved in
              ground-breaking digital projects and IT novices to develop skills
              in our perspective workplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
