import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import isAuth from "./Auth";

const PrivateRoute = ({ component: Component, ...params }) => (
  <Route
    {...params}
    render={props =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <PrivateRoute path="/dashboard" component={DashboardPage} />

    <Route path="*" component={() => <h1>404 Page Not FOUND</h1>} />
  </Switch>
);

export default Routes;
