import React, { Component } from "react";

class CatList extends Component {
  render() {
    console.log(this.props.cats);
    return (
      <div>
        {this.props.cats.map((cat) => {
          return <li>{cat}</li>;
        })}
      </div>
    );
  }
}

export default CatList;
