import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Body from "../HomePage/Body.js";
import ShrimpOrder from "../Orders/ShrimpOrder";
import ShrimpSelling from "../Orders/ShrimpSelling";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignIn/SignUp";
import SellList from "../Market/SellList";
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/trao-doi/can-ban" component={ShrimpSelling} />
          <Route path="/trao-doi/tim-mua" component={ShrimpOrder} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/thi-truong/ban-tom" component={SellList} />
          <Route path="/thi-truong/dat-mua-tom" component={SellList} />
          <Route component={Body} />
        </Switch>
      </div>
    );
  }
}
export default RouterURL;
