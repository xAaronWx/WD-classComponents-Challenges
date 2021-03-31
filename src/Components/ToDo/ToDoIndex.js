import React, { Component } from "react";
import { Input } from "reactstrap";

class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
    };
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default ToDoIndex;
