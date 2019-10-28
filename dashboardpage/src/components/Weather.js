import React, { Component } from "react";
import { Sun } from "react-feather";
class Weather extends Component {
  constructor(props) {
    super(props);
  }
  //Funtions

  render() {
    return (
      <div className="">
        <div className="text-center">
          <h5 className="text-warning">Thời tiết</h5>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <Sun size="80px" className="mb-3" />
            <p>Nhiệt độ: 30 C</p>
            <p>Độ ẩm: 40%</p>
            <p>Địa điểm: Sóc Trăng</p>
          </div>
          <div className="col-sm-4 text-center">
            <Sun size="80px" className="mb-3" />
            <p>Nhiệt độ: 30 C</p>
            <p>Độ ẩm: 35%</p>
            <p>Địa điểm: Cần Thơ</p>
          </div>
          <div className="col-sm-4 text-center">
            <Sun size="80px" className="mb-3" />
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
