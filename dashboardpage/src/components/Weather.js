import React, { Component } from "react";
class Weather extends Component {
  constructor(props) {
    super(props);
  }
  //Funtions

  render() {
    return (
      <div className="">
        <div className="text-center">
          <h2>Thời tiết</h2>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src="shrimp_logo.jpg" alt="icon" width={150} height={150} />
            <p>Nhiệt độ: 30 C</p>
            <p>Độ ẩm: 40%</p>
            <p>Địa điểm: Sóc Trăng</p>
          </div>
          <div className="col-sm-4 text-center">
            <img src="shrimp_logo.jpg" alt="icon" width={150} height={150} />
            <p>Nhiệt độ: 30 C</p>
            <p>Độ ẩm: 35%</p>
            <p>Địa điểm: Cần Thơ</p>
          </div>
          <div className="col-sm-4 text-center">
            <img src="shrimp_logo.jpg" alt="icon" width={150} height={150} />
            <p>Nhiệt độ: 30 C</p>
            <p>Độ ẩm: 35%</p>
            <p>Địa điểm: Cần Thơ</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
