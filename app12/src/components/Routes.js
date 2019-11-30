import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GenericPage } from "./GenericPage";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Topics } from "./Topics";
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
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/generic" component={GenericPage} />
    <Route path="/topics" component={Topics} />
    <PrivateRoute path="/privatePage" component={() => <h1>Private Page</h1>} />

    <Route path="*" component={() => <h1>404 Page Not Found</h1>} />
  </Switch>
);

export default Routes;
