import React, { Component } from "react";
import Item from "./Item";
import { Consumer } from "./Provider";

export default class List extends Component {
  render() {
    return (
      <Consumer>
        {ctx => (
          <ul id="myUL">
            {ctx.state.items.map((el, idx) => (
              <Item isChecked={el.status} key={idx} index={idx}>
                {el.name}
              </Item>
            ))}
          </ul>
        )}
      </Consumer>
    );
  }
}
