import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
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
      <div
        className="col-sm-7 offset-lg-2 d-flex bg-white p-0"
        style={{
          marginTop: "80px",
          marginBottom: "30px",
          minHeight: "85vh",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0px 2px 5px #d1d1d1"
        }}
      >
        <div
          className="col-sm-7 d-flex align-items-center justify-content-center flex-column p-5"
          style={{ backgroundImage: "linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)" }}
        >
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="mb-2">
              <img src="/picture-stfarm/login-icon-1.png" width="100px" alt="icon" />
            </div>
            <h1 className="text-white">
              <strong>ĐĂNG NHẬP</strong>
            </h1>
            <p className="text-justify text-white">
              STFarm là nền tảng kết nối nông dân, đại lý cùng các chuyên gia và chính quyền. Giúp việc nuôi trồng, mua
              bán tôm giống của người nông dân dễ dàng hơn.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column px-5">
          <form onSubmit={this.handleSubmit} className="" style={{ margin: "auto" }}>
            <div className="my-3">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faUserAlt} />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên đăng nhập"
                  id="userName"
                  name="userName"
                  required
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="my-3">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Mật khẩu"
                />
              </div>
            </div>
            <input type="submit" value="Đăng nhập" className="btn btn-block btn-info" />
          </form>
          <div className="form-group d-flex">
            <p>
              <span className="text-muted small">Chưa có tài khoản? </span>
              <Link to="/sign-up"> Đăng ký ngay!</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
