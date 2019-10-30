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
    return <h1>Index</h1>;
  }
}
export default SignUpIndex;
