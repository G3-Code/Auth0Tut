import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    console.log(" :::::PROPS IS :::::::" + this.props.name);

    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Main />;
        break;

      case "secret":
        mainComponent = <Secret />;
        break;

      default:
        mainComponent = <NotFound />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React, {this.props.name}</p>
        </header>
        {mainComponent}
      </div>
    );
  }
}

export default App;
