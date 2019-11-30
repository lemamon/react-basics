import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <span onClick={this.props.onClick} className="addBtn">
        Add
      </span>
    );
  }
}
