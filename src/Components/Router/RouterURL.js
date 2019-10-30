import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Body from "../HomePage/Body.js";
import ShrimpBuy from "../Post/ShrimpBuy/ShrimpBuy";
import ShrimpSale from "../Post/ShrimpSale/ShrimpSale";
import ShrimpAds from "../Post/ShrimpAds/ShrimpAds";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SellList from "../Market/SellList";
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/dang-tin/mua-tom" component={ShrimpBuy} />
          <Route path="/dang-tin/ban-tom" component={ShrimpSale} />
          <Route path="/dang-tin/quang-cao" component={ShrimpAds} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/thi-truong/ban-tom" component={SellList} />
          <Route path="/thi-truong/mua-tom" component={SellList} />
          <Route component={Body} />
        </Switch>
      </div>
    );
  }
}
export default RouterURL;
