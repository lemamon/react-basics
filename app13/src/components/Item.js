import React, { Component } from "react";
import { Consumer } from "./Provider";

export default class Item extends Component {
  handleClick = (e, ctx) => {
    e.preventDefault();

    const { isChecked } = this.props;

    if (isChecked === "new") {
      ctx.changeStatus(this.props.index);
    } else {
      ctx.removeItem(this.props.index);
    }
  };

  render() {
    const { children, isChecked } = this.props;

    return (
      <Consumer>
        {ctx => (
          <li onClick={e => this.handleClick(e, ctx)} className={isChecked}>
            {children}
          </li>
        )}
      </Consumer>
    );
  }
}
