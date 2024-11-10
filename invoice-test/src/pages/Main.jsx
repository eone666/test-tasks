import React from "react";
import PrivateRoute from "../PrivateRoute";
import Terminals from "./Terminals";
import Buyer from "./Buyer";
import Buyers from "./Buyers";
import Logout from "./Logout";
import Home from "./Home";
import Sidebar from "../components/Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function Main() {
  return (
    <div className="root-page">
      <Sidebar></Sidebar>
      <main>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/terminals" component={Terminals} />
          <PrivateRoute path="/buyers/:buyerId" component={Buyer} />
          <PrivateRoute exact path="/buyers" component={Buyers} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login">
            <Redirect to="/" />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </main>
      <div className="copyrigth copyright_mobile">Copyright © 2020</div>
    </div>
  );
}
