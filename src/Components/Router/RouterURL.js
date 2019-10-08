import React, { Component } from "react";
import { Route,Switch} from "react-router-dom";
import Body from "../HomePage/Body.js"
import ShrimpOrder from "../Orders/ShrimpOrder"
import ShrimpSelling from "../Orders/ShrimpSelling"

class RouterURL extends Component{
    render(){
        return(
            <div>
                <Switch>
                 <Route exact path="/" component={Body}/>
                 <Route path="/thi-truong/mua-tom" component={ShrimpOrder}/>
                 <Route path="/thi-truong/ban-tom" component={ShrimpSelling}/>

                 <Route component={Body}/>
                </Switch>
             </div>

              );
      }

}
export default RouterURL;