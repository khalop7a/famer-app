import React, { Component } from "react";
import BuyListItem from "./BuyList-Item";
import SaleListCart from "../ShrimpSaleList/SaleList-Cart";
import AdsListCart from "../ShrimpAdsList/AdsList-Cart";
import { Link } from "react-router-dom";
class BuyList extends Component {
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
      <div className="d-flex align-item-center justify-content-center ">
        <div class="col-sm-6">
          <nav aria-label="breadcrumb" className="my-3">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <a href="/thi-truong">Thị trường</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Mua tôm
              </li>
            </ol>
          </nav>
          <BuyListItem />
          <BuyListItem />
          <BuyListItem />
          <BuyListItem />
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-sm-3 p-0">
          <div className="my-3">
            <Link to="/dang-tin/mua-tom" style={{ textDecoration: "none" }}>
              <button className="btn btn-block btn-outline-info my-3" style={{ fontWeight: 500 }}>
                ĐĂNG TIN MUA TÔM
              </button>
            </Link>
          </div>
          <SaleListCart />
          <AdsListCart />
        </div>
      </div>
    );
  }
}

export default BuyList;
