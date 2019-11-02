import React, { Component } from "react";
import SaleListItem from "./SaleList-Item";
import BuyListCart from "../ShrimpBuyList/BuyList-Cart";
import AdsListCart from "../ShrimpAdsList/AdsList-Cart";
import { Link } from "react-router-dom";
class SaleList extends Component {
  constructor(props) {
    super(props);
    this.handlePostNews = this.handlePostNews.bind(this);
  }
  //Funtions
  handlePostNews() {
    // return <Redirect to="/dang-tin/ban-tom" />;
  }
  render() {
    return (
      <div className="d-flex align-item-center justify-content-center ">
        <div className="col-sm-6 ">
          <nav aria-label="breadcrumb" className="my-3">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <a href="/thi-truong">Thị trường</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Bán tôm
              </li>
            </ol>
          </nav>
          <SaleListItem />
          <SaleListItem />
          <SaleListItem />
          <SaleListItem />
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
        <div className="col-sm-3 p-0">
          <div className="my-3">
            <Link to="/dang-tin/ban-tom" style={{ textDecoration: "none" }}>
              <button className="btn btn-block btn-outline-info my-3" style={{ fontWeight: 500 }}>
                ĐĂNG TIN BÁN TÔM
              </button>
            </Link>
          </div>
          <BuyListCart />
          <AdsListCart />
        </div>
      </div>
    );
  }
}

export default SaleList;
