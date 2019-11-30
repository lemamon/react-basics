import React, { createContext, Component } from "react";

const Context = createContext();
const { Provider, Consumer } = Context;

class MProvider extends Component {
  state = {
    items: [
      {
        status: "new",
        name: "tomate"
      },
      {
        status: "new",
        name: "Couve"
      },
      {
        status: "new",
        name: "maçã"
      },
      {
        status: "new",
        name: "uva"
      }
    ]
  };

  add = value => {
    let { items } = this.state;

    items.unshift({
      status: "new",
      name: value
    });

    this.setState({ items });
  };

  changeStatus = index => {
    let { items } = this.state;

    items[index].status = "checked";
    items.sort(i => (i.status === "new" ? -1 : 1));

    this.setState({ items });
  };

  removeItem = index => {
    let { items } = this.state;
    items = items.filter((_, i) => i !== index);
    this.setState({ items });
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          add: this.add,
          changeStatus: this.changeStatus,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { MProvider, Consumer, Provider };
