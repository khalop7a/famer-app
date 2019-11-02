import React, { Component } from "react";
import { Link } from "react-router-dom";
import BuyListCart from "../ShrimpBuyList/BuyList-Cart";
import SaleListCard from "../ShrimpSaleList/SaleList-Cart";
class AdsListItemDetail extends Component {
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
                <td width="50%">Số điện thoại </td>
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
                <Link to="/thi-truong/quang-cao">Quảng cáo</Link>
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
                      backgroundImage:
                        "url(http://www.seachoice.org/wp-content/uploads/2018/05/IMG_0009-copy-cropped-1-800x380.jpeg)"
                    }}
                  />
                </div>
                <div className="carousel-item ">
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: "url(http://www.ciba.res.in/images/photo_gallery/slider/NewPhotos/shrimp.jpg)"
                    }}
                  />
                </div>
                <div className="carousel-item ">
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage:
                        "url(https://static.intrafish.com/news/article1359463.ece5/BINARY/927f013cc6dd1905a3caed15d2fbc5e6)"
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
                      <td>Số lượng mua tối thiểu</td>
                      <td>20 kg</td>
                    </tr>
                    <tr>
                      <td>Giá / đơn vị</td>
                      <td>1000 VND / con</td>
                    </tr>
                    <tr>
                      <td className="align-top">Mô tả</td>
                      <td className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis orci sem. Nullam rutrum
                        bibendum rhoncus. Duis ultrices tellus consequat, sodales nisl id, vehicula purus. Donec eu
                        ipsum tincidunt, vestibulum magna eu, efficitur ipsum. Suspendisse odio tellus,
                      </td>
                    </tr>
                    <tr>
                      <td>Thời gian sống</td>
                      <td>24h</td>
                    </tr>
                    <tr>
                      <td>Môi trường sống</td>
                      <td>Nươc ngọt</td>
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
          <BuyListCart />
          <SaleListCard />
        </div>
      </div>
    );
  }
}

export default AdsListItemDetail;
