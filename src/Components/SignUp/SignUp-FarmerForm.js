import React, { Component } from "react";
import { Link } from "react-router-dom";
class SignUpFarmerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      phoneNumber: "",
      userAddress: "",
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
            value="Tôi là nông dân"
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
          <input
            type="text"
            className="form-control mr-3"
            required
            id="fullName"
            name="fullname"
            placeholder="Họ tên"
          />
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
          <input
            type="text"
            className="form-control mr-3"
            required
            id="userAddress"
            name="userAddress"
            placeholder="Địa chỉ"
          />
          <p className="text-danger">(*)</p>
        </div>

        <div className="form-group d-flex">
          <textarea className="form-control mr-3" rows="3" id="story" placeholder="Tự giới thiệu...."></textarea>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="form-group d-flex">
          <span>Ảnh đại diện</span>
        </div>
        <div className="form-group d-flex">
          <input type="file" class="form-control-file" id="profilePicture" />
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
