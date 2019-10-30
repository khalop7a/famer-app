import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserAlt } from "@fortawesome/free-solid-svg-icons";
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
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="header">
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
            <Link to="/">
              <img src="/picture-stfarm/logo.png" alt="logo-stfarm" />
            </Link>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                exact
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link"
                to="/thi-truong"
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
                data-toggle="dropdown"
              >
                THỊ TRƯỜNG
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/thi-truong/ban-tom">
                  BÁN TÔM
                </NavLink>
                <NavLink className="dropdown-item" to="/thi-truong/mua-tom">
                  MUA TÔM
                </NavLink>
                <NavLink className="dropdown-item" to="/thi-truong/quang-cao">
                  QUẢNG CÁO
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link"
                to="/dang-tin"
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
                data-toggle="dropdown"
              >
                ĐĂNG TIN
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/dang-tin/ban-tom">
                  BÁN TÔM
                </NavLink>
                <NavLink className="dropdown-item" to="/dang-tin/mua-tom">
                  MUA TÔM
                </NavLink>
                <NavLink className="dropdown-item" to="/dang-tin/quang-cao">
                  QUẢNG CÁO
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link"
                to="/doi-tac"
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
                data-toggle="dropdown"
              >
                ĐỐI TÁC
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/doi-tac/nong-dan">
                  NÔNG DÂN
                </NavLink>
                <NavLink className="dropdown-item" to="/doi-tac/dai-ly">
                  ĐẠI LÝ
                </NavLink>
              </div>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                exact
                to="/ve-chung-toi"
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
                data-toggle="dropdown"
              >
                VỀ CHÚNG TÔI
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link text-white"
                to="/sign-in"
                exact
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
              >
                <FontAwesomeIcon icon={faUserAlt} className="mr-2" />
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/sign-up"
                exact
                activeStyle={{ fontWeight: "500", backgroundColor: "#5c5c5c" }}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" />
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
