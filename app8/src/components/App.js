import React, { Component } from "react";
import Header from "./Header";
import List from "./List";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <List />
      </React.Fragment>
    );
  }
}

export default App;
