// irc
import React, { Component } from "react";
import { Container } from "reactstrap";

class ClassFetchOnload extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchDog };
  }

  fetchDog() {
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((res) => res.json())
      .then(console.log(json));
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    return (
      <Container>
        <h3>Dog Image</h3>
        {this.fetchDog}
      </Container>
    );
  }
}

export default DogIndex;
