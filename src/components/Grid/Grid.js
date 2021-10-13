import React from "react";
import rowUp from "./../../images/two-row.png";
import rowDown from "./../../images/one-row.png";

import "./Grid.scss";

export const Grid = () => {
  return (
    <section className="grid">
      <div className="slideUp">
        <img src={rowUp} alt="" />
      </div>
      <div className="slideDown">
        <img src={rowDown} alt="" />
      </div>
      <div className="grid-button">
        <a href="#"> See All Roles</a>
      </div>
    </section>
  );
};
