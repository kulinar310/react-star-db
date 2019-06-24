import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peoplelist: null
  };
  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({
        peoplelist: peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.OnItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }
  render() {
    const { peoplelist } = this.state;
    if (!peoplelist) {
      return <Spinner />;
    }
    const items = this.renderItems(peoplelist);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
