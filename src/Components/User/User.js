import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import UserInfo from "./User-Info";
import UserInfoEdit from "./User-Info-Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUserEdit } from "@fortawesome/free-solid-svg-icons";
class User extends Component {
  // constructor(props) {
  //   super(props);

  // }
  //Funtions
  render() {
    return (
      <div className="bg-white border">
        <div className="m-0">
          <h5 className="m-0 p-3 text-info " style={{ borderBottom: "solid 1px #DFDFDF" }}>
            <strong>THAO TÁC</strong>
          </h5>
        </div>
        <div className="list-group ">
          <NavLink
            to="/user/user-info"
            style={{ textDecoration: "none" }}
            activeStyle={{ fontWeight: "500", backgroundColor: "#82cdff" }}
            className="p-2 user-item-btn text-dark"
            exact
          >
            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
            Xem thông tin
          </NavLink>
          <NavLink
            to="/user/user-info/edit"
            style={{ textDecoration: "none" }}
            activeStyle={{ fontWeight: "500", backgroundColor: "#82cdff" }}
            className="p-2 user-item-btn text-dark"
            exact
          >
            <FontAwesomeIcon icon={faUserEdit} className="mr-2" />
            Cập nhật thông tin
          </NavLink>
        </div>
      </div>
    );
  }
}

export default User;
