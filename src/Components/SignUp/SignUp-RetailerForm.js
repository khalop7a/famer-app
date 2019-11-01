import React, { Component } from "react";
import { Link } from "react-router-dom";
class SignUpFarmerForm extends Component {
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
      <form onSubmit={this.handleSubmit} className="" style={{ margin: "auto" }}>
        <div className="form-group d-flex">
          <span className="text-danger">(*) </span>
          <span> Vui lòng điền những thông tin bắt buộc</span>
        </div>

        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control mr-3"
            required
            id="role"
            name="role"
            value="Tôi là đại lý"
            readOnly
          />
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="form-group d-flex justify-content-around">
          <input
            type="text"
            className="form-control mr-3"
            required
            id="userName"
            name="userName"
            placeholder="Tên đăng nhập"
          />
          <p className="text-danger">(*)</p>
        </div>
        <div className="form-group d-flex">
          <input
            type="password"
            className="form-control mr-3"
            required
            id="password"
            name="password"
            placeholder="Mật khẩu"
          />
          <p className="text-danger">(*)</p>
        </div>
        <div className="form-group d-flex">
          <input type="text" className="form-control mr-3" required id="name" name="name" placeholder="Tên đại lý" />
          <p className="text-danger">(*)</p>
        </div>

        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control mr-3"
            required
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Điện thoại"
          />
          <p className="text-danger">(*)</p>
        </div>

        <div className="form-group d-flex">
          <input type="text" className="form-control mr-3" required id="address" name="address" placeholder="Địa chỉ" />
          <p className="text-danger">(*)</p>
        </div>

        <div className="form-group d-flex">
          <input type="email" className="form-control mr-3" id="email" name="email" placeholder="Email" />
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>

        <div className="form-group d-flex">
          <input type="text" className="form-control mr-3" id="website" name="website" placeholder="Website" />
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="form-group d-flex">
          <div className="checkbox">
            <input type="checkbox" required name="agree" /> Tôi đồng ý với những điều khoảng từ STFARM
          </div>
        </div>
        <div className="form-group d-flex">
          <button type="submit" className="btn btn-warning btn-block mr-3">
            Đăng ký
          </button>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="form-group d-flex">
          <p>
            <span className="text-muted small">Đã có tài khoản? </span>
            <Link to="/sign-in"> Đăng nhập ngay!</Link>
          </p>
        </div>
      </form>
    );
  }
}
export default SignUpFarmerForm;
