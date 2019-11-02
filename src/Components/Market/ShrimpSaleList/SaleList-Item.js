import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="bg-white my-3 border ">
        <div className="p-3">
          <div className="row align-items-center my-3">
            <div className="col-sm-4">
              <div
                className="thumbnail-item"
                style={{
                  backgroundImage:
                    "url(https://www.twincities.com/wp-content/uploads/2015/11/20140428__PacificWhiteShrimpies_skybox.jpg?w=620)"
                }}
              />
            </div>
            <div className="col-sm-8">
              <div className="d-flex">
                <h5 className="mr-auto">
                  <Link to="/thi-truong/ban-tom/chi-tiet">Tôm sú 30 con/kg</Link>
                </h5>
                <h5 className="text-muted small">10:00 PM 31/10/2019</h5>
              </div>
              <div>
                <p>Số lượng dự tính thu hoạch : 20 kg</p>
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
