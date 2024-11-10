import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
