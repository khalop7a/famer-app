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
      <div>
        {/*Header*/}
        {/*nav pill*/}
        <div id="header">
          <ul className="nav nav-pills justify-content-xl-end navbar-expand-lg ">
            <li className="nav-item">
              <NavLink activeClassName="nav-link text-dark" to="/">
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
              </div>
            </li>
            <li className="nav-item ">
              <NavLink activeClassName="nav-link text-dark" to="">
                VỀ CHÚNG TÔI
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-dark" data-toggle="dropdown" href="/">
                TRAO ĐỔI
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/trao-doi/dang-ban">
                  ĐĂNG BÁN
                </NavLink>
                <NavLink className="dropdown-item" to="/trao-doi/tim-mua">
                  TÌM MUA
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/sign-in">
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark" href="sign-up">
                Đăng kí
              </a>
            </li>
          </ul>
        </div>
        {/*end nav pill*/}

        {/*Header*/}
      </div>
    );
  }
}
export default Header;
