import React, { createContext, Component } from "react";

const MyContext = createContext();
const { Provider, Consumer } = MyContext;

class MyProvider extends Component {
  state = {
    name: "fulano",
    age: 23
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          listItems: [],
          parabens: () => {
            this.setState({
              age: this.state.age + 1
            });
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { MyProvider, Consumer, Provider };
