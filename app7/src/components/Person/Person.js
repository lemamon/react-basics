import React from "react";
import { Consumer } from "../MyProvider";

const Person = () => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          <h1>{context.state.name}</h1>
          <h2>{context.state.age}</h2>
          <button onClick={context.parabens}>parabens</button>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export { Person };
