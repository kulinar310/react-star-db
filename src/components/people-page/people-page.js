import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../item-details/item-details";

import "./people-page.css";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/errro-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 1
  };
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

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
      >
        {[1, 3, 4, 6]}
      </ItemList>
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />;
      </ErrorBoundry>
    );
  }
}
