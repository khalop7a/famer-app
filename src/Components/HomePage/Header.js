import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.Header = this.Header.bind(this);
  }
  Header() {
    alert("Header home page");
  }
  render() {
    return (
      // <div>
      //   {/*Header*/}
      //   {/*nav pill*/}
      //   <div id="header">
      //     <ul className="nav nav-pills justify-content-xl-end navbar-expand-lg ">
      // <li className="nav-item">
      //   <NavLink activeClassName="nav-link text-dark" to="/">
      //     TRANG CHỦ
      //   </NavLink>
      // </li>
      // <li className="nav-item dropdown">
      //   <NavLink activeClassName="nav-link text-dark" data-toggle="dropdown" to="/">
      //     THỊ TRƯỜNG
      //   </NavLink>
      //   <div className="dropdown-menu">
      //     <NavLink className="dropdown-item" to="/thi-truong/ban-tom">
      //       BÁN TÔM
      //     </NavLink>
      //     <NavLink className="dropdown-item" to="/thi-truong/mua-tom">
      //       ĐẶT MUA TÔM
      //     </NavLink>
      //   </div>
      // </li>
      // <li className="nav-item ">
      //   <NavLink activeClassName="nav-link text-dark" to="">
      //     VỀ CHÚNG TÔI
      //   </NavLink>
      // </li>
      // <li className="nav-item dropdown">
      //   <a className="nav-link text-dark" data-toggle="dropdown" href="/">
      //     TRAO ĐỔI
      //   </a>
      //   <div className="dropdown-menu">
      //     <NavLink className="dropdown-item" to="/trao-doi/dang-ban">
      //       ĐĂNG BÁN
      //     </NavLink>
      //     <NavLink className="dropdown-item" to="/trao-doi/tim-mua">
      //       TÌM MUA
      //     </NavLink>
      //   </div>
      // </li>
      // <li className="nav-item">
      //   <NavLink className="nav-link text-dark" to="/sign-in">
      //     Đăng nhập
      //   </NavLink>
      // </li>
      // <li className="nav-item ">
      //   <a className="nav-link text-dark" href="sign-up">
      //     Đăng kí
      //   </a>
      // </li>
      //     </ul>
      //   </div>
      //   {/*end nav pill*/}

      //   {/*Header*/}
      // </div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white" id="header">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="">
            <img src="/picture-stfarm/logo.png" />
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/">
                TRANG CHỦ
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink activeClassName="nav-link text-dark" data-toggle="dropdown" to="/">
                THỊ TRƯỜNG
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/thi-truong/ban-tom">
                  BÁN TÔM
                </NavLink>
                <NavLink className="dropdown-item" to="/thi-truong/mua-tom">
                  ĐẶT MUA TÔM
                </NavLink>
                <NavLink className="dropdown-item" to="/thi-truong/quang-cao">
                  QUẢNG CÁO
                </NavLink>
              </div>
            </li>
            {/* <li className="nav-item dropdown">
              <NavLink activeClassName="nav-link text-dark" data-toggle="dropdown" to="/">
                QUẢNG CÁO
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/tom-giong">
                  TÔM GIỐNG
                </NavLink>
                <NavLink className="dropdown-item" to="/thuoc-visinh">
                  THUỐC - VI SINH
                </NavLink>
                <NavLink className="dropdown-item" to="/thuc-an">
                  THỨC ĂN CHO TÔM
                </NavLink>
              </div>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link text-dark" data-toggle="dropdown" href="/">
                ĐĂNG TIN
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/trao-doi/can-ban">
                  CẦN BÁN
                </NavLink>
                <NavLink className="dropdown-item" to="/trao-doi/tim-mua">
                  THU MUA
                </NavLink>
                <NavLink className="dropdown-item" to="/trao-doi/quang-cao">
                  QUẢNG CÁO
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink activeClassName="nav-link text-dark" data-toggle="dropdown" to="/">
                ĐỐI TÁC
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/nong-dan">
                  NÔNG DÂN
                </NavLink>
                <NavLink className="dropdown-item" to="/dai-ly">
                  ĐẠI LÝ
                </NavLink>
              </div>
            </li>
            <li className="nav-item ">
              <NavLink activeClassName="nav-link text-dark" to="">
                VỀ CHÚNG TÔI
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-info text-white" to="/sign-in">
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link btn btn-outline-info text-dark" to="/sign-up">
                Đăng kí
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
