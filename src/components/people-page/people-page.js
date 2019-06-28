import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

import "./people-page.css";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 1,
    hasError: false
  };
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
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
    const itemList = (
      <ItemList
        OnItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear} )`
        }
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    return <Row left={itemList} right={personDetails} />;
  }
}
