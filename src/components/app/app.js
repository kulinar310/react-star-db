import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";

import "./app.css";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
      </div>
    );
  }
}
