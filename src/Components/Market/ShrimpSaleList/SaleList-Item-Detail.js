import React, { Component } from "react";
import { Link } from "react-router-dom";
import BuyListCart from "../ShrimpBuyList/BuyList-Cart";
import SaleListCard from "./SaleList-Cart";
class SaleListItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowInfo: false };

    this.changeColor = this.changeColor.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
  //Funtions
  changeColor() {
    // alert("changecolor");
  }
  addFavorite() {
    alert("addFavorite");
  }
  showInfo() {
    console.log(this.state.isShowInfo);
    this.setState({ isShowInfo: !this.state.isShowInfo });
  }
  render() {
    var info = null;
    if (this.state.isShowInfo) {
      info = (
        <div>
          <hr />
          <table className="table-sm" width="100%">
            <tbody>
              <tr>
                <td width="50%">Điện thoại </td>
                <td>09090 0909090</td>
              </tr>
              <tr>
                <td>Địa chỉ </td>
                <td>Sóc Trăng</td>
              </tr>
              <tr>
                <td>Người bán </td>
                <td>Nguyễn Văn A</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="d-flex align-item-center justify-content-center ">
        <div className="col-sm-8 p-3 ">
          <nav aria-label="breadcrumb" className="bg-white">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <Link to="/thi-truong">Thị trường</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/thi-truong/ban-tom">Bán tôm</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chi tiết
              </li>
            </ol>
          </nav>
          <div className="bg-white p-3 border">
            <h5 className="text-muted small text-right">Đăng lúc 10:00 PM 31/10/2019</h5>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: "url(http://thuthuatphanmem.vn/uploads/2017/11/05/hinh-nen-4k-dep-10_124945.jpg)"
                    }}
                  />
                </div>
                <div className="carousel-item ">
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage:
                        "url(https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg)"
                    }}
                  />
                </div>
                <div className="carousel-item ">
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: "url(https://i.imgur.com/EdAGGFS.jpg)"
                    }}
                  />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="row my-3">
              <div className="col-sm-10">
                <table className="table-sm" width="100%">
                  <tbody>
                    <tr>
                      <td width="50%">Loại tôm</td>
                      <td className="text-info">
                        <strong>Tôm càng xanh</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Số lượng ước tính lúc thu hoạch</td>
                      <td>20 kg</td>
                    </tr>
                    <tr>
                      <td>Thời gian dự tính lúc thu hoạch</td>
                      <td>08/10/2019</td>
                    </tr>
                    <tr>
                      <td className="align-top">Ghi chú</td>
                      <td className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis orci sem. Nullam rutrum
                        bibendum rhoncus. Duis ultrices tellus consequat, sodales nisl id, vehicula purus. Donec eu
                        ipsum tincidunt, vestibulum magna eu, efficitur ipsum. Suspendisse odio tellus,
                      </td>
                    </tr>
                  </tbody>
                </table>
                {info}
              </div>
              <div className="col-sm-2">
                <button className="btn btn-info" onClick={this.showInfo}>
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <SaleListCard />
          <BuyListCart />
        </div>
      </div>
    );
  }
}

export default SaleListItemDetail;
