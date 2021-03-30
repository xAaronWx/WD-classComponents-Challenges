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
      filtered: "",
    };
  }

  searchFunction = (event) => {
    let search = this.state.filtered;
    this.setState({ filtered: event.target.value });
    console.log(search);
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Search for item"
          type="search"
          onChange={(event) => this.searchFunction(event)}
        />
        <h3>Results:</h3>
        <ul>
          {this.state.things
            .filter((item) => item.includes(this.state.filtered))
            .map((results) => (
              <li>{results}</li>
            ))}
        </ul>
      </div>
    );
  }
}
