import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.css";
import { MProvider } from "./components/Provider";

ReactDOM.render(
  <MProvider>
    <App />
  </MProvider>,
  document.getElementById("root")
);
