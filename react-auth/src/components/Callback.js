import React from "react";
import Auth from "../Auth";

export default class Callback extends React.Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return <div>Loading....</div>;
  }
}
