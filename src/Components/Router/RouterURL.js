import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Body from "../HomePage/Body.js";
import ShrimpBuy from "../Post/ShrimpBuy/ShrimpBuy";
import ShrimpSale from "../Post/ShrimpSale/ShrimpSale";
import ShrimpAds from "../Post/ShrimpAds/ShrimpAds";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import BuyList from "../Market/ShrimpBuyList/BuyList";
import SaleList from "../Market/ShrimpSaleList/SaleList";
import AdsList from "../Market/ShrimpAdsList/AdsList";
import SaleListItemDetail from "../Market/ShrimpSaleList/SaleList-Item-Detail";
import BuyListItemDetail from "../Market/ShrimpBuyList/BuyList-Item-Detail";
import AdsListItemDetail from "../Market/ShrimpAdsList/AdsList-Item-Detail";
import UserInfo from "../User/User-Info";
import UserInfoEdit from "../User/User-Info-Edit";
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Body} />
          {/*-------------------------------------- Posts routes start------------------------*/}
          <Route exact path="/dang-tin/mua-tom" component={ShrimpBuy} />
          <Route exact path="/dang-tin/ban-tom" component={ShrimpSale} />
          <Route exact path="/dang-tin/quang-cao" component={ShrimpAds} />
          {/*-------------------------------------- Posts routes end ------------------------*/}
          {/*--------------------------------------Authentication routes start --------------------*/}
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          {/*--------------------------------------Authentication routes end --------------------*/}
          {/*--------------------------------------Market routes start ------------------------*/}
          <Route exact path="/thi-truong/ban-tom" component={SaleList} />
          <Route exact path="/thi-truong/ban-tom/chi-tiet" component={SaleListItemDetail} />
          <Route exact path="/thi-truong/mua-tom" component={BuyList} />
          <Route exact path="/thi-truong/mua-tom/chi-tiet" component={BuyListItemDetail} />
          <Route exact path="/thi-truong/quang-cao" component={AdsList} />
          <Route exact path="/thi-truong/quang-cao/chi-tiet" component={AdsListItemDetail} />
          {/*--------------------------------------Market routes end ------------------------*/}
          {/*--------------------------------------User start ------------------------*/}
          <Route exact path="/user/user-info" component={UserInfo} />
          <Route exact path="/user/user-info/edit" component={UserInfoEdit} />
          <Route component={Body} />
        </Switch>
      </div>
    );
  }
}
export default RouterURL;
