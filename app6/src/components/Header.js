import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

export default class Header extends Component {
  state = {
    value: "",
    inputRef: {}
  };

  getRef = inputRef => {
    this.setState({ inputRef });
  };

  add = () => {
    const { inputRef } = this.state;

    this.props.add(this.state.inputRef.value);
    inputRef.value = "";
  };

  render() {
    return (
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <Input getRef={this.getRef} />
        <Button onClick={this.add} />
      </div>
    );
  }
}
