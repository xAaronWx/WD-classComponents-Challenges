// irc
import React, { Component } from "react";
import { Container } from "reactstrap";

class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { dogImage: "" };
  }

  fetchDog() {
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ dogImage: json.message }));
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    return (
      <Container>
        <h3>Dog Image</h3>
        <img src={this.state.dogImage} alt="" />
        <br />
        <br />
        <button onClick={() => this.fetchDog()}>Fetch a new dog</button>
      </Container>
    );
  }
}

export default DogIndex;
