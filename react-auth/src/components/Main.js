import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}.This is a testing space for Main.</p>
      </div>
    );
  }
}
