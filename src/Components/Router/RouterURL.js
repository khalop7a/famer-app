import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Body from "../HomePage/Body.js";
import ShrimpBuy from "../Post/ShrimpBuy/ShrimpBuy";
import ShrimpSale from "../Post/ShrimpSale/ShrimpSale";
import ShrimpAds from "../Post/ShrimpAds/ShrimpAds";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import BuyList from "../Market/ShrimpBuyList/BuyList";
import SaleList from "../Market/ShrimpSaleList/SaleList.js";
import AdsList from "../Market/ShrimpAdsList/AdsList.js";
import SaleListItemDetail from "../Market/ShrimpSaleList/SaleList-Item-Detail.js";
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Body} />
          {/*------------------------ Posts routes ------------------------*/}
          <Route exact path="/dang-tin/mua-tom" component={ShrimpBuy} />
          <Route exact path="/dang-tin/ban-tom" component={ShrimpSale} />
          <Route exact path="/dang-tin/quang-cao" component={ShrimpAds} />
          {/*---------------------Authentication routes --------------------*/}
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          {/*------------------------ Market routes ------------------------*/}
          <Route exact path="/thi-truong/ban-tom" component={SaleList} />
          <Route exact path="/thi-truong/ban-tom/chi-tiet" component={SaleListItemDetail} />
          <Route exact path="/thi-truong/mua-tom" component={BuyList} />
          <Route exact path="/thi-truong/quang-cao" component={AdsList} />
          <Route component={Body} />
        </Switch>
      </div>
    );
  }
}
export default RouterURL;
