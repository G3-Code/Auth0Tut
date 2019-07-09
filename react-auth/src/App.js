import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    console.log(" :::::PROPS IS :::::::" + this.props.name);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React, {this.props.name}</p>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
