import React, { Component } from "react";
import SignUpFarmerForm from "./SignUp-FarmerForm";
import SignUpRetailerForm from "./SignUp-RetailerForm";
import SignUpIndex from "./SignUp-Index";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowFarmerForm: false, isShowRetailerForm: false };
    this.handleShowFarmerForm = this.handleShowFarmerForm.bind(this);
    this.handleShowRetailerForm = this.handleShowRetailerForm.bind(this);
  }
  handleShowFarmerForm() {
    this.setState({ isShowFarmerForm: true, isShowRetailerForm: false });
  }
  handleShowRetailerForm() {
    this.setState({ isShowRetailerForm: true, isShowFarmerForm: false });
  }

  render() {
    var isShowFarmerForm = this.state.isShowFarmerForm;
    var isShowRetailerForm = this.state.isShowRetailerForm;
    var elForm = "";
    if (isShowFarmerForm) {
      elForm = <SignUpFarmerForm />;
    }
    if (isShowRetailerForm) {
      elForm = <SignUpRetailerForm />;
    }
    if (!isShowFarmerForm && !isShowRetailerForm) {
      elForm = <SignUpIndex />;
    }
    return (
      <div
        className="col-sm-8 offset-lg-2 d-flex bg-white p-0"
        style={{ marginTop: "80px", marginBottom: "30px", minHeight: "85vh" }}
      >
        <div
          className="col-sm-5 d-flex justify-content-center"
          style={{ backgroundImage: "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)" }}
        >
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img src="/picture-stfarm/signup-icon.png" alt="signup-icon" width="100px" />
            <h1 className="text-white my-3 text-center">
              <strong>
                ĐĂNG KÝ <br />
                THÀNH VIÊN
              </strong>
            </h1>
            <div className="justify-content-center">
              <button
                className="btn btn-outline-light btn-block btn-lg my-3"
                style={{ fontWeight: "500" }}
                onClick={this.handleShowRetailerForm}
              >
                TÔI LÀ ĐẠI LÝ
              </button>
              <button
                className="btn-outline-light btn btn-block btn-lg"
                style={{ fontWeight: "500" }}
                onClick={this.handleShowFarmerForm}
              >
                TÔI LÀ NÔNG DÂN
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-7 p-5">{elForm}</div>
      </div>
    );
  }
}
export default SignUp;
