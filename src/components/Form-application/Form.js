import React from "react";
import "./Form.scss";
import attach from "./../../images/attach.png";

export const FormSubmit = () => {
  function autoResize() {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }

  return (
    <section className="form">
      <div className="container">
        <div className="form__wrapper">
          <div className="form__headline">
            <h3>Not found the open vacancy now?</h3>
            <p>Apply anyway as we have new openings every week! </p>
          </div>
          <div className="form__application">
            <input
              type="text"
              name="aplicants name"
              id="aplicantsName"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="aplicants email"
              id="aplicantsEmail"
              placeholder="email"
              required
            />
            <textarea
              onInput={autoResize}
              name="aplicants message"
              id="aplicantsMessage"
              placeholder="Message"
              required
            ></textarea>
            <label className="form__aplication__label" htmlFor="apllicantsCV">
              <img src={attach} alt="" />
              <input type="file" name="apllicants CV" id="apllicantsCV" />
            </label>

            <button type="submit" className="form__application-btn">
              Send Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
