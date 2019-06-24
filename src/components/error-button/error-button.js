import React, { Component } from "react";

import "./error-button.css";

export default class ErrorButton extends Component {
  state = {
    renderError: false
  };

  createError = () => {
    this.setState({
      renderError: true
    });
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0; // код создания ошибки
    }
    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={this.createError}
      >
        Throw Error
      </button>
    );
  }
}
