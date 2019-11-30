import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import { Consumer } from "./Provider";

export default class Header extends Component {
  state = {
    value: "",
    inputRef: {}
  };

  getRef = inputRef => {
    this.setState({ inputRef });
  };

  add = callback => {
    const { inputRef } = this.state;

    callback(this.state.inputRef.value);
    inputRef.value = "";
  };

  render() {
    return (
      <Consumer>
        {ctx => (
          <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <Input getRef={this.getRef} />
            <Button onClick={() => this.add(ctx.add)} />
          </div>
        )}
      </Consumer>
    );
  }
}
