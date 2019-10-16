import React, { Component } from "react";

class SellListItem extends Component {
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
        <table className="table-sm" width="100%">
          <tbody>
            <tr>
              <td width="60%">Số điện thoại: </td>
              <td>09090 0909090</td>
            </tr>
            <tr>
              <td>Địa chỉ: </td>
              <td>Sóc Trăng</td>
            </tr>
            <tr>
              <td>Người bán: </td>
              <td>Nguyễn Văn A</td>
            </tr>
          </tbody>
        </table>
      );
    }

    return (
      <div className="col-sm-10 offset-lg-1 p-3 bg-white mb-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                alt="Third slide"
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
        <div className="row">
          <div className="col-sm-10">
            <table className="table-sm" width="100%">
              <tbody>
                <tr>
                  <td width="60%">Loại tôm</td>
                  <td className="text-primary">
                    <strong>Tôm càng xanh</strong>
                  </td>
                </tr>
                <tr>
                  <td>Giá</td>
                  <td className="text-danger">
                    <strong>200.000 đồng/kg</strong>
                  </td>
                </tr>
                <tr>
                  <td>Loại kích thước</td>
                  <td>Nhỏ</td>
                </tr>
                <tr>
                  <td>Sản lượng ước tính lúc thu hoạch</td>
                  <td>20 kg</td>
                </tr>
                <tr>
                  <td>Thời gian dự tính lúc thu hoạch</td>
                  <td>08/10/2019</td>
                </tr>
              </tbody>
            </table>
            {info}
          </div>
          <div>
            <button className="btn btn-info" onClick={this.showInfo}>
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SellListItem;
