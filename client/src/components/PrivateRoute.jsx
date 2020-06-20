import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import LoginPrompt from "./LoginPrompt";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
          <LoginPrompt/>
        
      )
    }
  />
);

export default PrivateRoute;
{/* <Redirect to={{ pathname: "/" }} /> */}