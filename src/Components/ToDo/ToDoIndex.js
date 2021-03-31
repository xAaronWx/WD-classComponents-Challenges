import React, { Component } from "react";
import { Input, Button, ListGroup, ListGroupItem } from "reactstrap";

class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["go to store", "do dishes", "complete code"],
    };
  }

  componentDidMount() {
    this.displayTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tasks !== prevState.tasks) {
      this.displayTasks();
    }
  }

  addTask = (e) => {
    // Prevent button click from submitting form
    e.preventDefault();
    let list = this.state.tasks;
    const newTask = document.getElementById("taskName");
    // Create variables for our list, the item to add, and our form
    list.push(newTask.value);
    this.setState({ tasks: list });
    console.log(this.state.tasks);
  };

  displayTasks = () => {
    return this.state.tasks.map((tasks) => <ListGroupItem></ListGroupItem>);
  };

  render() {
    return (
      <div>
        <h2>Create your tasks</h2>
        <section className="section"></section>
        <br />
        <section className="section">
          <form className="form" id="addItemForm">
            <Input
              type="text"
              className="input"
              id="addInput"
              placeholder="Create a task"
            />
            <br />
            <br />
            <Button className="button is-info" onClick={this.addItem}>
              Add Task
            </Button>
          </form>
          <ListGroup></ListGroup>
        </section>
      </div>
    );
  }
}

export default ToDoIndex;
