import React, { Component } from "react";
import SellListItemDetail from "./SellList-Item-Detail";

class SellList extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }
  //Funtions
  changeColor() {
    alert("changecolor");
  }
  render() {
    return (
      <div className="bg-light col-sm-8 offset-lg-2">
        {/* <SellListItem />
        <SellListItem />
        <SellListItem /> */}
        {/* <SellListItemDetail /> */}
      </div>
    );
  }
}

export default SellList;
