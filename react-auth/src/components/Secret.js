import React from "react";

class Secret extends React.Component {
  render() {
    return (
      <div>
        This is super secret. Jump back to <a href="/">home</a>
        <button onClick={this.props.auth.logout}>Logout</button>
      </div>
    );
  }
}
export default Secret;
