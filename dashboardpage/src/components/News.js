import React, { Component } from "react";
class News extends Component {
  constructor(props) {
    super(props);
  }
  //Funtions

  render() {
    return (
      <div className="">
        <div className="text-center">
          <h2>Tin tức thông báo</h2>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-sm-5">
            <p><a href="#">Giá tôm</a></p>
            <p><a href="#">Sản lượng</a></p>
          </div>
          <div className="offset-lg-1 col-sm-5">
            <p><a href="#">Thời tiết</a></p>
            <p><a href="#">Độ mặn</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
