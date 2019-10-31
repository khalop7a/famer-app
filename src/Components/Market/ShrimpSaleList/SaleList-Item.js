import React, { Component } from "react";
import { Heart } from "react-feather";

class SaleListItem extends Component {
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
      <div className="bg-white my-3">
        <div className="p-3">
          <div className="row align-items-center my-3">
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
                <h5 className="text-muted small">10:00 PM 31/10/2019</h5>
              </div>
              <div>
                <p>Loại kích thước : nhỏ</p>
                <p>Thời gian dự tính thu hoạch : 08/10/2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SaleListItem;
