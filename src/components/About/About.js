import React from "react";
import "./About.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-wrap">
          <div className="about__headline">
            <h2>About the company</h2>
          </div>
          <div className="about__text">
            <div>
              <p>
                Founded in 2019, FreySoft is a global provider of full-cycle
                software development services with headquarters in Kyiv,
                Ukraine. Our objective is to work on innovative projects that
                matter and bring value with the most balanced “personal life” /
                “work” ratio for our team.
              </p>
            </div>
            <div>
              <p>
                The key areas of our activity include IT staff augmentation, web
                and mobile app development, MVP development for startups,
                integration & automatization, support & maintenance, legacy
                application transformation, UI/ UX product design, and
                AI-chatbots development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
