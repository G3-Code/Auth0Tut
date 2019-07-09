import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    console.log(" :::::PROPS IS :::::::" + this.props.name);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React, {this.props.name}</p>
        </header>
      </div>
    );
  }
}

export default App;
