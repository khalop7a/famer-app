import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./User";
class UserInfoEdit extends Component {
  // constructor(props) {
  //   super(props);

  // }
  //Funtions
  render() {
    return (
      <div className="d-flex py-3 align-item-center justify-content-center">
        <div className="col-sm-2">
          <User />
        </div>
        <div className="col-sm-6">
          <div className="bg-white p-3 border">
            <h5 className="text-info">
              <strong>CẬP NHẬT THÔNG TIN TÀI KHOẢN</strong>
            </h5>
            <hr />
            <div>
              <form>
                <table className="table-sm" width="100%">
                  <tbody>
                    <tr>
                      <td width="30%">Ảnh đại diện</td>
                      <td className="text-info">
                        <input type="file" id="profilePicture" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Tên đăng nhập <span className="text-danger">(*)</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control mr-3"
                          required
                          id="userName"
                          name="userName"
                          placeholder="Tên đăng nhập"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Mật khẩu <span className="text-danger">(*)</span>
                      </td>
                      <td>
                        <Link to="/">Đổi mật khẩu</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Họ tên <span className="text-danger">(*)</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control mr-3"
                          required
                          id="fullName"
                          name="fullname"
                          placeholder="Họ tên"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Điện thoại <span className="text-danger">(*)</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control mr-3"
                          required
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Điện thoại"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Địa chỉ <span className="text-danger">(*)</span>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control mr-3"
                          required
                          id="userAddress"
                          name="userAddress"
                          placeholder="Địa chỉ"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top">Tự giới thiệu</td>
                      <td className="text-justify">
                        <textarea
                          className="form-control mr-3"
                          rows="3"
                          id="story"
                          placeholder="Tự giới thiệu...."
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <input type="submit" value="Cập nhật" className="btn btn-success" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoEdit;
