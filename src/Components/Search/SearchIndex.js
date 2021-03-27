import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
    };
  }

  state = {
    name: "",
  };

  changeHandler = (event) => {
    this.setState({ things: event.target.value });
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Search for item"
          type="search"
          onChange={this.changeHandler}
        />
        <h3>Results:</h3>
        {this.state.things}
      </div>
    );
  }
}
