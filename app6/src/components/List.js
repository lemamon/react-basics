import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    return (
      <ul id="myUL">
        {this.props.items.map((el, idx) => (
          <Item
            isChecked={el.status}
            key={idx}
            index={idx}
            updateList={this.props.updateList}
            removeItem={this.props.removeItem}
          >
            {el.name}
          </Item>
        ))}
      </ul>
    );
  }
}
