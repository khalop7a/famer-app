import React, { Component } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class SaleListCart extends Component {
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
      <div className="bg-white my-3">
        <div className="bg-info p-2 text-center text-white" style={{ fontWeight: 500 }}>
          THỊ TRƯỜNG BÁN TÔM
        </div>
        <div className="p-2">
          <ul style={{ listStyleType: "none" }}>
            <li className="py-2">
              <a href="#">Tôm sú 30 con/kg</a>
            </li>
            <li className="py-2">
              <a href="#">Tôm sú 30 con/kg</a>
            </li>
            <li className="py-2">
              <a href="#">Tôm sú 30 con/kg</a>
            </li>
            <li className="py-2">
              <a href="#">Tôm sú 30 con/kg</a>
            </li>
            <li className="py-2">
              <a href="#">Tôm sú 30 con/kg</a>
            </li>
            <li className="py-2">
              <Link to="/thi-truong/ban-tom" style={{ textDecoration: "none" }}>
                <span className="text-danger small ">
                  <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                  Xem thêm
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SaleListCart;
