import React, { Component } from "react";
import { Heart } from "react-feather";

class SellListItem extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }
  //Funtions
  changeColor() {
    // alert("changecolor");
  }
  addFavorite() {
    alert("addFavorite");
  }
  render() {
    return (
      <div className="col-sm-10 offset-lg-1 p-3 bg-white mb-4">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <img
              src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
              className="img-fluid img-thumbnail"
              alt="..."
              width="200px"
            />
          </div>
          <div className="col-sm-8">
            <div className="d-flex">
              <h5 className="mr-auto">
                <a href="#">Tôm sú 30 con/kg</a>
              </h5>
              <h5 className="text-danger">50.000 đồng/kg</h5>
            </div>
            <div className="">
              <p>Loại kích thước : nhỏ</p>
              <p>Thời gian dự tính thu hoạch : 08/10/2019</p>
              <span className="d-flex">
                <Heart className="ml-auto" onMouseOver={this.changeColor} onClick={this.addFavorite} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellListItem;
