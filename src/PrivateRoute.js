import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
// import { AuthContext } from "./contexts/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // const {authTokens} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return authTokens ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};
