import React from "react";
import { Route, IndexRoute } from "react-router";

import requireAuth from "components/Common/Authenticate";
import App from "components/App";
import DashboardPage from "components/Dashboard";
import LoginPage from "components/Login";
import Signup from "components/Signup";
import Welcome from "components/Welcome";

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Welcome} />
    <Route path="dashboard" component={requireAuth(DashboardPage)} />
    <Route path="login" component={LoginPage} />
    <Route path="signup" component={Signup} />
  </Route>
);
