import React, { Component } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class AdsListCart extends Component {
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
      <div className="bg-white my-3 border">
        <div className="bg-info p-2 text-center text-white" style={{ fontWeight: 500 }}>
          THỊ TRƯỜNG QUẢNG CÁO
        </div>
        <div className="p-2">
          <ul style={{ listStyleType: "none" }}>
            <li className="py-2">
              <Link to="/thi-truong/quang-cao/chi-tiet">Tôm sú 30 con/kg</Link>
            </li>
            <li className="py-2">
              <Link to="/thi-truong/quang-cao/chi-tiet">Tôm sú 30 con/kg</Link>
            </li>
            <li className="py-2">
              <Link to="/thi-truong/quang-cao/chi-tiet">Tôm sú 30 con/kg</Link>
            </li>
            <li className="py-2">
              <Link to="/thi-truong/quang-cao/chi-tiet">Tôm sú 30 con/kg</Link>
            </li>
            <li className="py-2">
              <Link to="/thi-truong/quang-cao/chi-tiet">Tôm sú 30 con/kg</Link>
            </li>
            <li className="py-2">
              <Link to="/thi-truong/quang-cao" style={{ textDecoration: "none" }}>
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

export default AdsListCart;
