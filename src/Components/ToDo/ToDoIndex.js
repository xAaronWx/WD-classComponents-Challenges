import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import TodoItems from "./TodoItems";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <Input
              ref={(a) => (this._inputElement = a)}
              type="text"
              id=""
              name=""
              placeholder="Create Task"
            />
            <br />
            <br />
            <Button type="submit">Add Task</Button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}
export default TodoList;
