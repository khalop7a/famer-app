import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pwd: "",
      phoneNumber: "",
      address: "",
      city: "",
      scale: "",
      companyName: "",
      agree: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Success");
    // console.log('The form was submitted with the following data:');
    // console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FormFields" >
        <div className="bg-white col-sm-12 p-3">
          <div className="row">
            <div className="bg-info offset-lg-1 col-sm-3 d-flex align-items-center">
              <h1 className="text-white text-center">
                <strong>ĐĂNG KÝ THÀNH VIÊN</strong>
              </h1>
            </div>
            <div className="bg-white col-sm-8">
              <div className="bg-white col-sm-12 p-3">
                <div className="form-group row">
                  <div className="offset-lg-3 col-sm-7">
                    <p>
                      <span className="text-danger">(*)</span>
                      <span> Thông tin bắt buộc</span>
                    </p>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="userName">
                    Tên đăng nhập
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" required id="userName" name="userName" />
                  </div>
                  <p className="text-danger">(*)</p>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="pwd">
                    Mật khẩu
                  </label>
                  <div className="col-sm-7">
                    <input type="password" className="form-control" required id="pwd" name="pwd" />
                  </div>
                  <p className="text-danger">(*)</p>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="phoneNumber">
                    Điện thoại
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" required id="phoneNumber" name="phoneNumber" />
                  </div>
                  <p className="text-danger">(*)</p>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="address">
                    Địa chỉ
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" required id="address" name="address" />
                  </div>
                  <p className="text-danger">(*)</p>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="city">
                    Thành phố
                  </label>
                  <div className="col-sm-7">
                    <input type="text" className="form-control" required id="city" name="city" />
                  </div>
                  <p className="text-danger">(*)</p>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="email">
                    Email
                  </label>
                  <div className="col-sm-7">
                    <input type="email" className="form-control" id="email" name="email" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="control-label offset-lg-1 col-sm-2" htmlFor="scale">
                    Quy mô
                  </label>
                  <div className="col-sm-3">
                    <button type="button" className="btn btn-primary btn-lg btn-block">
                      Cá nhân
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button
                      type="button"
                      className="btn btn-info btn-lg btn-block"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      Doanh nghiệp
                    </button>
                  </div>
                  <p className="text-danger">(*)</p>
                </div>
                <div className="form-group row">
                  <div id="demo" className="collapse col-sm-12">
                    <div className="row">
                      <label className="control-label offset-lg-1 col-sm-2" htmlFor="companyName">
                        Tên công ty
                      </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="companyName" name="companyName" />
                      </div>
                      <p className="text-danger">(*)</p>
                    </div>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="offset-lg-3 col-sm-7">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" required name="agree" /> Tôi đồng ý với những điều khoảng từ STFARM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-lg-3 col-sm-7">
                    <button type="submit" className="btn btn-warning btn-lg btn-block">
                      Đăng ký
                    </button>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-lg-3 col-sm-7">
                    <p>
                      Đã có tài khoản? <a href="#">Đăng nhập ngay!</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default SignUp;
