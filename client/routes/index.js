import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "components/App";
import DashboardPage from "components/Dashboard";
import LoginPage from "components/Login";
import Signup from "components/Signup";

export default (
  <Route path="/" component={App} >
    <IndexRoute component={DashboardPage} />
    <Route path="Login" component={LoginPage} />
    <Route path="signup" component={Signup} />
    <Route path="signout" component={Signup} />
  </Route>
);
