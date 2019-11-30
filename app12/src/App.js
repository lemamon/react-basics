import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { setToken } from "./components/Auth";

const App = () => (
  <BrowserRouter>
    <input type="button" value="login" onClick={setToken} />
    <Menu />
    <Routes />
  </BrowserRouter>
);

export default App;
