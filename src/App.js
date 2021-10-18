// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import "./App-styles.scss";
//components
import { NavBar } from "./components/nav-bar/Nav-bar";
import { HeaderText } from "./components/header-text/Header";
import { Grid } from "./components/Grid/Grid";
import { About } from "./components/About/About";
import { Recruitment } from "./components/Recruitment/Recruitment";
import { Cards } from "./components/Cards/Cards";
import { Vacancies } from "./components/Vacancies/Vacancies";
import { FormSubmit } from "./components/Form-application/Form";
import { Perks } from "./components/Perks/Perks";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderText />
      <Grid />
      <About />
      <Recruitment />
      <Cards />
      <Vacancies />
      <FormSubmit />
      <Perks />
      <Footer />
    </div>
  );
}

export default App;
