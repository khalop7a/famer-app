import React, { Component } from "react";
import Banner from "./Banner";
class Body extends Component {
  constructor(props) {
    super(props);
    this.Body = this.Body.bind(this);
  }

  Body() {
    alert("Header home page");
  }

  render() {
    return (
      <div>
        <Banner />
        {/*GIải pháp từ STFARM*/}
        <div className="bg-white">
          <div className="container">
            <div className="text-center">
              <h1 style={{ fontWeight: "bold" }}>
                <span className="text-info">GIẢI PHÁP </span>
                <span>từ</span>
                <span className="text-warning"> STFARM</span>
              </h1>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img alt="icon" src="/picture-stfarm/value.png" />
              </div>
              <div className="col-sm-6 d-flex align-items-center flex-column">
                <div className="text-justify my-auto">
                  STFARM là nền tảng công nghệ giúp kết nối nông dân với các chuyên gia trong lĩnh vực nuôi trồng tôm và
                  người mua bán tôm giống
                </div>
                <div className="my-auto row container">
                  <div className="align-content-lg-center btn btn-outline-info mx-3">Tìm hiểu thị trường</div>
                  <div className="align-content-lg-center btn btn-outline-info">Tìm hiểu STFARM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*END*/}
        {/*LỢI ÍCH từ STFARM*/}
        <div>
          <div className="container">
            <div className="text-center">
              <h1 style={{ fontWeight: "bold" }}>
                <span className="text-info">LỢI ÍCH </span>
                <span>từ</span>
                <span className="text-warning"> STFARM</span>
              </h1>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-sm-7">
                <div className="text-left">
                  <p>Kết nối nông dân với chuyên gia, nhà cung cấp và đại lí</p>
                  <p>Trao đổi thương lượng giữa nông dân và nhà cung cấp đại lý</p>
                  <p>Kiểm định chất lượng tôm</p>
                </div>
              </div>
              <div className="col-sm-5 text-center">
                <img alt="icon" src="/picture-stfarm/value.png" />
              </div>
            </div>
          </div>
        </div>
        {/*END*/}
        {/*Sử dụng STFARM*/}
        <div className="bg-white">
          <div className="container">
            <div className="text-center">
              <h1 style={{ fontWeight: "bold" }}>
                <span className="text-info">SỬ DỤNG </span>
                <span className="text-warning"> STFARM </span>
                <span>như thế nào?</span>
              </h1>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-sm-5">
                <img alt="icon" src="/picture-stfarm/value.png" />
              </div>
              <div className="col-sm-7">
                <div className="text-left">
                  <ol>
                    <li>Đăng nhập nền tảng STFARM</li>
                    <li>Cung cấp thông tin về tôm giống</li>
                    <li>Cung cấp thông tin về đơn hàng cần đặt</li>
                    <li>Đăng tải các thông tin lên nền tảng</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*END*/}
        {/*Bắt đầu cùng STFARM*/}
        <div>
          <div className="container">
            <div className="text-center">
              <h1 style={{ fontWeight: "bold" }}>
                <span className="text-info">BẮT ĐẦU </span>
                <span>cùng</span>
                <span className="text-warning"> STFARM </span>
              </h1>
            </div>
            <div className="row mt-5">
              <div className="col-sm-4">
                <h5 className="text-center" style={{ fontWeight: "bold" }}>
                  Tôi là nông dân
                </h5>
                <p className="text-justify">
                  <ul style={{ listStyleType: "none" }}>
                    <li>Đăng tải thông tin tôm đang nuôi trồng</li>
                    <li>Xem đơn hàng cần đặt mua từ đại lý</li>
                    <li>Nhận hỗ trợ từ chuyên gia</li>
                  </ul>
                </p>
              </div>
              <div className="col-sm-4">
                <h5 className="text-center" style={{ fontWeight: "bold" }}>
                  Tôi là đại lý
                </h5>
                <p className="text-justify">
                  <ul style={{ listStyleType: "none" }}>
                    <li>Đăng tải thông tin tôm đang nuôi trồng</li>
                    <li>Xem đơn hàng cần đặt mua từ đại lý</li>
                    <li>Nhận hỗ trợ từ chuyên gia</li>
                  </ul>
                </p>
              </div>
              <div className="col-sm-4">
                <h5 className="text-center" style={{ fontWeight: "bold" }}>
                  Tôi là chuyên gia
                </h5>
                <p className="text-justify">
                  <ul style={{ listStyleType: "none" }}>
                    <li>Đăng tải thông tin tôm đang nuôi trồng</li>
                    <li>Xem đơn hàng cần đặt mua từ đại lý</li>
                    <li>Nhận hỗ trợ từ chuyên gia</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*END*/}

        {/*DỊch vụ từ STFARM*/}
        <div className="bg-white">
          <div className="container">
            <div className="text-center">
              <h1 style={{ fontWeight: "bold" }}>
                <span className="text-info">DỊCH VỤ </span>
                <span>từ</span>
                <span className="text-warning"> STFARM </span>
              </h1>
            </div>
            {/*<div class="row">*/}
            <div className="container" style={{ marginLeft: "10%" }}>
              <div className="row">
                <div className="col-6 icon">
                  <img alt="icon" src="/picture-stfarm/support-icon.png" /> Trợ giúp kinh doanh
                </div>
                <div className="col icon">
                  <img alt="icon" src="/picture-stfarm/platform-icon.png" /> Nền tảng số
                </div>
              </div>
              <div className="row">
                <div className="col-6 icon">
                  <img alt="icon" src="/picture-stfarm/advice-icon.png" /> Lời khuyên từ chuyên gia
                </div>
                <div className="col icon">
                  <img alt="icon" src="/picture-stfarm/goverment-icon.png" /> Hỗ trợ từ chính quyền
                </div>
              </div>
            </div>
            {/*</div>*/}
          </div>
        </div>
        {/*END*/}
      </div>
    );
  }
}

export default Body;
