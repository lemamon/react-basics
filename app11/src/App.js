import React from "react";
import "./App.css";
import UserStack from "./components/UserStack";

const App = () => (
  <div className="App">
    <React.Suspense fallback={<h1>loading...</h1>}>
      <UserStack id="user-stack" />
    </React.Suspense>
  </div>
);

export default App;
