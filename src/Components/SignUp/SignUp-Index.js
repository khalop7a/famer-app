import React, { Component } from "react";
import { Link } from "react-router-dom";
class SignUpIndex extends Component {
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
      <div className="d-flex justify-content-center align-items-center flex-column " style={{ marginTop: "auto" }}>
        <h2 className="text-center my-3">
          Đăng ký ngay để trở thành <br />
          thành viên
        </h2>
        <img src="/picture-stfarm/logo-lg.png" alt="logo-stfarm" width="150px" className="my-3" />
        <img src="/picture-stfarm/left-arrow.png" alt="back-icon" width="50px" />
      </div>
    );
  }
}
export default SignUpIndex;
