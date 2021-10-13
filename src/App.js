import React from "react";
import "./App-styles.scss";
//components
import { NavBar } from "./components/nav-bar/Nav-bar";
import { HeaderText } from "./components/header-text/Header";
import { Grid } from "./components/Grid/Grid";
import { About } from "./components/About/About";
import { Recruitment } from "./components/Recruitment/Recruitment";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderText />
      <Grid />
      <About />
      <Recruitment />
    </div>
  );
}

export default App;
