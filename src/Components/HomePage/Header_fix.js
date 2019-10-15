import React, { Component } from "react";
import { NavLink } from "react-router-dom"
class Header extends Component {
  constructor(props) {
    super(props);
    this.Header = this.Header.bind(this);
  }
  Header() {
    alert("Header home page");
  }
  render() {
    // Kiểm tra điều hướng của Đăng ký
    const checkActive = (match, location) => {
      //some additional logic to verify you are in the home URI
        const {pathname} = location;
        if (pathname === "/sign-up") return false;
        return true;
    }
    //Kiểm tra điều hướng của Đăng nhập
    const checkActive1 = (match, location) => {
        const {pathname} = location;
        if (pathname === "/sign-in") return false;
        return true;
    }
    return (
      <div>
        {/*Header*/}
        {/*nav pill*/}
        <div id="header">
          <ul className="nav nav-pills justify-content-xl-end navbar-expand-lg ">
            <li className="nav-item">
              <NavLink activeClassName="nav-link text-dark" to="/">TRANG CHỦ</NavLink>

            </li>
            <li className="nav-item dropdown">
              <NavLink activeClassName="nav-link text-dark" data-toggle="dropdown" to="/">THỊ TRƯỜNG</NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/thi-truong/ban-tom">BÁN TÔM</NavLink>
                <NavLink className="dropdown-item" to="/thi-truong/mua-tom">ĐẶT MUA TÔM</NavLink>
              </div>
            </li>
            <li className="nav-item ">
              <NavLink activeClassName="nav-link text-dark" to="">VỀ CHÚNG TÔI</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink activeClassName="nav-link text-dark" data-toggle="dropdown" to="/">TRAO ĐỔI</NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/trao-doi/dang-ban">ĐĂNG BÁN</NavLink>
                <NavLink className="dropdown-item" to="/trao-doi/tim-mua">TÌM MUA</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/sign-in" activeClassName="nav-link text-dark" isActive={checkActive1}>ĐĂNG NHẬP</NavLink>
              
            </li>
            <li className="nav-item ">
              <NavLink to="/sign-up" activeClassName="nav-link text-dark" isActive={checkActive}>ĐĂNG KÝ</NavLink>
            </li>

          </ul>
        </div>
        {/*end nav pill*/}



        {/*Header*/}
      </div>
    );
  }
};
export default Header;
