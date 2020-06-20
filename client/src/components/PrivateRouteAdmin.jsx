import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import LoginPromptAdmin from "./LoginPromptAdmin";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth()&&Auth.getAdmin() ? (
        <Component {...props} />
      ) : (
          <LoginPromptAdmin/>
        
      )
    }
  />
);

export default PrivateRouteAdmin;
{/* <Redirect to={{ pathname: "/" }} /> */}