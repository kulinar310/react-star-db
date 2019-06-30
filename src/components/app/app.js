import React, { Component } from "react";

import Header from "../header/header";
//import RandomPlanet from "../random-planet/random-planet";

import "./app.css";
//import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
//import PeoplePage from "../people-page/people-page";
//import ItemList from "../item-list/item-list";
//import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/errro-boundry";
import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
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
    const {
      getPerson,
      getStarship,
      getPersonImage,  
      getStarshipImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = ( 
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
