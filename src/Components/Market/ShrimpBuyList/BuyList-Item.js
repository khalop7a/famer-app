import React, { Component } from "react";
import { Link } from "react-router-dom";

class BuyListItem extends Component {
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
      <div className="bg-white my-3 border">
        <div className="p-3">
          <div className="row align-items-center my-3">
            <div className="col-sm-4">
              <div
                className="thumbnail-item"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPAdMxnrF2l89Fd5hYKhgGEKMzDHVFbpzIv-1aZd8LEpnvnz81Q&s)"
                }}
              />
            </div>
            <div className="col-sm-8">
              <div className="d-flex">
                <h5 className="mr-auto">
                  <Link to="/thi-truong/mua-tom/chi-tiet">Tôm sú 30 con/kg</Link>
                </h5>
                <h5 className="text-muted small">10:00 PM 31/10/2019</h5>
              </div>
              <div>
                <p>Số lượng dự tính mua : 20 kg</p>
                <p>Thời gian dự tính mua : 08/10/2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyListItem;
