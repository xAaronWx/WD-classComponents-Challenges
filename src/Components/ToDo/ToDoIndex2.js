import React, { Component } from "react";
import { Input, Button } from "reactstrap";

class TodoIndex2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      tasks: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    let taskArray = this.state.tasks;
    taskArray.push(this.state.term);
    this.setState({
      term: "",
      tasks: taskArray,
    });
  };

  displayTasks = () => {
    return this.state.tasks.map((task, index) => (
      <li key={index}>
        <Input
          type="checkbox"
          value={task}
          onChange={this.onChange}
          onClick={(e) => this.removeTask(e, index)}
          placeholder=""
        />
        {task}
      </li>
    ));
  };

  removeTask = (event, index) => {
    let list = this.state.tasks;
    list.splice(index, 1);
    this.setState({
      tasks: list,
    });
  };

  render() {
    return (
      <div>
        <Input placeholder="Add Task" onChange={this.onChange} />
        <br />
        <br />
        <Button onClick={(e) => this.onSubmit(e)}>Add</Button>
        <div>{this.displayTasks()}</div>
      </div>
    );
  }
}

export default TodoIndex2;
