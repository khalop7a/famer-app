import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./User";
class UserInfo extends Component {
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
              <strong>THÔNG TIN TÀI KHOẢN</strong>
            </h5>
            <hr />
            <div>
              <table className="table-sm" width="100%">
                <tbody>
                  <tr>
                    <td width="30%">Ảnh đại diện</td>
                    <td className="text-info">
                      <div
                        className="thumbnail-avatar"
                        style={{
                          backgroundImage:
                            "url(http://thuthuatphanmem.vn/uploads/2017/11/05/hinh-nen-4k-dep-10_124945.jpg)"
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tên đăng nhập</td>
                    <td>user</td>
                  </tr>
                  <tr>
                    <td>Mật khẩu</td>
                    <td>
                      <Link>Đổi mật khẩu</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Họ tên</td>
                    <td>Nguyễn Văn Anh</td>
                  </tr>
                  <tr>
                    <td>Điện thoại</td>
                    <td>0934 267 197</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ</td>
                    <td>Sóc Trăng, Việt Nam</td>
                  </tr>
                  <tr>
                    <td className="align-top">Tự giới thiệu</td>
                    <td className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis orci sem. Nullam rutrum
                      bibendum rhoncus. Duis ultrices tellus consequat, sodales nisl id, vehicula purus. Donec eu ipsum
                      tincidunt, vestibulum magna eu, efficitur ipsum. Suspendisse odio tellus,
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
