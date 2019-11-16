import React from "react";
import { MyProvider } from "./components/MyProvider";
import { Person } from "./components/Person";

import "./App.css";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Person />
      </div>
    </MyProvider>
  );
}

export default App;
